/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseNotaFiscalModel } from './BaseNotaFiscalModel';
import type { EcommerceResponseModel } from '../expedicao/EcommerceResponseModel';
import type { NotaFiscalItemModelResponse } from './NotaFiscalItemModelResponse';
import type { NotaFiscalPagamentoIntegradoModelResponse } from './NotaFiscalPagamentoIntegradoModelResponse';
import type { NotaFiscalParcelaModelResponse } from './NotaFiscalParcelaModelResponse';
/**
 *
 */
export type ObterNotaFiscalModelResponse = BaseNotaFiscalModel & {
  id?: number;
  /**
   *
   * - 1 - Nfe Normal
   * - 2 - Nfe Complementar
   * - 3 - Nfe Ajuste
   * - 4 - Devolucao Retorno
   * - 5 - Credito
   * - 6 - Debito
   * - 7 - Nfe Cupom Referenciado
   * - 8 - Devolucao Retorno Sem Nfe
   * - 9 - Nfe Chave Acesso Referenciada
   */
  finalidade?: ObterNotaFiscalModelResponse.finalidade | null;
  /**
   *
   * - 1 - Simples Nacional
   * - 2 - Simples Nacional Excesso Receita
   * - 3 - Regime Normal
   * - 4 - Mei
   */
  regimeTributario?: ObterNotaFiscalModelResponse.regimeTributario | null;
  dataInclusao?: string | null;
  baseIcms?: number | null;
  valorIcms?: number | null;
  baseIcmsSt?: number | null;
  valorIcmsSt?: number | null;
  valorServicos?: number | null;
  valorFrete?: number | null;
  valorSeguro?: number | null;
  valorOutras?: number | null;
  valorIpi?: number | null;
  valorIssqn?: number | null;
  valorDesconto?: number | null;
  valorFaturado?: number | null;
  idIntermediador?: number | null;
  idNaturezaOperacao?: number | null;
  idFormaPagamento?: number | null;
  idMeioPagamento?: number | null;
  observacoes?: string | null;
  condicaoPagamento?: string | null;
  itens?: Array<NotaFiscalItemModelResponse>;
  parcelas?: Array<NotaFiscalParcelaModelResponse>;
  pagamentosIntegrados?: Array<NotaFiscalPagamentoIntegradoModelResponse>;
  ecommerce?: EcommerceResponseModel;
};
export namespace ObterNotaFiscalModelResponse {
  /**
   *
   * - 1 - Nfe Normal
   * - 2 - Nfe Complementar
   * - 3 - Nfe Ajuste
   * - 4 - Devolucao Retorno
   * - 5 - Credito
   * - 6 - Debito
   * - 7 - Nfe Cupom Referenciado
   * - 8 - Devolucao Retorno Sem Nfe
   * - 9 - Nfe Chave Acesso Referenciada
   */
  export enum finalidade {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
    '_9' = 9,
  }
  /**
   *
   * - 1 - Simples Nacional
   * - 2 - Simples Nacional Excesso Receita
   * - 3 - Regime Normal
   * - 4 - Mei
   */
  export enum regimeTributario {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
  }
}
