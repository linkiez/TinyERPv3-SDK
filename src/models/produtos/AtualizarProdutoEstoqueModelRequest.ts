/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DepositoRequestModel } from '../estoque/DepositoRequestModel';
/**
 *
 */
export type AtualizarProdutoEstoqueModelRequest = {
  deposito?: DepositoRequestModel;
  /**
   *
   * - B - Balanco
   * - E - Entrada
   * - S - Saida
   */
  tipo?: AtualizarProdutoEstoqueModelRequest.tipo | null;
  data?: string | null;
  quantidade?: number | null;
  precoUnitario?: number | null;
  observacoes?: string | null;
};
export namespace AtualizarProdutoEstoqueModelRequest {
  /**
   *
   * - B - Balanco
   * - E - Entrada
   * - S - Saida
   */
  export enum tipo {
    B = 'B',
    E = 'E',
    S = 'S',
  }
}
