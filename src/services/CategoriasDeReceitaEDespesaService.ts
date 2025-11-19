import type { ListagemCategoriasReceitaDespesaResponseModel } from '../models/categorias/ListagemCategoriasReceitaDespesaResponseModel';
import type { PaginatedResultModel } from '../models/common/PaginatedResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CategoriasDeReceitaEDespesaService {
  /**
   * @param descricao Pesquisa por descrição completa da categorias de receita e despesa
   * @param grupo Pesquisa por grupo de categorias de receita e despesa
   * @param orderBy Define a ordenação da listagem por ordem crescente ou decrescente
   * - asc - Crescente
   * - desc - Descrescente
   * @param limit Limite da paginação
   * @param offset Offset da paginação
   * @returns any OK
   * @throws ApiError
   */
  public static listarCategoriasReceitaDespesaAction(
    descricao?: string,
    grupo?: string,
    orderBy?: 'asc' | 'desc',
    limit: number = 100,
    offset?: number,
  ): CancelablePromise<{
    itens?: Array<ListagemCategoriasReceitaDespesaResponseModel>;
    paginacao?: PaginatedResultModel;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/categorias-receita-despesa',
      query: {
        descricao: descricao,
        grupo: grupo,
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
}
