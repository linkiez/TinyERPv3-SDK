import { jest } from '@jest/globals';
import { OpenAPI } from './OpenAPI';
import type { OnCancel } from './CancelablePromise';
import { sendRequest } from './request';

describe('sendRequest', () => {
  const onCancel = (() => undefined) as unknown as OnCancel;

  beforeEach(() => {
    jest.restoreAllMocks();
    OpenAPI.BASE = 'https://api.tiny.com.br/public-api/v3';
  });

  it('aceita resposta JSON vazia', async () => {
    jest.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response('', {
        status: 200,
        headers: { 'content-type': 'application/json' },
      }),
    );

    const result = await sendRequest(
      OpenAPI,
      { method: 'GET', url: '/contas-pagar' },
      'https://api.tiny.com.br/public-api/v3/contas-pagar',
      undefined,
      undefined,
      {},
      onCancel,
    );

    expect(result.data).toBeUndefined();
  });
});
