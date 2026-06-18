import axios from 'axios';

/**
 * Configuration required to instantiate the OAuth flow.
 */
export type TinyOAuthConfig = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  /** Space-separated scopes. Defaults to 'openid'. */
  scope?: string;
};

/**
 * Token set returned by Tiny OAuth 2.0.
 * - access_token expires in 4 hours.
 * - refresh_token expires in 1 day.
 */
export type TinyTokenSet = {
  access_token: string;
  refresh_token?: string;
  /** Unix timestamp in ms of when the access token expires. */
  expires_at?: number;
  token_type?: string;
  scope?: string;
};

const OAUTH_BASE = 'https://accounts.tiny.com.br/realms/tiny/protocol/openid-connect';

/**
 * Tiny ERP v3 OAuth 2.0 helper.
 *
 * Supports:
 * - Authorization URL generation (code flow).
 * - Code → token exchange.
 * - Refresh token renewal.
 * - Automatic refresh via `createTokenResolver()`.
 *
 * @example
 * ```typescript
 * const oauth = new TinyOAuth({ clientId: '...', clientSecret: '...', redirectUri: '...' });
 * const authUrl = oauth.buildAuthorizationUrl('optional-state');
 * // redirect user to authUrl, receive code back
 * const tokenSet = await oauth.exchangeCode(code);
 * const tiny = new TinyERPv3({
 *   TOKEN: oauth.createTokenResolver(tokenSet, (ts) => persistTokenSet(ts)),
 * });
 * ```
 */
export class TinyOAuth {
  private readonly config: Required<TinyOAuthConfig>;

  constructor(config: TinyOAuthConfig) {
    this.config = {
      scope: 'openid',
      ...config,
    };
  }

  /**
   * Builds the authorization URL the user must be redirected to.
   * @param state Optional CSRF state parameter.
   */
  buildAuthorizationUrl(state?: string): string {
    const params = new URLSearchParams({
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      scope: this.config.scope,
      response_type: 'code',
    });
    if (state) {
      params.set('state', state);
    }
    return `${OAUTH_BASE}/auth?${params.toString()}`;
  }

  /**
   * Exchanges an authorization code for a token set.
   * @param code The code received in the redirect URI callback.
   */
  async exchangeCode(code: string): Promise<TinyTokenSet> {
    const response = await axios.post<Record<string, unknown>>(
      `${OAUTH_BASE}/token`,
      new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        redirect_uri: this.config.redirectUri,
        code,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );
    return this.parseTokenResponse(response.data);
  }

  /**
   * Refreshes an expired access token using the refresh token.
   * @param refreshToken The refresh token from a previous token set.
   */
  async refreshAccessToken(refreshToken: string): Promise<TinyTokenSet> {
    const response = await axios.post<Record<string, unknown>>(
      `${OAUTH_BASE}/token`,
      new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        refresh_token: refreshToken,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );
    return this.parseTokenResponse(response.data);
  }

  /**
   * Returns true if the access token is expired (with 60s buffer).
   */
  isExpired(tokenSet: TinyTokenSet): boolean {
    if (!tokenSet.expires_at) return false;
    return Date.now() >= tokenSet.expires_at - 60_000;
  }

  /**
   * Creates a token resolver compatible with `OpenAPIConfig.TOKEN`.
   * - Auto-refreshes the access token when it is about to expire.
   * - Calls `onRefresh` whenever a new token set is obtained (use to persist it).
   *
   * @param tokenSet Initial token set.
   * @param onRefresh Optional callback called with the updated token set after refresh.
   */
  createTokenResolver(
    tokenSet: TinyTokenSet,
    onRefresh?: (updated: TinyTokenSet) => void,
  ): () => Promise<string> {
    let current = tokenSet;

    return async (): Promise<string> => {
      if (this.isExpired(current) && current.refresh_token) {
        current = await this.refreshAccessToken(current.refresh_token);
        onRefresh?.(current);
      }
      return current.access_token;
    };
  }

  private parseTokenResponse(data: Record<string, unknown>): TinyTokenSet {
    const expiresIn = typeof data['expires_in'] === 'number' ? data['expires_in'] : undefined;

    return {
      access_token: String(data['access_token'] ?? ''),
      refresh_token: typeof data['refresh_token'] === 'string' ? data['refresh_token'] : undefined,
      token_type: typeof data['token_type'] === 'string' ? data['token_type'] : undefined,
      scope: typeof data['scope'] === 'string' ? data['scope'] : undefined,
      expires_at: expiresIn !== undefined ? Date.now() + expiresIn * 1000 : undefined,
    };
  }
}
