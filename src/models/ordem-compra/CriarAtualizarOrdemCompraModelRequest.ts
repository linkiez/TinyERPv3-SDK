/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrdemCompraParcelaModelRequest } from './OrdemCompraParcelaModelRequest';
/**
 *
 */
export type CriarAtualizarOrdemCompraModelRequest = {
  data?: string | null;
  dataPrevista?: string | null;
  desconto?: number | null;
  condicao?: string | null;
  observacoes?: string | null;
  observacoesInternas?: string | null;
  /**
   *
   * - R - Remetente
   * - D - Destinatario
   * - T - Terceiros
   * - 3 - Proprio Remetente
   * - 4 - Proprio Destinatario
   * - S - Sem Transporte
   */
  fretePorConta?: CriarAtualizarOrdemCompraModelRequest.fretePorConta | null;
  transportador?: string | null;
  parcelas?: Array<OrdemCompraParcelaModelRequest>;
};
export namespace CriarAtualizarOrdemCompraModelRequest {
  /**
   *
   * - R - Remetente
   * - D - Destinatario
   * - T - Terceiros
   * - 3 - Proprio Remetente
   * - 4 - Proprio Destinatario
   * - S - Sem Transporte
   */
  export enum fretePorConta {
    R = 'R',
    D = 'D',
    T = 'T',
    _3 = '3',
    _4 = '4',
    S = 'S',
  }
}
