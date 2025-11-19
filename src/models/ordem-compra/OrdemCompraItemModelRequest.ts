/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProdutoRequestModel } from '../produtos/ProdutoRequestModel';
/**
 *
 */
export type OrdemCompraItemModelRequest = ProdutoRequestModel & {
  produto?: ProdutoRequestModel;
  quantidade?: number | null;
  valor?: number | null;
  informacoesAdicionais?: string | null;
  aliquotaIPI?: number | null;
  valorICMS?: number | null;
};
