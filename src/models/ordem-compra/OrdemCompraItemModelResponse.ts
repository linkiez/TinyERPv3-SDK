/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProdutoResponseModel } from '../produtos/ProdutoResponseModel';
/**
 *
 */
export type OrdemCompraItemModelResponse = {
  produto?: ProdutoResponseModel;
  gtin?: string | null;
  quantidade?: number;
  preco?: number;
  ipi?: number;
};
