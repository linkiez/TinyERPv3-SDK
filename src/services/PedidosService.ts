/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtualizarInfoRastreamentoPedidoModelRequest } from '../models/pedidos/AtualizarInfoRastreamentoPedidoModelRequest';
import type { AtualizarMarcadorRequestModel } from '../models/marcas/AtualizarMarcadorRequestModel';
import type { AtualizarPedidoModelRequest } from '../models/pedidos/AtualizarPedidoModelRequest';
import type { AtualizarSituacaoPedidoModelRequest } from '../models/pedidos/AtualizarSituacaoPedidoModelRequest';
import type { CriarMarcadorRequestModel } from '../models/marcas/CriarMarcadorRequestModel';
import type { CriarPedidoModelRequest } from '../models/pedidos/CriarPedidoModelRequest';
import type { CriarPedidoModelResponse } from '../models/pedidos/CriarPedidoModelResponse';
import type { GerarNotaFiscalPedidoModelResponse } from '../models/pedidos/GerarNotaFiscalPedidoModelResponse';
import type { ListagemPedidoModelResponse } from '../models/pedidos/ListagemPedidoModelResponse';
import type { ObterMarcadorResponseModel } from '../models/marcas/ObterMarcadorResponseModel';
import type { ObterPedidoModelResponse } from '../models/pedidos/ObterPedidoModelResponse';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PedidosService {
  /**
   * @param idPedido Identificador do pedido
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarInfoRastreamentoPedidoAction(
    idPedido: number,
    requestBody: AtualizarInfoRastreamentoPedidoModelRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/pedidos/{idPedido}/despacho',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @returns ObterMarcadorResponseModel OK
   * @throws ApiError
   */
  public static obterMarcadoresPedidoAction(
    idPedido: number,
  ): CancelablePromise<Array<ObterMarcadorResponseModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/pedidos/{idPedido}/marcadores',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarMarcadoresPedidoAction(
    idPedido: number,
    requestBody: Array<AtualizarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/pedidos/{idPedido}/marcadores',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static criarMarcadoresPedidoAction(
    idPedido: number,
    requestBody: Array<CriarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/pedidos/{idPedido}/marcadores',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @returns void
   * @throws ApiError
   */
  public static excluirMarcadoresPedidoAction(idPedido: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/pedidos/{idPedido}/marcadores',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @returns ObterPedidoModelResponse OK
   * @throws ApiError
   */
  public static obterPedidoAction(idPedido: number): CancelablePromise<ObterPedidoModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/pedidos/{idPedido}',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarPedidoAction(
    idPedido: number,
    requestBody: AtualizarPedidoModelRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/pedidos/{idPedido}',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarSituacaoPedidoAction(
    idPedido: number,
    requestBody: AtualizarSituacaoPedidoModelRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/pedidos/{idPedido}/situacao',
      path: {
        idPedido: idPedido,
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
   * @param numero Pesquisa por número do pedido
   * @param nomeCliente Pesquisa por nome do cliente
   * @param codigoCliente Pesquisa por código do cliente
   * @param cnpj Pesquisa por CPF/CNPJ do cliente
   * @param dataInicial Pesquisa através da data de criação do pedido
   * @param dataFinal Pesquisa através da data de criação do pedido
   * @param dataAtualizacao Pesquisa através da data de atualização do pedido
   * @param situacao Pesquisa com base na situação informada
   * - 8 - Dados Incompletos
   * - 0 - Aberta
   * - 3 - Aprovada
   * - 4 - Preparando Envio
   * - 1 - Faturada
   * - 7 - Pronto Envio
   * - 5 - Enviada
   * - 6 - Entregue
   * - 2 - Cancelada
   * - 9 - Nao Entregue
   * @param numeroPedidoEcommerce Pesquisa por número do pedido no e-commerce
   * @param idVendedor Pesquisa por id do vendedor
   * @param marcadores Pesquisa por marcadores
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarPedidosAction(
    numero?: number,
    nomeCliente?: string,
    codigoCliente?: string,
    cnpj?: string,
    dataInicial?: string,
    dataFinal?: string,
    dataAtualizacao?: string,
    situacao?: 8 | 0 | 3 | 4 | 1 | 7 | 5 | 6 | 2 | 9,
    numeroPedidoEcommerce?: string,
    idVendedor?: number,
    marcadores?: Array<string>,
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemPedidoModelResponse>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/pedidos',
      query: {
        numero: numero,
        nomeCliente: nomeCliente,
        codigoCliente: codigoCliente,
        cnpj: cnpj,
        dataInicial: dataInicial,
        dataFinal: dataFinal,
        dataAtualizacao: dataAtualizacao,
        situacao: situacao,
        numeroPedidoEcommerce: numeroPedidoEcommerce,
        idVendedor: idVendedor,
        marcadores: marcadores,
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
   * @returns CriarPedidoModelResponse OK
   * @throws ApiError
   */
  public static criarPedidoAction(
    requestBody: CriarPedidoModelRequest,
  ): CancelablePromise<CriarPedidoModelResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/pedidos',
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
   * @param idPedido Identificador do pedido
   * @returns void
   * @throws ApiError
   */
  public static estornarContasPedidoAction(idPedido: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/pedidos/{idPedido}/estornar-contas',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @returns void
   * @throws ApiError
   */
  public static estornarEstoquePedidoAction(idPedido: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/pedidos/{idPedido}/estornar-estoque',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @returns GerarNotaFiscalPedidoModelResponse OK
   * @throws ApiError
   */
  public static gerarNotaFiscalPedidoAction(
    idPedido: number,
  ): CancelablePromise<GerarNotaFiscalPedidoModelResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/pedidos/{idPedido}/gerar-nota-fiscal',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @returns void
   * @throws ApiError
   */
  public static lancarContasPedidoAction(idPedido: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/pedidos/{idPedido}/lancar-contas',
      path: {
        idPedido: idPedido,
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
   * @param idPedido Identificador do pedido
   * @returns void
   * @throws ApiError
   */
  public static lancarEstoquePedidoAction(idPedido: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/pedidos/{idPedido}/lancar-estoque',
      path: {
        idPedido: idPedido,
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
