import type { AtualizarContatoContatoModelRequest } from '../models/contatos/AtualizarContatoContatoModelRequest';
import type { AtualizarContatoModelRequest } from '../models/contatos/AtualizarContatoModelRequest';
import type { CriarContatoContatoModelRequest } from '../models/contatos/CriarContatoContatoModelRequest';
import type { CriarContatoContatoModelResponse } from '../models/contatos/CriarContatoContatoModelResponse';
import type { CriarContatoModelRequest } from '../models/contatos/CriarContatoModelRequest';
import type { CriarContatoModelResponse } from '../models/contatos/CriarContatoModelResponse';
import type { ListagemContatoModelResponse } from '../models/contatos/ListagemContatoModelResponse';
import type { ListagemContatosContatoModelResponse } from '../models/contatos/ListagemContatosContatoModelResponse';
import type { ListarTiposDeContatosModelResponse } from '../models/contatos/ListarTiposDeContatosModelResponse';
import type { ObterContatoContatoModelResponse } from '../models/contatos/ObterContatoContatoModelResponse';
import type { ObterContatoModelResponse } from '../models/contatos/ObterContatoModelResponse';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContatosService {
  /**
   * @param idContato
   * @returns ObterContatoModelResponse OK
   * @throws ApiError
   */
  public static obterContatoAction(
    idContato: number,
  ): CancelablePromise<ObterContatoModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contatos/{idContato}',
      path: {
        idContato: idContato,
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
   * @param idContato
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarContatoAction(
    idContato: number,
    requestBody: AtualizarContatoModelRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/contatos/{idContato}',
      path: {
        idContato: idContato,
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
   * @param idContato
   * @param idPessoa
   * @returns ObterContatoContatoModelResponse OK
   * @throws ApiError
   */
  public static obterContatoContatoAction(
    idContato: number,
    idPessoa: number,
  ): CancelablePromise<ObterContatoContatoModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contatos/{idContato}/pessoas/{idPessoa}',
      path: {
        idContato: idContato,
        idPessoa: idPessoa,
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
   * @param idContato
   * @param idPessoa
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarContatoContatoAction(
    idContato: number,
    idPessoa: number,
    requestBody: AtualizarContatoContatoModelRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/contatos/{idContato}/pessoas/{idPessoa}',
      path: {
        idContato: idContato,
        idPessoa: idPessoa,
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
   * @param idContato
   * @param idPessoa
   * @returns any OK
   * @throws ApiError
   */
  public static excluirContatoContatoAction(
    idContato: number,
    idPessoa: number,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/contatos/{idContato}/pessoas/{idPessoa}',
      path: {
        idContato: idContato,
        idPessoa: idPessoa,
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
   * @param nome Pesquisa por nome parcial ou completo
   * @param codigo Pesquisa por codigo completo
   * @param situacao Pesquisa por situacao
   * - B - Ativo
   * - A - Ativo Com Acesso Sistema
   * - I - Inativo
   * - E - Excluido
   * @param idVendedor Pesquisa por vendedor padrão
   * @param cpfCnpj Pesquisa por CPF ou CNPJ
   * @param celular Pesquisa pelo celular
   * @param dataCriacao Pesquisa por data de criação
   * @param dataAtualizacao Pesquisa por data de atualização
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarContatosAction(
    nome?: string,
    codigo?: string,
    situacao?: 'B' | 'A' | 'I' | 'E',
    idVendedor?: number,
    cpfCnpj?: string,
    celular?: string,
    dataCriacao?: string,
    dataAtualizacao?: string,
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemContatoModelResponse>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contatos',
      query: {
        nome: nome,
        codigo: codigo,
        situacao: situacao,
        idVendedor: idVendedor,
        cpfCnpj: cpfCnpj,
        celular: celular,
        dataCriacao: dataCriacao,
        dataAtualizacao: dataAtualizacao,
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
   * @returns CriarContatoModelResponse OK
   * @throws ApiError
   */
  public static criarContatoAction(
    requestBody: CriarContatoModelRequest,
  ): CancelablePromise<CriarContatoModelResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contatos',
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
   * @param idContato
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarContatosContatoAction(
    idContato: number,
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemContatosContatoModelResponse>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contatos/{idContato}/pessoas',
      path: {
        idContato: idContato,
      },
      query: {
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
   * @param idContato
   * @param requestBody
   * @returns CriarContatoContatoModelResponse OK
   * @throws ApiError
   */
  public static criarContatoContatoAction(
    idContato: number,
    requestBody: CriarContatoContatoModelRequest,
  ): CancelablePromise<CriarContatoContatoModelResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/contatos/{idContato}/pessoas',
      path: {
        idContato: idContato,
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
   * @param nome Pesquisa por nome parcial ou completo do tipo de contato
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarTiposDeContatosAction(
    nome?: string,
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListarTiposDeContatosModelResponse>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/contatos/tipos',
      query: {
        nome: nome,
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
}
