/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtualizarServicoRequestModel } from '../models/servicos/AtualizarServicoRequestModel';
import type { CriarServicoRequestModel } from '../models/servicos/CriarServicoRequestModel';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { ServicoResponseModel } from '../models/servicos/ServicoResponseModel';
import type { ServicosModelResponse } from '../models/servicos/ServicosModelResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ServiOsService {
  /**
   * @param idServico
   * @returns ServicosModelResponse OK
   * @throws ApiError
   */
  public static obterServicoAction(idServico: number): CancelablePromise<ServicosModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/servicos/{idServico}',
      path: {
        idServico: idServico,
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
   * @param idServico Identificador do serviço
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarServicoAction(
    idServico: number,
    requestBody: AtualizarServicoRequestModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/servicos/{idServico}',
      path: {
        idServico: idServico,
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
   * @param nome Pesquisa pelo nome do serviço
   * @param codigo Pesquisa pelo código do serviço
   * @param situacao Pesquisa com base na situação informada
   * - A - Ativo
   * - I - Inativo
   * - E - Excluido
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarServicosAction(
    nome?: string,
    codigo?: string,
    situacao?: 'A' | 'I' | 'E',
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ServicosModelResponse>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/servicos',
      query: {
        nome: nome,
        codigo: codigo,
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
   * @returns ServicoResponseModel OK
   * @throws ApiError
   */
  public static criarServicoAction(
    requestBody: CriarServicoRequestModel,
  ): CancelablePromise<ServicoResponseModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/servicos',
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
   * @param idServico
   * @returns void
   * @throws ApiError
   */
  public static transformarServicoEmProdutoAction(idServico: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/servicos/{idServico}/transformar-produto',
      path: {
        idServico: idServico,
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
