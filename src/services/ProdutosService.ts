/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AtualizarPrecoProdutoRequestModel } from '../models/produtos/AtualizarPrecoProdutoRequestModel';
import type { AtualizarPrecoProdutoResponseModel } from '../models/produtos/AtualizarPrecoProdutoResponseModel';
import type { AtualizarProdutoRequestModel } from '../models/produtos/AtualizarProdutoRequestModel';
import type { AtualizarProdutoVariacaoRequestModel } from '../models/produtos/AtualizarProdutoVariacaoRequestModel';
import type { CriarProdutoComVariacoesResponseModel } from '../models/produtos/CriarProdutoComVariacoesResponseModel';
import type { CriarProdutoRequestModel } from '../models/produtos/CriarProdutoRequestModel';
import type { CriarProdutoResponseModel } from '../models/produtos/CriarProdutoResponseModel';
import type { ListagemProdutoCustosResponseModel } from '../models/produtos/ListagemProdutoCustosResponseModel';
import type { ListagemProdutosResponseModel } from '../models/produtos/ListagemProdutosResponseModel';
import type { ObterProdutoModelResponse } from '../models/produtos/ObterProdutoModelResponse';
import type { ObterTagsProdutoModelResponse } from '../models/produtos/ObterTagsProdutoModelResponse';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { ProducaoProdutoRequestModel } from '../models/produtos/ProducaoProdutoRequestModel';
import type { ProducaoProdutoResponseModel } from '../models/produtos/ProducaoProdutoResponseModel';
import type { ProdutoKitRequestModel } from '../models/produtos/ProdutoKitRequestModel';
import type { ProdutoKitResponseModel } from '../models/produtos/ProdutoKitResponseModel';
import type { VariacaoProdutoRequestModel } from '../models/produtos/VariacaoProdutoRequestModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProdutosService {
  /**
   * @param idProduto Identificador do produto
   * @param requestBody
   * @returns AtualizarPrecoProdutoResponseModel OK
   * @throws ApiError
   */
  public static atualizarPrecoProdutoAction(
    idProduto: number,
    requestBody: AtualizarPrecoProdutoRequestModel,
  ): CancelablePromise<AtualizarPrecoProdutoResponseModel> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/produtos/{idProduto}/preco',
      path: {
        idProduto: idProduto,
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
   * @param idProduto
   * @returns ObterProdutoModelResponse OK
   * @throws ApiError
   */
  public static obterProdutoAction(
    idProduto: number,
  ): CancelablePromise<ObterProdutoModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/produtos/{idProduto}',
      path: {
        idProduto: idProduto,
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
   * @param idProduto Identificador do produto
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarProdutoAction(
    idProduto: number,
    requestBody: AtualizarProdutoRequestModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/produtos/{idProduto}',
      path: {
        idProduto: idProduto,
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
   * @returns ProducaoProdutoResponseModel OK
   * @throws ApiError
   */
  public static obterProdutoFabricadoAction(): CancelablePromise<ProducaoProdutoResponseModel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/produtos/{idProduto}/fabricado',
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
   * @param idProduto Identificador do produto
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarProdutoFabricadoAction(
    idProduto: number,
    requestBody: ProducaoProdutoRequestModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/produtos/{idProduto}/fabricado',
      path: {
        idProduto: idProduto,
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
   * @returns ProdutoKitResponseModel OK
   * @throws ApiError
   */
  public static obterProdutoKitAction(): CancelablePromise<Array<ProdutoKitResponseModel>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/produtos/{idProduto}/kit',
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
   * @returns void
   * @throws ApiError
   */
  public static atualizarProdutoKitAction(
    requestBody: Array<ProdutoKitRequestModel>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/produtos/{idProduto}/kit',
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
   * @param idProduto Identificador do produto
   * @param idVariacao Identificador da variação
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static atualizarProdutoVariacaoAction(
    idProduto: number,
    idVariacao: number,
    requestBody: AtualizarProdutoVariacaoRequestModel,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/produtos/{idProduto}/variacoes/{idVariacao}',
      path: {
        idProduto: idProduto,
        idVariacao: idVariacao,
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
   * @param idProduto Identificador do produto
   * @param idVariacao Identificador da variação
   * @returns void
   * @throws ApiError
   */
  public static deletarProdutoVariacaoAction(
    idProduto: number,
    idVariacao: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/produtos/{idProduto}/variacoes/{idVariacao}',
      path: {
        idProduto: idProduto,
        idVariacao: idVariacao,
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
   * @param nome Pesquisa por nome parcial ou completo do produto
   * @param codigo Pesquisa pelo código do produto
   * @param gtin Pesquisa através do código GTIN do produto
   * @param situacao Pesquisa com base na situação informada
   * @param dataCriacao Pesquisa através da data de criação do produto
   * @param dataAlteracao Pesquisa através da data de última alteração do produto
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarProdutosAction(
    nome?: string,
    codigo?: string,
    gtin?: number,
    situacao?: string,
    dataCriacao?: string,
    dataAlteracao?: string,
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemProdutosResponseModel>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/produtos',
      query: {
        nome: nome,
        codigo: codigo,
        gtin: gtin,
        situacao: situacao,
        dataCriacao: dataCriacao,
        dataAlteracao: dataAlteracao,
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
   * @returns CriarProdutoComVariacoesResponseModel OK
   * @throws ApiError
   */
  public static criarProdutoAction(
    requestBody: CriarProdutoRequestModel,
  ): CancelablePromise<CriarProdutoComVariacoesResponseModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/produtos',
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
   * @param idProduto Identificador do produto
   * @param requestBody
   * @returns CriarProdutoResponseModel OK
   * @throws ApiError
   */
  public static criarProdutoVariacaoAction(
    idProduto: number,
    requestBody: VariacaoProdutoRequestModel,
  ): CancelablePromise<CriarProdutoResponseModel> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/produtos/{idProduto}/variacoes',
      path: {
        idProduto: idProduto,
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
   * @param idProduto
   * @param dataInicial Especifica a data de início para a filtragem dos custos do produto.
   * @param dataFinal Especifica a data de fim para a filtragem dos custos do produto.
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listaCustosProdutoAction(
    idProduto: number,
    dataInicial?: string,
    dataFinal?: string,
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemProdutoCustosResponseModel>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/produtos/{idProduto}/custos',
      path: {
        idProduto: idProduto,
      },
      query: {
        dataInicial: dataInicial,
        dataFinal: dataFinal,
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
   * @param idProduto
   * @returns ObterTagsProdutoModelResponse OK
   * @throws ApiError
   */
  public static obterTagsProdutoAction(
    idProduto: number,
  ): CancelablePromise<ObterTagsProdutoModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/produtos/{idProduto}/tags',
      path: {
        idProduto: idProduto,
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
