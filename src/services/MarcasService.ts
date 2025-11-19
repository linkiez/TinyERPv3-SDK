/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseMarcaModel } from '../models/marcas/BaseMarcaModel';
import type { CriarMarcaModelResponse } from '../models/marcas/CriarMarcaModelResponse';
import type { ListagemMarcasResponseModel } from '../models/marcas/ListagemMarcasResponseModel';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MarcasService {
  /**
   * @param idMarca Identificador da marca
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarMarcaAction(
    idMarca: number,
    requestBody: BaseMarcaModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/marcas/{idMarca}',
      path: {
        idMarca: idMarca,
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
  /**
   * @param descricao Pesquisa por descrição completa da marca
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarMarcasAction(
    descricao?: string,
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemMarcasResponseModel>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/marcas',
      query: {
        descricao: descricao,
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
   * @param requestBody
   * @returns CriarMarcaModelResponse OK
   * @throws ApiError
   */
  public static criarMarcaAction(
    requestBody: BaseMarcaModel,
  ): CancelablePromise<CriarMarcaModelResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/marcas',
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
