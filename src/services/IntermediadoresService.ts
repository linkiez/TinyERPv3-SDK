/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListagemIntermediadoresResponseModel } from '../models/intermediadores/ListagemIntermediadoresResponseModel';
import type { ObterIntermediadorResponseModel } from '../models/intermediadores/ObterIntermediadorResponseModel';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IntermediadoresService {
  /**
   * @param nome Pesquisa por nome parcial ou completo do intermediador
   * @param cnpj Pesquisa por cnpj do intermediador
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarIntermediadoresAction(
    nome?: string,
    cnpj?: any,
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemIntermediadoresResponseModel>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/intermediadores',
      query: {
        nome: nome,
        cnpj: cnpj,
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
   * @param idIntermediador
   * @returns ObterIntermediadorResponseModel OK
   * @throws ApiError
   */
  public static obterIntermediadorAction(
    idIntermediador: number,
  ): CancelablePromise<ObterIntermediadorResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/intermediadores/{idIntermediador}',
      path: {
        idIntermediador: idIntermediador,
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
