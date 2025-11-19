/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProdutoRequestModel } from '../produtos/ProdutoRequestModel';
/**
 *
 */
export type ItemPedidoRequestModel = {
  produto?: ProdutoRequestModel;
  quantidade?: number | null;
  valorUnitario?: number | null;
  infoAdicional?: string | null;
};
