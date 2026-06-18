import { jest } from '@jest/globals';
import { TinyOAuth } from './TinyOAuth';
import type { TinyTokenSet } from './TinyOAuth';

const baseConfig = {
  clientId: 'client-id',
  clientSecret: 'client-secret',
  redirectUri: 'https://app.example.com/callback',
};

const mockFetch = (data: Record<string, unknown>, ok = true) =>
  jest.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
    ok,
    status: ok ? 200 : 400,
    text: async () => JSON.stringify(data),
    json: async () => data,
  } as Response);

describe('TinyOAuth', () => {
  let oauth: TinyOAuth;

  beforeEach(() => {
    oauth = new TinyOAuth(baseConfig);
    jest.restoreAllMocks();
  });

  describe('buildAuthorizationUrl', () => {
    it('deve incluir client_id, redirect_uri, scope e response_type', () => {
      const url = oauth.buildAuthorizationUrl();
      expect(url).toContain('client_id=client-id');
      expect(url).toContain('redirect_uri=');
      expect(url).toContain('scope=openid');
      expect(url).toContain('response_type=code');
    });

    it('deve incluir state quando fornecido', () => {
      const url = oauth.buildAuthorizationUrl('csrf-token');
      expect(url).toContain('state=csrf-token');
    });

    it('deve usar scope personalizado', () => {
      const o = new TinyOAuth({ ...baseConfig, scope: 'openid profile' });
      const url = o.buildAuthorizationUrl();
      expect(url).toContain('scope=openid+profile');
    });
  });

  describe('exchangeCode', () => {
    it('deve trocar code por token set', async () => {
      const spy = mockFetch({
        access_token: 'access-123',
        refresh_token: 'refresh-456',
        expires_in: 14400,
        token_type: 'Bearer',
        scope: 'openid',
      });

      const ts = await oauth.exchangeCode('auth-code');

      expect(ts.access_token).toBe('access-123');
      expect(ts.refresh_token).toBe('refresh-456');
      expect(ts.expires_at).toBeGreaterThan(Date.now());
      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining('/token'),
        expect.objectContaining({ method: 'POST' }),
      );
    });

    it('deve lançar erro quando o servidor responde com não-ok', async () => {
      mockFetch({ error: 'invalid_grant' }, false);
      await expect(oauth.exchangeCode('bad-code')).rejects.toThrow(
        'TinyOAuth token request failed',
      );
    });
  });

  describe('refreshAccessToken', () => {
    it('deve renovar access token via refresh token', async () => {
      mockFetch({ access_token: 'new-access', refresh_token: 'new-refresh', expires_in: 14400 });
      const ts = await oauth.refreshAccessToken('old-refresh');
      expect(ts.access_token).toBe('new-access');
    });

    it('passa grant_type=refresh_token e o refresh_token no body', async () => {
      const spy = mockFetch({ access_token: 'a', expires_in: 14400 });
      await oauth.refreshAccessToken('old-rt');
      const call = spy.mock.calls[0];
      const body = (call[1] as RequestInit).body as URLSearchParams;
      expect(body.get('grant_type')).toBe('refresh_token');
      expect(body.get('refresh_token')).toBe('old-rt');
    });
  });

  describe('isExpired', () => {
    it('retorna false quando expires_at indefinido', () => {
      expect(oauth.isExpired({ access_token: 'tok' })).toBe(false);
    });

    it('retorna true quando expirado (com buffer 60s)', () => {
      expect(oauth.isExpired({ access_token: 'tok', expires_at: Date.now() - 1 })).toBe(true);
    });

    it('retorna false quando ainda dentro da janela', () => {
      expect(oauth.isExpired({ access_token: 'tok', expires_at: Date.now() + 120_000 })).toBe(
        false,
      );
    });
  });

  describe('createTokenResolver', () => {
    it('retorna access_token diretamente quando não expirado', async () => {
      const spy = jest.spyOn(globalThis, 'fetch');
      const resolver = oauth.createTokenResolver({
        access_token: 'current-token',
        expires_at: Date.now() + 600_000,
      });

      const token = await resolver();
      expect(token).toBe('current-token');
      expect(spy).not.toHaveBeenCalled();
    });

    it('auto-renova quando expirado e chama onRefresh', async () => {
      mockFetch({ access_token: 'refreshed', refresh_token: 'new-rt', expires_in: 14400 });

      const onRefresh = jest.fn() as jest.MockedFunction<(ts: TinyTokenSet) => void>;
      const resolver = oauth.createTokenResolver(
        { access_token: 'old', refresh_token: 'rt', expires_at: Date.now() - 1 },
        onRefresh,
      );

      const token = await resolver();
      expect(token).toBe('refreshed');
      expect(onRefresh).toHaveBeenCalledWith(
        expect.objectContaining({ access_token: 'refreshed' }),
      );
    });
  });
});
