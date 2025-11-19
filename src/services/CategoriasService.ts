import type { ListarArvoreCategoriasModelResponse } from '../models/categorias/ListarArvoreCategoriasModelResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CategoriasService {
  /**
   * @returns ListarArvoreCategoriasModelResponse OK
   * @throws ApiError
   */
  public static listarArvoreCategoriasAction(): CancelablePromise<ListarArvoreCategoriasModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/categorias/todas',
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
