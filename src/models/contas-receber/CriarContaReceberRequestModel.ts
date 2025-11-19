/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaRequestModel } from '../categorias/CategoriaRequestModel';
import type { ContatoRequestModel } from '../contatos/ContatoRequestModel';
/**
 *
 */
export type CriarContaReceberRequestModel = {
  data?: string | null;
  dataVencimento?: string | null;
  valor?: number | null;
  numeroDocumento?: string | null;
  contato?: ContatoRequestModel;
  historico?: string | null;
  categoria?: CategoriaRequestModel;
  dataCompetencia?: string | null;
  formaRecebimento?: number | null;
  /**
   *
   * - U - Unica
   * - W - Semanal
   * - Q - Quinzenal
   * - M - Mensal
   * - T - Trimestral
   * - S - Semestral
   * - A - Anual
   * - P - Parcelada
   */
  ocorrencia?: CriarContaReceberRequestModel.ocorrencia | null;
  diaVencimento?: number | null;
  diaSemanaVencimento?: number | null;
  quantidadeParcelas?: number | null;
};
export namespace CriarContaReceberRequestModel {
  /**
   *
   * - U - Unica
   * - W - Semanal
   * - Q - Quinzenal
   * - M - Mensal
   * - T - Trimestral
   * - S - Semestral
   * - A - Anual
   * - P - Parcelada
   */
  export enum ocorrencia {
    U = 'U',
    W = 'W',
    Q = 'Q',
    M = 'M',
    T = 'T',
    S = 'S',
    A = 'A',
    P = 'P',
  }
}
