/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaRequestModel } from '../categorias/CategoriaRequestModel';
import type { PagamentoRequestModel } from '../formas-pagamento/PagamentoRequestModel';
/**
 *
 */
export type OrdemServicoPagamentoRequestModel = PagamentoRequestModel & {
  categoria?: CategoriaRequestModel;
};
