/**
 * Sliding-window rate limiter for TinyERP API requests.
 *
 * The Tiny v3 API enforces per-account limits (not per-app):
 * | Plan                       | reads/min | writes/min |
 * |----------------------------|-----------|------------|
 * | Básico / Crescer           | 60        | 30         |
 * | Essencial / Evoluir        | 120       | 60         |
 * | Grande / Potencializar     | 240       | 100        |
 *
 * The API responds with `x-ratelimit-limit` header; when detected the limiter
 * updates its ceiling automatically.
 *
 * Usage:
 * ```typescript
 * const limiter = new RateLimiter(120); // 120 req/min default
 * await limiter.waitIfNeeded();
 * // make request
 * limiter.recordRequest(responseHeaders);
 * ```
 */
export class RateLimiter {
  private requestTimestamps: number[] = [];
  private rateLimit: number;

  /** Window size in ms — always 1 minute. */
  private readonly windowMs = 60_000;

  constructor(rateLimit = 120) {
    this.rateLimit = rateLimit;
  }

  /** Current configured limit (req/min). */
  get limit(): number {
    return this.rateLimit;
  }

  /**
   * Update the rate limit ceiling from an API response header.
   * Accepts `x-ratelimit-limit` or `x-limit-api`.
   */
  updateFromHeaders(headers: Record<string, string | string[] | undefined>): void {
    const raw = headers['x-ratelimit-limit'] ?? headers['x-limit-api'];
    if (!raw) return;

    const value = Number.parseInt(String(Array.isArray(raw) ? raw[0] : raw), 10);
    if (!Number.isNaN(value) && value > 0) {
      this.rateLimit = value;
    }
  }

  /**
   * Records the current request timestamp and optionally updates the ceiling
   * from response headers.
   */
  recordRequest(headers?: Record<string, string | string[] | undefined>): void {
    this.requestTimestamps.push(Date.now());
    this.evict();
    if (headers) {
      this.updateFromHeaders(headers);
    }
  }

  /**
   * Waits until sending the next request would not exceed the rate limit.
   * Returns immediately when under the ceiling.
   */
  async waitIfNeeded(): Promise<void> {
    this.evict();

    if (this.requestTimestamps.length < this.rateLimit) {
      return;
    }

    // oldest timestamp still inside the window
    const oldest = this.requestTimestamps[0];
    const waitMs = oldest + this.windowMs - Date.now();
    if (waitMs > 0) {
      await this.sleep(waitMs);
      this.evict();
    }
  }

  /** Resets all tracked timestamps and optionally the ceiling. */
  reset(newLimit?: number): void {
    this.requestTimestamps = [];
    if (newLimit !== undefined && newLimit > 0) {
      this.rateLimit = newLimit;
    }
  }

  private evict(): void {
    const cutoff = Date.now() - this.windowMs;
    let i = 0;
    while (i < this.requestTimestamps.length && this.requestTimestamps[i] <= cutoff) {
      i++;
    }
    if (i > 0) {
      this.requestTimestamps = this.requestTimestamps.slice(i);
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
