import type { AtualizarContaReceberRequestModel } from '../models/contas-receber/AtualizarContaReceberRequestModel';
import type { AtualizarMarcadorRequestModel } from '../models/marcas/AtualizarMarcadorRequestModel';
import type { BaixarContaReceberModelRequest } from '../models/contas-receber/BaixarContaReceberModelRequest';
import type { CriarContaReceberRequestModel } from '../models/contas-receber/CriarContaReceberRequestModel';
import type { CriarContaReceberResponseModel } from '../models/contas-receber/CriarContaReceberResponseModel';
import type { CriarMarcadorRequestModel } from '../models/marcas/CriarMarcadorRequestModel';
import type { ListagemContasReceberResponseModel } from '../models/contas-receber/ListagemContasReceberResponseModel';
import type { ObterContaReceberResponseModel } from '../models/contas-receber/ObterContaReceberResponseModel';
import type { ObterMarcadorResponseModel } from '../models/marcas/ObterMarcadorResponseModel';
import type { ObterRecebimentosModel } from '../models/contas-receber/ObterRecebimentosModel';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContasAReceberService {
  /**
   * @param idContaReceber Identificador da conta receber
   * @returns ObterContaReceberResponseModel OK
   * @throws ApiError
   */
  public static obterContaReceberAction(
    idContaReceber: number,
  ): CancelablePromise<ObterContaReceberResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contas-receber/{idContaReceber}',
      path: {
        idContaReceber: idContaReceber,
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
   * @param idContaReceber Identificador da conta receber
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarContaReceberAction(
    idContaReceber: number,
    requestBody: AtualizarContaReceberRequestModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/contas-receber/{idContaReceber}',
      path: {
        idContaReceber: idContaReceber,
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
   * @param idContaReceber Identificador da conta receber
   * @returns ObterMarcadorResponseModel OK
   * @throws ApiError
   */
  public static obterMarcadoresContaReceberAction(
    idContaReceber: number,
  ): CancelablePromise<Array<ObterMarcadorResponseModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contas-receber/{idContaReceber}/marcadores',
      path: {
        idContaReceber: idContaReceber,
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
   * @param idContaReceber Identificador da conta a receber
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarMarcadoresContaReceberAction(
    idContaReceber: number,
    requestBody: Array<AtualizarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/contas-receber/{idContaReceber}/marcadores',
      path: {
        idContaReceber: idContaReceber,
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
   * @param idContaReceber Identificador da conta a receber
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static criarMarcadoresContaReceberAction(
    idContaReceber: number,
    requestBody: Array<CriarMarcadorRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contas-receber/{idContaReceber}/marcadores',
      path: {
        idContaReceber: idContaReceber,
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
   * @param idContaReceber Identificador da conta a receber
   * @returns void
   * @throws ApiError
   */
  public static excluirMarcadoresContaReceberAction(
    idContaReceber: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contas-receber/{idContaReceber}/marcadores',
      path: {
        idContaReceber: idContaReceber,
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
   * @param idContaReceber Identificador da conta a receber
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static baixarContaReceberAction(
    idContaReceber: number,
    requestBody: BaixarContaReceberModelRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contas-receber/{idContaReceber}/baixar',
      path: {
        idContaReceber: idContaReceber,
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
   * @param nomeCliente Pesquisa por nome do cliente de contas a receber
   * @param situacao Pesquisa por situação de contas a receber
   * - aberto - Aberto
   * - cancelada - Cancelada
   * - pago - Pago
   * - parcial - Parcial
   * - prevista - Prevista
   * @param dataInicialEmissao Pesquisa por data inicial da emissão de contas a receber
   * @param dataFinalEmissao Pesquisa por data final da emissão de contas a receber
   * @param dataInicialVencimento Pesquisa por data inicial do vencimento de contas a receber
   * @param dataFinalVencimento Pesquisa por data final do vencimento de contas a receber
   * @param numeroDocumento Pesquisa por número do documento de contas a receber
   * @param numeroBanco Pesquisa por número do banco de contas a receber
   * @param idNota Pesquisa por identificador da nota de contas a receber
   * @param idVenda Pesquisa por identificador da venda de contas a receber
   * @param marcadores Pesquisa por marcadores
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarContasReceberAction(
    nomeCliente?: string,
    situacao?: 'aberto' | 'cancelada' | 'pago' | 'parcial' | 'prevista',
    dataInicialEmissao?: string,
    dataFinalEmissao?: string,
    dataInicialVencimento?: string,
    dataFinalVencimento?: string,
    numeroDocumento?: string,
    numeroBanco?: string,
    idNota?: number,
    idVenda?: number,
    marcadores?: Array<string>,
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemContasReceberResponseModel>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contas-receber',
      query: {
        nomeCliente: nomeCliente,
        situacao: situacao,
        dataInicialEmissao: dataInicialEmissao,
        dataFinalEmissao: dataFinalEmissao,
        dataInicialVencimento: dataInicialVencimento,
        dataFinalVencimento: dataFinalVencimento,
        numeroDocumento: numeroDocumento,
        numeroBanco: numeroBanco,
        idNota: idNota,
        idVenda: idVenda,
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
   * @returns CriarContaReceberResponseModel OK
   * @throws ApiError
   */
  public static criarContaReceberAction(
    requestBody: CriarContaReceberRequestModel,
  ): CancelablePromise<CriarContaReceberResponseModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contas-receber',
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
   * @param id Identificador da Conta a Receber
   * @returns ObterRecebimentosModel OK
   * @throws ApiError
   */
  public static obterRecebimentosContaReceberAction(
    id: number,
  ): CancelablePromise<Array<ObterRecebimentosModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contas-receber/{idContaReceber}/recebimentos',
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
