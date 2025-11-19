import type { CriarAgrupamentoRequestModel } from '../models/expedicao/CriarAgrupamentoRequestModel';
import type { CriarAgrupamentoResponseModel } from '../models/expedicao/CriarAgrupamentoResponseModel';
import type { ExpedicaoRequestModel } from '../models/expedicao/ExpedicaoRequestModel';
import type { ListagemAgrupamentosModel } from '../models/expedicao/ListagemAgrupamentosModel';
import type { ObterAgrupamentoResponseModel } from '../models/expedicao/ObterAgrupamentoResponseModel';
import type { ObterEtiquetasResponseModel } from '../models/expedicao/ObterEtiquetasResponseModel';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ExpediOService {
  /**
   * @param idAgrupamento Identificador do agrupamento
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public static adicionarOrigensAgrupamentoAction(
    idAgrupamento: number,
    requestBody: CriarAgrupamentoRequestModel,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/expedicao/{idAgrupamento}/origens',
      path: {
        idAgrupamento: idAgrupamento,
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
   * @param idAgrupamento Identificador do agrupamento
   * @param idExpedicao Identificador da expedição
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static alterarExpedicaoAgrupamentoAction(
    idAgrupamento: number,
    idExpedicao: number,
    requestBody: ExpedicaoRequestModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/expedicao/{idAgrupamento}/expedicao/{idExpedicao}',
      path: {
        idAgrupamento: idAgrupamento,
        idExpedicao: idExpedicao,
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
   * @param idAgrupamento Identificador do agrupamento
   * @returns any OK
   * @throws ApiError
   */
  public static concluirAgrupamentoAction(idAgrupamento: number): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/expedicao/{idAgrupamento}/concluir',
      path: {
        idAgrupamento: idAgrupamento,
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
   * @param idFormaEnvio Pesquisa através do identificador da forma de envio
   * @param dataInicial Pesquisa através da data inicial dos agrupamentos
   * @param dataFinal Pesquisa através da data final dos agrupamentos
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarAgrupamentosAction(
    idFormaEnvio?: number,
    dataInicial?: string,
    dataFinal?: string,
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemAgrupamentosModel>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/expedicao',
      query: {
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
   * @param requestBody
   * @returns CriarAgrupamentoResponseModel OK
   * @throws ApiError
   */
  public static criarAgrupamentoAction(
    requestBody: CriarAgrupamentoRequestModel,
  ): CancelablePromise<CriarAgrupamentoResponseModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/expedicao',
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
   * @param idAgrupamento
   * @returns ObterAgrupamentoResponseModel OK
   * @throws ApiError
   */
  public static obterAgrupamentoAction(
    idAgrupamento: number,
  ): CancelablePromise<ObterAgrupamentoResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/expedicao/{idAgrupamento}',
      path: {
        idAgrupamento: idAgrupamento,
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
   * @param idAgrupamento Identificador do agrupamento
   * @returns ObterEtiquetasResponseModel OK
   * @throws ApiError
   */
  public static obterEtiquetasAgrupamentoAction(
    idAgrupamento: number,
  ): CancelablePromise<ObterEtiquetasResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/expedicao/{idAgrupamento}/etiquetas',
      path: {
        idAgrupamento: idAgrupamento,
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
   * @param idAgrupamento Identificador do agrupamento
   * @param idExpedicao Identificador da expedição
   * @returns ObterEtiquetasResponseModel OK
   * @throws ApiError
   */
  public static obterEtiquetasExpedicaoAgrupamentoAction(
    idAgrupamento: number,
    idExpedicao: number,
  ): CancelablePromise<ObterEtiquetasResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/expedicao/{idAgrupamento}/expedicao/{idExpedicao}/etiquetas',
      path: {
        idAgrupamento: idAgrupamento,
        idExpedicao: idExpedicao,
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
