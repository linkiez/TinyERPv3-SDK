/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type PagamentoIntegradoModelRequest = {
  /**
   * Valor do pagamento
   */
  valor?: number | null;
  /**
   * Tipo de pagamento (código)
   */
  tipoPagamento?: number | null;
  /**
   * CNPJ do intermediador
   */
  cnpjIntermediador?: string | null;
  /**
   * Código de autorização da transação
   */
  codigoAutorizacao?: string | null;
  /**
   * Código da bandeira da operadora de cartão
   */
  codigoBandeira?: number | null;
};
