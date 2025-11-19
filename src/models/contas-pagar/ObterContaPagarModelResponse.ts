/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaReceitaDespesaResponseModel } from '../categorias/CategoriaReceitaDespesaResponseModel';
import type { ContatoModelResponse } from '../contatos/ContatoModelResponse';
import type { FormaPagamentoResponseModel } from '../formas-pagamento/FormaPagamentoResponseModel';
/**
 *
 */
export type ObterContaPagarModelResponse = {
  id?: number;
  /**
   *
   * - aberto - Aberto
   * - cancelada - Cancelada
   * - pago - Pago
   * - parcial - Parcial
   * - prevista - Prevista
   */
  situacao?: ObterContaPagarModelResponse.situacao | null;
  data?: string;
  dataVencimento?: string;
  dataCompetencia?: string;
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
  diaSemanaVencimento?: ObterContaPagarModelResponse.diaSemanaVencimento | null;
  numeroDocumento?: string;
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
  ocorrencia?: ObterContaPagarModelResponse.ocorrencia | null;
  quantidadeParcelas?: number | null;
  valor?: number | null;
  saldo?: number | null;
  valorPago?: number | null;
  multa?: number | null;
  juros?: number | null;
  contato?: ContatoModelResponse;
  categoria?: CategoriaReceitaDespesaResponseModel;
  formaPagamento?: FormaPagamentoResponseModel;
  historico?: string | null;
  marcadores?: any;
};
export namespace ObterContaPagarModelResponse {
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
