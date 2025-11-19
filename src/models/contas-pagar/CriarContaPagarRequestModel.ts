/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaRequestModel } from '../categorias/CategoriaRequestModel';
import type { ContatoRequestModel } from '../contatos/ContatoRequestModel';
/**
 *
 */
export type CriarContaPagarRequestModel = {
  data?: string | null;
  dataVencimento?: string | null;
  valor?: number | null;
  numeroDocumento?: string | null;
  contato?: ContatoRequestModel;
  historico?: string | null;
  categoria?: CategoriaRequestModel;
  dataCompetencia?: string | null;
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
  ocorrencia?: CriarContaPagarRequestModel.ocorrencia | null;
  /**
   *
   * - 0 - Nao Definida
   * - 2 - Dinheiro
   * - 3 - Credito
   * - 4 - Debito
   * - 5 - Boleto
   * - 6 - Deposito
   * - 7 - Cheque
   * - 8 - Crediario
   * - 10 - Outra
   * - 12 - Duplicata Mercantil
   * - 14 - Vale
   * - 15 - Pix
   * - 16 - Vale Alimentacao
   * - 17 - Vale Refeicao
   * - 18 - Vale Presente
   * - 19 - Vale Combustivel
   * - 20 - Deposito Bancario
   * - 21 - Transferencia Bancaria Carteira Digital
   * - 22 - Fidelidade Cashback Credito Virtual
   */
  formaPagamento?: CriarContaPagarRequestModel.formaPagamento | null;
  diaVencimento?: number | null;
  quantidadeParcelas?: number | null;
  diaSemanaVencimento?: number | null;
};
export namespace CriarContaPagarRequestModel {
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
  /**
   *
   * - 0 - Nao Definida
   * - 2 - Dinheiro
   * - 3 - Credito
   * - 4 - Debito
   * - 5 - Boleto
   * - 6 - Deposito
   * - 7 - Cheque
   * - 8 - Crediario
   * - 10 - Outra
   * - 12 - Duplicata Mercantil
   * - 14 - Vale
   * - 15 - Pix
   * - 16 - Vale Alimentacao
   * - 17 - Vale Refeicao
   * - 18 - Vale Presente
   * - 19 - Vale Combustivel
   * - 20 - Deposito Bancario
   * - 21 - Transferencia Bancaria Carteira Digital
   * - 22 - Fidelidade Cashback Credito Virtual
   */
  export enum formaPagamento {
    '_0' = 0,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
    '_10' = 10,
    '_12' = 12,
    '_14' = 14,
    '_15' = 15,
    '_16' = 16,
    '_17' = 17,
    '_18' = 18,
    '_19' = 19,
    '_20' = 20,
    '_21' = 21,
    '_22' = 22,
  }
}
