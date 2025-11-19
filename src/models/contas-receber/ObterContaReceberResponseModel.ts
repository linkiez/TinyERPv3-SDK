/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaReceitaDespesaResponseModel } from '../categorias/CategoriaReceitaDespesaResponseModel';
import type { ContatoModelResponse } from '../contatos/ContatoModelResponse';
import type { FormaRecebimentoResponseModel } from './FormaRecebimentoResponseModel';
/**
 *
 */
export type ObterContaReceberResponseModel = {
  id?: number | null;
  /**
   *
   * - aberto - Aberto
   * - cancelada - Cancelada
   * - pago - Pago
   * - parcial - Parcial
   * - prevista - Prevista
   */
  situacao?: ObterContaReceberResponseModel.situacao | null;
  data?: string | null;
  dataVencimento?: string | null;
  dataCompetencia?: string | null;
  dataLiquidacao?: string | null;
  diaVencimento?: number | null;
  /**
   *
   * - 0 - Domingo
   * - 1 - Segunda
   * - 2 - Terca
   * - 3 - Quarta
   * - 4 - Quinta
   * - 5 - Sexta
   * - 6 - Sabado
   */
  diaSemanaVencimento?: ObterContaReceberResponseModel.diaSemanaVencimento | null;
  numeroDocumento?: string | null;
  serieDocumento?: string | null;
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
  ocorrencia?: ObterContaReceberResponseModel.ocorrencia | null;
  quantidadeParcelas?: number | null;
  valor?: number | null;
  saldo?: number | null;
  taxa?: number | null;
  juros?: number | null;
  multa?: number | null;
  valorPago?: number | null;
  cliente?: ContatoModelResponse;
  categoria?: CategoriaReceitaDespesaResponseModel;
  formaRecebimento?: FormaRecebimentoResponseModel;
  historico?: string | null;
  linkBoleto?: string | null;
  quantidadeParcelasAntecipadas?: number | null;
};
export namespace ObterContaReceberResponseModel {
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
  /**
   *
   * - 0 - Domingo
   * - 1 - Segunda
   * - 2 - Terca
   * - 3 - Quarta
   * - 4 - Quinta
   * - 5 - Sexta
   * - 6 - Sabado
   */
  export enum diaSemanaVencimento {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
  }
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
