/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListagemFormasPagamentoResponseModel } from '../models/formas-pagamento/ListagemFormasPagamentoResponseModel';
import type { ObterFormaPagamentoResponseModel } from '../models/formas-pagamento/ObterFormaPagamentoResponseModel';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FormasDePagamentoService {
  /**
   * @param nome Pesquisa por nome parcial ou completo da forma de pagamento
   * @param situacao Pesquisa por situação da forma de pagamento
   * - 1 - Habilitada
   * - 2 - Desabilitada
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarFormasPagamentoAction(
    nome?: string,
    situacao?: 1 | 2,
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemFormasPagamentoResponseModel>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/formas-pagamento',
      query: {
        nome: nome,
        situacao: situacao,
        limit: limit,
        offset: offset,
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
   * @param idFormaPagamento
   * @returns ObterFormaPagamentoResponseModel OK
   * @throws ApiError
   */
  public static obterFormaPagamentoAction(
    idFormaPagamento: number,
  ): CancelablePromise<ObterFormaPagamentoResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/formas-pagamento/{idFormaPagamento}',
      path: {
        idFormaPagamento: idFormaPagamento,
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
}
