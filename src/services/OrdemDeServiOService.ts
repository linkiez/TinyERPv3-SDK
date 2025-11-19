/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtualizarMarcadorRequestModel } from '../models/marcas/AtualizarMarcadorRequestModel';
import type { AtualizarOrdemServicoRequestModel } from '../models/ordem-servico/AtualizarOrdemServicoRequestModel';
import type { AtualizarSituacaoPedidoModelRequest } from '../models/pedidos/AtualizarSituacaoPedidoModelRequest';
import type { CriarMarcadorRequestModel } from '../models/marcas/CriarMarcadorRequestModel';
import type { CriarOrdemServicoRequestModel } from '../models/ordem-servico/CriarOrdemServicoRequestModel';
import type { CriarOrdemServicoResponseModel } from '../models/ordem-servico/CriarOrdemServicoResponseModel';
import type { GerarNotaFiscalOrdemServicoModelResponse } from '../models/notas-fiscais/GerarNotaFiscalOrdemServicoModelResponse';
import type { LancarEstoqueOrdemServicoRequestModel } from '../models/ordem-servico/LancarEstoqueOrdemServicoRequestModel';
import type { ListagemOrdemServicoResponseModel } from '../models/ordem-servico/ListagemOrdemServicoResponseModel';
import type { ObterMarcadorResponseModel } from '../models/marcas/ObterMarcadorResponseModel';
import type { ObterOrdemServicoModelResponse } from '../models/ordem-servico/ObterOrdemServicoModelResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdemDeServiOService {
  /**
   * @param idOrdemServico Identificador da ordem de serviço
   * @returns ObterMarcadorResponseModel OK
   * @throws ApiError
   */
  public static obterMarcadoresOrdemServicoAction(
    idOrdemServico: number,
  ): CancelablePromise<Array<ObterMarcadorResponseModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/ordem-servico/{idOrdemServico}/marcadores',
      path: {
        idOrdemServico: idOrdemServico,
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
   * @param idOrdemServico Identificador da ordem de serviço
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarMarcadoresOrdemServicoAction(
    idOrdemServico: number,
    requestBody: Array<AtualizarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/ordem-servico/{idOrdemServico}/marcadores',
      path: {
        idOrdemServico: idOrdemServico,
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
   * @param idOrdemServico Identificador da ordem de serviço
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static criarMarcadoresOrdemServicoAction(
    idOrdemServico: number,
    requestBody: Array<CriarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ordem-servico/{idOrdemServico}/marcadores',
      path: {
        idOrdemServico: idOrdemServico,
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
   * @param idOrdemServico Identificador da ordem de serviço
   * @returns void
   * @throws ApiError
   */
  public static excluirMarcadoresOrdemServicoAction(
    idOrdemServico: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/ordem-servico/{idOrdemServico}/marcadores',
      path: {
        idOrdemServico: idOrdemServico,
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
   * @param idOrdemServico
   * @returns ObterOrdemServicoModelResponse OK
   * @throws ApiError
   */
  public static obterOrdemServicoAction(
    idOrdemServico: number,
  ): CancelablePromise<ObterOrdemServicoModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/ordem-servico/{idOrdemServico}',
      path: {
        idOrdemServico: idOrdemServico,
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
   * @param idOrdemServico Identificador da ordem de serviço
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarOrdemServicoAction(
    idOrdemServico: number,
    requestBody: AtualizarOrdemServicoRequestModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/ordem-servico/{idOrdemServico}',
      path: {
        idOrdemServico: idOrdemServico,
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
   * @param idOrdemServico Identificador da ordem de serviço
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarSituacaoOrdemServicoAction(
    idOrdemServico: number,
    requestBody: AtualizarSituacaoPedidoModelRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/ordem-servico/{idOrdemServico}/situacao',
      path: {
        idOrdemServico: idOrdemServico,
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
   * @param nomeCliente Pesquisa por nome do cliente de ordem de servico
   * @param situacao Pesquisa por situação de ordem de servico
   * - 4 - Nao Aprovada
   * - 3 - Finalizada
   * - 0 - Em Aberto
   * - 2 - Serv Concluido
   * - 1 - Orcada
   * - 5 - Aprovada
   * - 6 - Em Andamento
   * - 7 - Cancelada
   * @param dataInicialEmissao Pesquisa por data inicial da emissão de ordem de servico
   * @param dataFinalEmissao Pesquisa por data final da emissão de ordem de servico
   * @param numeroOrdemServico Pesquisa por número de ordem de servico
   * @param marcadores Pesquisa por marcadores
   * @param idContato Pesquisa por ID do contato de ordem de servico
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns ListagemOrdemServicoResponseModel OK
   * @throws ApiError
   */
  public static listarOrdemServicoAction(
    nomeCliente?: string,
    situacao?: 4 | 3 | 0 | 2 | 1 | 5 | 6 | 7,
    dataInicialEmissao?: string,
    dataFinalEmissao?: string,
    numeroOrdemServico?: string,
    marcadores?: Array<string>,
    idContato?: number,
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<ListagemOrdemServicoResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/ordem-servico',
      query: {
        nomeCliente: nomeCliente,
        situacao: situacao,
        dataInicialEmissao: dataInicialEmissao,
        dataFinalEmissao: dataFinalEmissao,
        numeroOrdemServico: numeroOrdemServico,
        marcadores: marcadores,
        idContato: idContato,
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
   * @returns CriarOrdemServicoResponseModel OK
   * @throws ApiError
   */
  public static criarOrdemServicoAction(
    requestBody: CriarOrdemServicoRequestModel,
  ): CancelablePromise<CriarOrdemServicoResponseModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ordem-servico',
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
   * @param idOrdemServico Identificador da ordem de serviço
   * @returns GerarNotaFiscalOrdemServicoModelResponse OK
   * @throws ApiError
   */
  public static gerarNotaFiscalOrdemServicoAction(
    idOrdemServico: number,
  ): CancelablePromise<GerarNotaFiscalOrdemServicoModelResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ordem-servico/{idOrdemServico}/gerar-nota-fiscal',
      path: {
        idOrdemServico: idOrdemServico,
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
   * @param idOrdemServico Identificador da ordem de serviço
   * @returns void
   * @throws ApiError
   */
  public static lancarContasOrdemServicoAction(idOrdemServico: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ordem-servico/{idOrdemServico}/lancar-contas',
      path: {
        idOrdemServico: idOrdemServico,
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
   * @param idOrdemServico Identificador da ordem de serviço
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static lancarEstoqueOrdemServicoAction(
    idOrdemServico: number,
    requestBody: LancarEstoqueOrdemServicoRequestModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/ordem-servico/{idOrdemServico}/lancar-estoque',
      path: {
        idOrdemServico: idOrdemServico,
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
