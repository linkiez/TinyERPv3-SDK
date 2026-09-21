import { TinyERPv3 } from './index';
import { OpenAPI } from './core/OpenAPI';

describe('TinyERPv3', () => {
  it('usa a base pública da API v3', () => {
    new TinyERPv3({ TOKEN: 'test-token' });

    expect(OpenAPI.BASE).toBe('https://api.tiny.com.br/public-api/v3');
  });
});
