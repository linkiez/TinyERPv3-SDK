/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlterarSituacaoSeparacaoModelRequest } from '../models/expedicao/AlterarSituacaoSeparacaoModelRequest';
import type { ListagemSeparacaoResponseModel } from '../models/expedicao/ListagemSeparacaoResponseModel';
import type { ObterSeparacaoResponseModel } from '../models/expedicao/ObterSeparacaoResponseModel';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SeparaOService {
  /**
   * @param idSeparacao
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static alterarSituacaoSeparacaoAction(
    idSeparacao: number,
    requestBody: AlterarSituacaoSeparacaoModelRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/separacao/{idSeparacao}/situacao',
      path: {
        idSeparacao: idSeparacao,
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
   * @param situacao Pesquisa por situacao da separação.
   * - 1 - Sit Aguardando Separacao
   * - 2 - Sit Separada
   * - 3 - Sit Embalada
   * - 4 - Sit Em Separacao
   * @param idFormaEnvio Pesquisa através do identificador da forma de envio.
   * @param dataInicial Pesquisa através da data inicial dos pedidos.
   * @param dataFinal Pesquisa através da data final dos pedidos.
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarSeparacaoAction(
    situacao?: 1 | 2 | 3 | 4,
    idFormaEnvio?: number,
    dataInicial?: string,
    dataFinal?: string,
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemSeparacaoResponseModel>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/separacao',
      query: {
        situacao: situacao,
        idFormaEnvio: idFormaEnvio,
        dataInicial: dataInicial,
        dataFinal: dataFinal,
        orderBy: orderBy,
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
   * @param idSeparacao
   * @returns ObterSeparacaoResponseModel OK
   * @throws ApiError
   */
  public static obterSeparacaoAction(
    idSeparacao: number,
  ): CancelablePromise<ObterSeparacaoResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/separacao/{idSeparacao}',
      path: {
        idSeparacao: idSeparacao,
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
