/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtualizarMarcadorRequestModel } from '../models/marcas/AtualizarMarcadorRequestModel';
import type { AtualizarOrdemCompraModelRequest } from '../models/ordem-compra/AtualizarOrdemCompraModelRequest';
import type { AtualizarSituacaoOrdemCompraRequestModel } from '../models/ordem-compra/AtualizarSituacaoOrdemCompraRequestModel';
import type { CriarMarcadorRequestModel } from '../models/marcas/CriarMarcadorRequestModel';
import type { CriarOrdemCompraModelRequest } from '../models/ordem-compra/CriarOrdemCompraModelRequest';
import type { CriarOrdemCompraModelResponse } from '../models/ordem-compra/CriarOrdemCompraModelResponse';
import type { LancarEstoqueOrdemCompraRequestModel } from '../models/ordem-compra/LancarEstoqueOrdemCompraRequestModel';
import type { ListarOrdemCompraModelResponse } from '../models/ordem-compra/ListarOrdemCompraModelResponse';
import type { ObterMarcadorResponseModel } from '../models/marcas/ObterMarcadorResponseModel';
import type { ObterOrdemCompraModelResponse } from '../models/ordem-compra/ObterOrdemCompraModelResponse';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdemDeCompraService {
  /**
   * @param idOrdemCompra Identificador da ordem de compra
   * @returns ObterMarcadorResponseModel OK
   * @throws ApiError
   */
  public static obterMarcadoresOrdemCompraAction(
    idOrdemCompra: number,
  ): CancelablePromise<Array<ObterMarcadorResponseModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/ordem-compra/{idOrdemCompra}/marcadores',
      path: {
        idOrdemCompra: idOrdemCompra,
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
   * @param idOrdemCompra Identificador da ordem de compra
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarMarcadoresOrdemCompraAction(
    idOrdemCompra: number,
    requestBody: Array<AtualizarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/ordem-compra/{idOrdemCompra}/marcadores',
      path: {
        idOrdemCompra: idOrdemCompra,
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
   * @param idOrdemCompra Identificador da ordem de compra
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static criarMarcadoresOrdemCompraAction(
    idOrdemCompra: number,
    requestBody: Array<CriarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ordem-compra/{idOrdemCompra}/marcadores',
      path: {
        idOrdemCompra: idOrdemCompra,
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
   * @param idOrdemCompra Identificador da ordem de compra
   * @returns void
   * @throws ApiError
   */
  public static excluirMarcadoresOrdemCompraAction(idOrdemCompra: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/ordem-compra/{idOrdemCompra}/marcadores',
      path: {
        idOrdemCompra: idOrdemCompra,
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
   * @param idOrdemCompra
   * @returns ObterOrdemCompraModelResponse OK
   * @throws ApiError
   */
  public static obterOrdemCompraAction(
    idOrdemCompra: number,
  ): CancelablePromise<ObterOrdemCompraModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/ordem-compra/{idOrdemCompra}',
      path: {
        idOrdemCompra: idOrdemCompra,
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
   * @param idOrdemCompra Identificador da ordem de compra
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarOrdemCompraAction(
    idOrdemCompra: number,
    requestBody: AtualizarOrdemCompraModelRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/ordem-compra/{idOrdemCompra}',
      path: {
        idOrdemCompra: idOrdemCompra,
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
   * @param idOrdemCompra Identificador da ordem de compra
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarSituacaoOrdemCompraAction(
    idOrdemCompra: number,
    requestBody: AtualizarSituacaoOrdemCompraRequestModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/ordem-compra/{idOrdemCompra}/situacao',
      path: {
        idOrdemCompra: idOrdemCompra,
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
   * @param numero Pesquisa através do número da ordem de compra
   * @param dataInicial Pesquisa através da data de criação da ordem de compra
   * @param dataFinal Pesquisa através da data de criação da ordem de compra
   * @param marcadores Pesquisa através dos marcadores da ordem de compra
   * @param nomeFornecedor Pesquisa através do nome do fornecedor da ordem de compra
   * @param codigoFornecedor Pesquisa através do código do fornecedor da ordem de compra
   * @param situacao Pesquisa através da situação da ordem de compra
   * - 0 - Em Aberto
   * - 1 - Atendido
   * - 2 - Cancelado
   * - 3 - Em Andamento
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarOrdensCompraAction(
    numero?: number,
    dataInicial?: string,
    dataFinal?: string,
    marcadores?: Array<string>,
    nomeFornecedor?: string,
    codigoFornecedor?: string,
    situacao?: 0 | 1 | 2 | 3,
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListarOrdemCompraModelResponse>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/ordem-compra',
      query: {
        numero: numero,
        dataInicial: dataInicial,
        dataFinal: dataFinal,
        marcadores: marcadores,
        nomeFornecedor: nomeFornecedor,
        codigoFornecedor: codigoFornecedor,
        situacao: situacao,
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
   * @returns CriarOrdemCompraModelResponse OK
   * @throws ApiError
   */
  public static criarOrdemCompraAction(
    requestBody: CriarOrdemCompraModelRequest,
  ): CancelablePromise<CriarOrdemCompraModelResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ordem-compra',
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
   * @param idOrdemCompra Identificador da ordem de compra
   * @returns void
   * @throws ApiError
   */
  public static lancarContasOrdemCompraAction(idOrdemCompra: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ordem-compra/{idOrdemCompra}/lancar-contas',
      path: {
        idOrdemCompra: idOrdemCompra,
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
   * @param idOrdemCompra Identificador da ordem de compra
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static lancarEstoqueOrdemCompraAction(
    idOrdemCompra: number,
    requestBody: LancarEstoqueOrdemCompraRequestModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ordem-compra/{idOrdemCompra}/lancar-estoque',
      path: {
        idOrdemCompra: idOrdemCompra,
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
