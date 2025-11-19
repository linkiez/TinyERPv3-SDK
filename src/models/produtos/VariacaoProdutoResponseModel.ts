/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EstoqueProdutoResponseModel } from './EstoqueProdutoResponseModel';
import type { GradeVariacaoRequestModel } from './GradeVariacaoRequestModel';
import type { PrecoProdutoResponseModel } from './PrecoProdutoResponseModel';
/**
 *
 */
export type VariacaoProdutoResponseModel = {
  id?: number | null;
  descricao?: string | null;
  sku?: string | null;
  gtin?: string | null;
  precos?: PrecoProdutoResponseModel;
  estoque?: EstoqueProdutoResponseModel;
  grade?: Array<GradeVariacaoRequestModel> | null;
};
