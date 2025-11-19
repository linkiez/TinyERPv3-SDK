/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Modelo de dados do pagamento integrado da nota fiscal
 */
export type NotaFiscalPagamentoIntegradoModelResponse = {
  /**
   * Valor do pagamento
   */
  valor?: number;
  /**
   * Tipo de pagamento
   */
  tipoPagamento?: number;
  /**
   * CNPJ do intermediador
   */
  cnpjIntermediador?: string;
  /**
   * Código de autorização
   */
  codigoAutorizacao?: string;
  /**
   * Código da bandeira
   */
  codigoBandeira?: number;
};
