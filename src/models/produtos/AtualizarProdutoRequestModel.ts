/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EstoqueProdutoRequestModel } from './EstoqueProdutoRequestModel';
import type { ProdutoModel } from './ProdutoModel';
/**
 *
 */
export type AtualizarProdutoRequestModel = ProdutoModel & {
  descricao?: string | null;
  estoque?: EstoqueProdutoRequestModel;
};
