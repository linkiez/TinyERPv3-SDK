import { TinyERPv3 } from './index';
import { OpenAPI } from './core/OpenAPI';
import { clearRateLimiterRegistry } from './core/RateLimiter';

describe('TinyERPv3', () => {
  afterEach(() => {
    clearRateLimiterRegistry();
    OpenAPI.RATE_LIMITER = undefined;
  });

  it('usa a base pública da API v3', () => {
    new TinyERPv3({ TOKEN: 'test-token' });

    expect(OpenAPI.BASE).toBe('https://api.tiny.com.br/public-api/v3');
  });

  it('compartilha o rate limiter entre instâncias com o mesmo token', () => {
    new TinyERPv3({ TOKEN: 'shared-token', rateLimit: 60 });
    const firstLimiter = OpenAPI.RATE_LIMITER;

    new TinyERPv3({ TOKEN: 'shared-token', rateLimit: 60 });

    expect(firstLimiter).toBeDefined();
    expect(OpenAPI.RATE_LIMITER).toBe(firstLimiter);
  });
});
