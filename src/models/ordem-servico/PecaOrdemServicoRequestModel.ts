/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProdutoRequestModel } from '../produtos/ProdutoRequestModel';
/**
 *
 */
export type PecaOrdemServicoRequestModel = {
  produto?: ProdutoRequestModel;
  quantidade?: number | null;
  valorUnitario?: number | null;
  unidade?: string | null;
  porcentagemDesconto?: number | null;
};
