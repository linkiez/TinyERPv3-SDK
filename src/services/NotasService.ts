/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtualizarMarcadorRequestModel } from '../models/marcas/AtualizarMarcadorRequestModel';
import type { AutorizarNotaFiscalModelRequest } from '../models/notas-fiscais/AutorizarNotaFiscalModelRequest';
import type { AutorizarNotaFiscalModelResponse } from '../models/notas-fiscais/AutorizarNotaFiscalModelResponse';
import type { CriarMarcadorRequestModel } from '../models/marcas/CriarMarcadorRequestModel';
import type { IncluirXmlNotaFiscalRequestModel } from '../models/notas-fiscais/IncluirXmlNotaFiscalRequestModel';
import type { IncluirXmlNotaFiscalResponseModel } from '../models/notas-fiscais/IncluirXmlNotaFiscalResponseModel';
import type { ListagemNotaFiscalModelResponse } from '../models/notas-fiscais/ListagemNotaFiscalModelResponse';
import type { ObterLinkNotaFiscalModelResponse } from '../models/notas-fiscais/ObterLinkNotaFiscalModelResponse';
import type { ObterMarcadorResponseModel } from '../models/marcas/ObterMarcadorResponseModel';
import type { ObterNotaFiscalModelResponse } from '../models/notas-fiscais/ObterNotaFiscalModelResponse';
import type { ObterXmlNotaFiscalModelResponse } from '../models/notas-fiscais/ObterXmlNotaFiscalModelResponse';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotasService {
  /**
   * @param idNota Identificador da nota fiscal
   * @returns ObterMarcadorResponseModel OK
   * @throws ApiError
   */
  public static obterMarcadoresNotaFiscalAction(
    idNota: number,
  ): CancelablePromise<Array<ObterMarcadorResponseModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/notas/{idNota}/marcadores',
      path: {
        idNota: idNota,
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
   * @param idNota Identificador da nota fiscal
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarMarcadoresNotaFiscalAction(
    idNota: number,
    requestBody: Array<AtualizarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/notas/{idNota}/marcadores',
      path: {
        idNota: idNota,
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
   * @param idNota Identificador da nota fiscal
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static criarMarcadoresNotaFiscalAction(
    idNota: number,
    requestBody: Array<CriarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/notas/{idNota}/marcadores',
      path: {
        idNota: idNota,
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
   * @param idNota Identificador da nota fiscal
   * @returns void
   * @throws ApiError
   */
  public static excluirMarcadoresNotaFiscalAction(idNota: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/notas/{idNota}/marcadores',
      path: {
        idNota: idNota,
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
   * @param idNota
   * @param requestBody
   * @returns AutorizarNotaFiscalModelResponse OK
   * @throws ApiError
   */
  public static autorizarNotaFiscalAction(
    idNota: number,
    requestBody: AutorizarNotaFiscalModelRequest,
  ): CancelablePromise<AutorizarNotaFiscalModelResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/notas/{idNota}/emitir',
      path: {
        idNota: idNota,
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
   * @param formData
   * @returns IncluirXmlNotaFiscalResponseModel OK
   * @throws ApiError
   */
  public static incluirXmlNotaFiscalAction(
    formData?: IncluirXmlNotaFiscalRequestModel,
  ): CancelablePromise<IncluirXmlNotaFiscalResponseModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/notas/xml',
      formData: formData,
      mediaType: 'multipart/form-data',
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
   * @param idNota Identificador da nota fiscal
   * @returns void
   * @throws ApiError
   */
  public static lancarContasNotaFiscalAction(idNota: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/notas/{idNota}/lancar-contas',
      path: {
        idNota: idNota,
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
   * @param idNota Identificador da nota fiscal
   * @returns void
   * @throws ApiError
   */
  public static lancarEstoqueNotaFiscalAction(idNota: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/notas/{idNota}/lancar-estoque',
      path: {
        idNota: idNota,
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
   * @param tipo Pesquisa por tipo de nota
   * - E - Entrada
   * - S - Saida
   * @param numero Pesquisa por número da nota
   * @param cpfCnpj Pesquisa por CPF ou CNPJ
   * @param dataInicial Pesquisa por data de criação
   * @param dataFinal Pesquisa por data de criação
   * @param situacao Pesquisa pela situacão da nota
   * - 1 - Pendente
   * - 2 - Emitida
   * - 3 - Cancelada
   * - 4 - Enviada Aguardando Recibo
   * - 5 - Rejeitada
   * - 6 - Autorizada
   * - 7 - Emitida Danfe
   * - 8 - Registrada
   * - 9 - Enviada Aguardando Protocolo
   * - 10 - Denegada
   * @param numeroPedidoEcommerce Pesquisa pelo número do pedido no e-commerce
   * @param idVendedor Pesquisa por identificador do vendedor
   * @param idFormaEnvio Pesquisa por identificador da forma de envio
   * @param marcadores Pesquisa por marcadores
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarNotasFiscaisAction(
    tipo?: 'E' | 'S',
    numero?: number,
    cpfCnpj?: string,
    dataInicial?: string,
    dataFinal?: string,
    situacao?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    numeroPedidoEcommerce?: string,
    idVendedor?: number,
    idFormaEnvio?: number,
    marcadores?: Array<string>,
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemNotaFiscalModelResponse>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/notas',
      query: {
        tipo: tipo,
        numero: numero,
        cpfCnpj: cpfCnpj,
        dataInicial: dataInicial,
        dataFinal: dataFinal,
        situacao: situacao,
        numeroPedidoEcommerce: numeroPedidoEcommerce,
        idVendedor: idVendedor,
        idFormaEnvio: idFormaEnvio,
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
   * @param idNota Identificador da nota fiscal
   * @returns ObterLinkNotaFiscalModelResponse OK
   * @throws ApiError
   */
  public static obterLinkNotaFiscalAction(
    idNota: number,
  ): CancelablePromise<ObterLinkNotaFiscalModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/notas/{idNota}/link',
      path: {
        idNota: idNota,
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
   * @param idNota Identificador da nota fiscal
   * @returns ObterNotaFiscalModelResponse OK
   * @throws ApiError
   */
  public static obterNotaFiscalAction(
    idNota: number,
  ): CancelablePromise<ObterNotaFiscalModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/notas/{idNota}',
      path: {
        idNota: idNota,
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
   * @param idNota Identificador da nota fiscal
   * @returns ObterXmlNotaFiscalModelResponse OK
   * @throws ApiError
   */
  public static obterXmlNotaFiscalAction(
    idNota: number,
  ): CancelablePromise<ObterXmlNotaFiscalModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/notas/{idNota}/xml',
      path: {
        idNota: idNota,
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
