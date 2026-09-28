import { jest } from '@jest/globals';
import { TinyOAuth } from './TinyOAuth';

describe('TinyOAuth', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('reports an empty token response clearly', async () => {
    jest.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('', { status: 200 }));

    const oauth = new TinyOAuth({
      clientId: 'client-id',
      clientSecret: 'client-secret',
      redirectUri: 'https://app.example/callback',
    });

    await expect(oauth.refreshAccessToken('refresh-token')).rejects.toThrow('empty response');
  });
});
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

    it('retorna true quando expires_at zero sinaliza credencial legada', () => {
      expect(oauth.isExpired({ access_token: 'tok', expires_at: 0 })).toBe(true);
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

    it('preserva o refresh token anterior quando a resposta não o devolve', async () => {
      jest.useFakeTimers({ now: Date.now() });
      const fetchMock = jest
        .spyOn(globalThis, 'fetch')
        .mockResolvedValueOnce({
          ok: true,
          status: 200,
          text: async () => JSON.stringify({ access_token: 'refreshed-1', expires_in: 14400 }),
        } as Response)
        .mockResolvedValueOnce({
          ok: true,
          status: 200,
          text: async () => JSON.stringify({ access_token: 'refreshed-2', expires_in: 14400 }),
        } as Response);
      const resolver = oauth.createTokenResolver({
        access_token: 'old',
        refresh_token: 'original-rt',
        expires_at: Date.now() - 1,
      });

      await expect(resolver()).resolves.toBe('refreshed-1');
      jest.setSystemTime(Date.now() + 14_400_001);
      await expect(resolver()).resolves.toBe('refreshed-2');

      const secondBody = fetchMock.mock.calls[1][1]?.body as URLSearchParams;
      expect(secondBody.get('refresh_token')).toBe('original-rt');
      jest.useRealTimers();
    });

    it('compartilha uma única renovação entre chamadas concorrentes', async () => {
      let releaseRefresh!: () => void;
      const refreshStarted = new Promise<void>((resolve) => {
        releaseRefresh = resolve;
      });
      const fetchMock = jest.spyOn(globalThis, 'fetch').mockImplementation(async () => {
        await refreshStarted;
        return {
          ok: true,
          status: 200,
          text: async () => JSON.stringify({ access_token: 'refreshed', expires_in: 14400 }),
        } as Response;
      });
      const resolver = oauth.createTokenResolver({
        access_token: 'old',
        refresh_token: 'original-rt',
        expires_at: Date.now() - 1,
      });

      const first = resolver();
      const second = resolver();
      releaseRefresh();

      await expect(Promise.all([first, second])).resolves.toEqual(['refreshed', 'refreshed']);
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
  });
});
