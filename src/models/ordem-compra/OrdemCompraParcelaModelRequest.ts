/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContaContabilModel } from '../categorias/ContaContabilModel';
/**
 *
 */
export type OrdemCompraParcelaModelRequest = {
  dias?: number;
  dataVencimento?: string;
  valor?: number;
  contaContabil?: ContaContabilModel;
  /**
   *
   * - 1 - Dinheiro
   * - 2 - Cheque
   * - 3 - Cartao Credito
   * - 4 - Cartao Debito
   * - 5 - Credito Loja
   * - 10 - Vale Alimentacao
   * - 11 - Vale Refeicao
   * - 12 - Vale Presente
   * - 13 - Vale Combustivel
   * - 14 - Duplicata Mercantil
   * - 15 - Boleto
   * - 16 - Deposito Bancario
   * - 17 - Pix
   * - 18 - Transferencia Bancaria Carteira Digital
   * - 19 - Fidelidade Cashback Credito Virtual
   * - 20 - Pix Estatico
   * - 90 - Sem Pagamento
   * - 99 - Outros
   */
  meioPagamento?: OrdemCompraParcelaModelRequest.meioPagamento | null;
  observacoes?: string;
};
export namespace OrdemCompraParcelaModelRequest {
  /**
   *
   * - 1 - Dinheiro
   * - 2 - Cheque
   * - 3 - Cartao Credito
   * - 4 - Cartao Debito
   * - 5 - Credito Loja
   * - 10 - Vale Alimentacao
   * - 11 - Vale Refeicao
   * - 12 - Vale Presente
   * - 13 - Vale Combustivel
   * - 14 - Duplicata Mercantil
   * - 15 - Boleto
   * - 16 - Deposito Bancario
   * - 17 - Pix
   * - 18 - Transferencia Bancaria Carteira Digital
   * - 19 - Fidelidade Cashback Credito Virtual
   * - 20 - Pix Estatico
   * - 90 - Sem Pagamento
   * - 99 - Outros
   */
  export enum meioPagamento {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_10' = 10,
    '_11' = 11,
    '_12' = 12,
    '_13' = 13,
    '_14' = 14,
    '_15' = 15,
    '_16' = 16,
    '_17' = 17,
    '_18' = 18,
    '_19' = 19,
    '_20' = 20,
    '_90' = 90,
    '_99' = 99,
  }
}
