import type { AtualizarProdutoEstoqueModelRequest } from '../models/produtos/AtualizarProdutoEstoqueModelRequest';
import type { AtualizarProdutoEstoqueModelResponse } from '../models/produtos/AtualizarProdutoEstoqueModelResponse';
import type { ObterEstoqueProdutoModelResponse } from '../models/produtos/ObterEstoqueProdutoModelResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EstoqueService {
  /**
   * @param idProduto Identificador do produto
   * @returns ObterEstoqueProdutoModelResponse OK
   * @throws ApiError
   */
  public static obterProdutoEstoqueAction(
    idProduto: number,
  ): CancelablePromise<ObterEstoqueProdutoModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/estoque/{idProduto}',
      path: {
        idProduto: idProduto,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
        503: `Service Unavailable`,
      },
    });
  }
  /**
   * @param idProduto Identificador do produto
   * @param requestBody
   * @returns AtualizarProdutoEstoqueModelResponse OK
   * @throws ApiError
   */
  public static atualizarProdutoEstoqueAction(
    idProduto: number,
    requestBody: AtualizarProdutoEstoqueModelRequest,
  ): CancelablePromise<AtualizarProdutoEstoqueModelResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/estoque/{idProduto}',
      path: {
        idProduto: idProduto,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
        500: `Internal Server Error`,
        503: `Service Unavailable`,
      },
    });
  }
}
