/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListagemFormasEnvioResponseModel } from '../models/expedicao/ListagemFormasEnvioResponseModel';
import type { ObterFormaEnvioResponseModel } from '../models/expedicao/ObterFormaEnvioResponseModel';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LogisticaService {
  /**
   * @param nome Pesquisa por nome parcial ou completo da forma de envio
   * @param tipo Pesquisa por tipo de forma de envio
   * - 0 - Sem Frete
   * - 1 - Correios
   * - 2 - Transportadora
   * - 3 - Mercado Envios
   * - 4 - B2w Entrega
   * - 5 - Correios Ff
   * - 6 - Customizado
   * - 7 - Jadlog
   * - 8 - Totalexpress
   * - 9 - Olist
   * - 10 - Gateway
   * - 11 - Magalu Entregas
   * - 12 - Shopee Envios
   * - 13 - Ns Entregas
   * - 14 - Viavarejo Envvias
   * - 15 - Madeira Envios
   * - 16 - Ali Envios
   * - 17 - Loggi
   * - 18 - Conecta La Etiquetas
   * - 19 - Amazon Dba
   * - 20 - Magalu Fulfillment
   * - 21 - Ns Magalu Entregas
   * - 22 - Shein Envios
   * - 23 - Mandae
   * - 24 - Olist Envios
   * - 25 - Kwai Envios
   * - 26 - Beleza Envios
   * - 27 - Tiktok Envios
   * - 28 - Hub Envios
   * - 29 - Forma Teste
   * - 30 - Posta Ja
   * - 31 - Temu Envios
   * @param situacao Pesquisa por situação da forma de envio
   * - 0 - Sem Frete
   * - 1 - Correios
   * - 2 - Transportadora
   * - 3 - Mercado Envios
   * - 4 - B2w Entrega
   * - 5 - Correios Ff
   * - 6 - Customizado
   * - 7 - Jadlog
   * - 8 - Totalexpress
   * - 9 - Olist
   * - 10 - Gateway
   * - 11 - Magalu Entregas
   * - 12 - Shopee Envios
   * - 13 - Ns Entregas
   * - 14 - Viavarejo Envvias
   * - 15 - Madeira Envios
   * - 16 - Ali Envios
   * - 17 - Loggi
   * - 18 - Conecta La Etiquetas
   * - 19 - Amazon Dba
   * - 20 - Magalu Fulfillment
   * - 21 - Ns Magalu Entregas
   * - 22 - Shein Envios
   * - 23 - Mandae
   * - 24 - Olist Envios
   * - 25 - Kwai Envios
   * - 26 - Beleza Envios
   * - 27 - Tiktok Envios
   * - 28 - Hub Envios
   * - 29 - Forma Teste
   * - 30 - Posta Ja
   * - 31 - Temu Envios
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarFormasEnvioAction(
    nome?: string,
    tipo?:
      | 0
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21
      | 22
      | 23
      | 24
      | 25
      | 26
      | 27
      | 28
      | 29
      | 30
      | 31,
    situacao?:
      | 0
      | 1
      | 2
      | 3
      | 4
      | 5
      | 6
      | 7
      | 8
      | 9
      | 10
      | 11
      | 12
      | 13
      | 14
      | 15
      | 16
      | 17
      | 18
      | 19
      | 20
      | 21
      | 22
      | 23
      | 24
      | 25
      | 26
      | 27
      | 28
      | 29
      | 30
      | 31,
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemFormasEnvioResponseModel>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/formas-envio',
      query: {
        nome: nome,
        tipo: tipo,
        situacao: situacao,
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
   * @param idFormaEnvio
   * @returns ObterFormaEnvioResponseModel OK
   * @throws ApiError
   */
  public static obterFormaEnvioAction(
    idFormaEnvio: number,
  ): CancelablePromise<ObterFormaEnvioResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/formas-envio/{idFormaEnvio}',
      path: {
        idFormaEnvio: idFormaEnvio,
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
