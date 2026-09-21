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
  private reservationTimestamps: number[] = [];
  private resetAt = 0;
  private remaining: number | undefined;
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
  updateFromHeaders(headers: RateLimitHeaders): void {
    const raw = getHeader(headers, 'x-ratelimit-limit') ?? getHeader(headers, 'x-limit-api');
    if (!raw) return;

    const value = Number.parseInt(raw, 10);
    if (!Number.isNaN(value) && value > 0) {
      this.rateLimit = value;
    }

    const remaining = Number.parseInt(getHeader(headers, 'x-ratelimit-remaining') ?? '', 10);
    this.remaining = Number.isNaN(remaining) ? undefined : Math.max(remaining, 0);

    const resetSeconds = Number.parseInt(getHeader(headers, 'x-ratelimit-reset') ?? '', 10);
    if (!Number.isNaN(resetSeconds) && resetSeconds >= 0) {
      this.resetAt = Date.now() + resetSeconds * 1000;
    }
  }

  /**
   * Records the current request timestamp and optionally updates the ceiling
   * from response headers.
   */
  recordRequest(headers?: RateLimitHeaders): void {
    if (this.reservationTimestamps.length > 0) {
      this.reservationTimestamps.shift();
    } else {
      this.requestTimestamps.push(Date.now());
    }
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
    while (true) {
      this.evict();
      const now = Date.now();
      if (this.remaining === 0 && this.resetAt <= now) {
        this.remaining = undefined;
      }
      const resetWaitMs = this.remaining === 0 ? this.resetAt - now : 0;

      if (resetWaitMs <= 0 && this.requestTimestamps.length < this.rateLimit) {
        this.requestTimestamps.push(now);
        this.reservationTimestamps.push(now);
        return;
      }

      const oldest = this.requestTimestamps[0] ?? now;
      const windowWaitMs = oldest + this.windowMs - now;
      const waitMs = resetWaitMs > 0 ? resetWaitMs : windowWaitMs;
      if (waitMs > 0) {
        await this.sleep(waitMs);
      } else {
        this.remaining = undefined;
      }
    }
  }

  /** Releases a reserved slot when the request was not sent. */
  releaseReservation(): void {
    const reservation = this.reservationTimestamps.pop();
    if (reservation === undefined) return;

    const requestIndex = this.requestTimestamps.lastIndexOf(reservation);
    if (requestIndex >= 0) {
      this.requestTimestamps.splice(requestIndex, 1);
    }
  }

  /** Resets all tracked timestamps and optionally the ceiling. */
  reset(newLimit?: number): void {
    this.requestTimestamps = [];
    this.reservationTimestamps = [];
    this.remaining = undefined;
    this.resetAt = 0;
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
      this.reservationTimestamps = this.reservationTimestamps.filter(
        (timestamp) => timestamp > cutoff,
      );
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

type RateLimitHeaders =
  | Record<string, string | string[] | undefined>
  | { get(name: string): string | null };

function getHeader(headers: RateLimitHeaders, name: string): string | undefined {
  if ('get' in headers && typeof headers.get === 'function') {
    return headers.get(name) ?? undefined;
  }

  const recordHeaders = headers as Record<string, string | string[] | undefined>;
  const key = Object.keys(recordHeaders).find((header) => header.toLowerCase() === name);
  const value = key ? recordHeaders[key] : undefined;
  return Array.isArray(value) ? value[0] : value;
}

const globalLimiters = new Map<string, RateLimiter>();

/**
 * Returns the shared limiter for an access token.
 * Different SDK clients using the same token must share one request window.
 */
export function getRateLimiterForToken(token: string, rateLimit = 120): RateLimiter {
  const existing = globalLimiters.get(token);
  if (existing) {
    return existing;
  }

  const limiter = new RateLimiter(rateLimit);
  globalLimiters.set(token, limiter);
  return limiter;
}

/** Clears shared limiters. Intended for tests and process lifecycle resets. */
export function clearRateLimiterRegistry(): void {
  globalLimiters.clear();
}
