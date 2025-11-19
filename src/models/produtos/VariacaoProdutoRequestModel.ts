/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EstoqueVariacaoRequestModel } from './EstoqueVariacaoRequestModel';
import type { GradeVariacaoRequestModel } from './GradeVariacaoRequestModel';
import type { PrecoVariacaoRequestModel } from './PrecoVariacaoRequestModel';
/**
 *
 */
export type VariacaoProdutoRequestModel = {
  sku?: string | null;
  gtin?: string | null;
  precos?: PrecoVariacaoRequestModel;
  estoque?: EstoqueVariacaoRequestModel;
  grade?: Array<GradeVariacaoRequestModel> | null;
};
