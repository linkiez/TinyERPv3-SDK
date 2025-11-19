import type { ObterInfoContaModelResponse } from '../models/ObterInfoContaModelResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DadosDaEmpresaService {
  /**
   * @returns ObterInfoContaModelResponse OK
   * @throws ApiError
   */
  public static obterInfoContaAction(): CancelablePromise<ObterInfoContaModelResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/info',
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
