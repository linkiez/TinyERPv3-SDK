/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContatoModelResponse } from '../contatos/ContatoModelResponse';
/**
 *
 */
export type ListagemContasReceberResponseModel = {
  id?: number | null;
  /**
   *
   * - aberto - Aberto
   * - cancelada - Cancelada
   * - pago - Pago
   * - parcial - Parcial
   * - prevista - Prevista
   */
  situacao?: ListagemContasReceberResponseModel.situacao | null;
  data?: string | null;
  dataVencimento?: string | null;
  historico?: string | null;
  valor?: number | null;
  numeroDocumento?: string | null;
  numeroBanco?: string | null;
  serieDocumento?: string | null;
  cliente?: ContatoModelResponse;
  quantidadeParcelasAntecipadas?: number | null;
};
export namespace ListagemContasReceberResponseModel {
  /**
   *
   * - aberto - Aberto
   * - cancelada - Cancelada
   * - pago - Pago
   * - parcial - Parcial
   * - prevista - Prevista
   */
  export enum situacao {
    ABERTO = 'aberto',
    CANCELADA = 'cancelada',
    PAGO = 'pago',
    PARCIAL = 'parcial',
    PREVISTA = 'prevista',
  }
}
