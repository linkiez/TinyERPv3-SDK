import type { AtualizarMarcadorRequestModel } from '../models/marcas/AtualizarMarcadorRequestModel';
import type { CriarContaPagarRequestModel } from '../models/contas-pagar/CriarContaPagarRequestModel';
import type { CriarContaPagarResponseModel } from '../models/contas-pagar/CriarContaPagarResponseModel';
import type { CriarMarcadorRequestModel } from '../models/marcas/CriarMarcadorRequestModel';
import type { ListagemContasPagarResponseModel } from '../models/contas-pagar/ListagemContasPagarResponseModel';
import type { ObterContaPagarModelResponse } from '../models/contas-pagar/ObterContaPagarModelResponse';
import type { ObterMarcadorResponseModel } from '../models/marcas/ObterMarcadorResponseModel';
import type { ObterRecebimentosModel } from '../models/contas-receber/ObterRecebimentosModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContasAPagarService {
  /**
   * @param id Identificador da Conta a Pagar
   * @returns ObterMarcadorResponseModel OK
   * @throws ApiError
   */
  public static obterMarcadoresContaPagarAction(
    id: number,
  ): CancelablePromise<Array<ObterMarcadorResponseModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contas-pagar/{idContaPagar}/marcadores',
      path: {
        id: id,
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
   * @param idContaPagar Identificador da conta a pagar
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarMarcadoresContaPagarAction(
    idContaPagar: number,
    requestBody: Array<AtualizarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/contas-pagar/{idContaPagar}/marcadores',
      path: {
        idContaPagar: idContaPagar,
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
   * @param idContaPagar Identificador da conta a pagar
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static criarMarcadoresContaPagarAction(
    idContaPagar: number,
    requestBody: Array<CriarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contas-pagar/{idContaPagar}/marcadores',
      path: {
        idContaPagar: idContaPagar,
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
   * @param idContaPagar Identificador da conta a pagar
   * @returns void
   * @throws ApiError
   */
  public static excluirMarcadoresContaPagarAction(idContaPagar: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contas-pagar/{idContaPagar}/marcadores',
      path: {
        idContaPagar: idContaPagar,
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
   * @param nomeCliente Pesquisa por nome do cliente de contas a pagar
   * @param situacao Pesquisa por situação de contas a pagar
   * - aberto - Aberto
   * - cancelada - Cancelada
   * - pago - Pago
   * - parcial - Parcial
   * - prevista - Prevista
   * @param dataInicialEmissao Pesquisa por data inicial da emissão de contas a pagar
   * @param dataFinalEmissao Pesquisa por data final da emissão de contas a pagar
   * @param dataInicialVencimento Pesquisa por data inicial do vencimento de contas a pagar
   * @param dataFinalVencimento Pesquisa por data final do vencimento de contas a pagar
   * @param numeroDocumento Pesquisa por número do documento de contas a pagar
   * @param numeroBanco Pesquisa por número do banco de contas a pagar
   * @param marcadores Pesquisa por marcadores
   * @param idContato Pesquisa por ID do contato de contas a pagar
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns ListagemContasPagarResponseModel OK
   * @throws ApiError
   */
  public static listarContasPagarAction(
    nomeCliente?: string,
    situacao?: 'aberto' | 'cancelada' | 'pago' | 'parcial' | 'prevista',
    dataInicialEmissao?: string,
    dataFinalEmissao?: string,
    dataInicialVencimento?: string,
    dataFinalVencimento?: string,
    numeroDocumento?: string,
    numeroBanco?: string,
    marcadores?: Array<string>,
    idContato?: number,
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<ListagemContasPagarResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contas-pagar',
      query: {
        nomeCliente: nomeCliente,
        situacao: situacao,
        dataInicialEmissao: dataInicialEmissao,
        dataFinalEmissao: dataFinalEmissao,
        dataInicialVencimento: dataInicialVencimento,
        dataFinalVencimento: dataFinalVencimento,
        numeroDocumento: numeroDocumento,
        numeroBanco: numeroBanco,
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
   * @returns CriarContaPagarResponseModel OK
   * @throws ApiError
   */
  public static criarContaPagarAction(
    requestBody: CriarContaPagarRequestModel,
  ): CancelablePromise<CriarContaPagarResponseModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contas-pagar',
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
   * @param idContaPagar
   * @returns ObterContaPagarModelResponse OK
   * @throws ApiError
   */
  public static obterContaPagarAction(
    idContaPagar: number,
  ): CancelablePromise<ObterContaPagarModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contas-pagar/{idContaPagar}',
      path: {
        idContaPagar: idContaPagar,
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
   * @param id Identificador da Conta a Pagar
   * @returns ObterRecebimentosModel OK
   * @throws ApiError
   */
  public static obterRecebimentosContaPagarAction(
    id: number,
  ): CancelablePromise<Array<ObterRecebimentosModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contas-pagar/{idContaPagar}/recebimentos',
      path: {
        id: id,
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
