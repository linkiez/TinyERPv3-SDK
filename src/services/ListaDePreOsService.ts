/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListagemListaDePrecosModelResponse } from '../models/lista-precos/ListagemListaDePrecosModelResponse';
import type { ObterListaDePrecosModelResponse } from '../models/lista-precos/ObterListaDePrecosModelResponse';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ListaDePreOsService {
  /**
   * @param nome Pesquisa por nome parcial ou completo da lista de preços
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarListasDePrecosAction(
    nome?: string,
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemListaDePrecosModelResponse>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/listas-precos',
      query: {
        nome: nome,
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
   * @param idListaDePreco
   * @returns ObterListaDePrecosModelResponse OK
   * @throws ApiError
   */
  public static obterListaDePrecosAction(
    idListaDePreco: number,
  ): CancelablePromise<ObterListaDePrecosModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/listas-precos/{idListaDePreco}',
      path: {
        idListaDePreco: idListaDePreco,
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
