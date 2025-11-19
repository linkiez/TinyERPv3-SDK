/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContatoModelResponse } from '../contatos/ContatoModelResponse';
import type { EcommerceResponseModel } from './EcommerceResponseModel';
import type { FormaEnvioResponseModel } from './FormaEnvioResponseModel';
import type { ItemSeparacaoResponseModel } from './ItemSeparacaoResponseModel';
import type { SeparacaoNotaResponseModel } from '../notas-fiscais/SeparacaoNotaResponseModel';
import type { SeparacaoVendaResponseModel } from './SeparacaoVendaResponseModel';
/**
 *
 */
export type ObterSeparacaoResponseModel = {
  id?: number | null;
  /**
   *
   * - 1 - Sit Aguardando Separacao
   * - 2 - Sit Separada
   * - 3 - Sit Embalada
   * - 4 - Sit Em Separacao
   */
  situacao?: ObterSeparacaoResponseModel.situacao | null;
  /**
   *
   * - 1 - Sit Checkout Disponivel
   * - 2 - Sit Checkout Bloqueado
   */
  situacaoCheckout?: ObterSeparacaoResponseModel.situacaoCheckout | null;
  dataCriacao?: string | null;
  dataSeparacao?: string | null;
  dataCheckout?: string | null;
  cliente?: ContatoModelResponse;
  venda?: SeparacaoVendaResponseModel;
  notaFiscal?: SeparacaoNotaResponseModel;
  itens?: Array<ItemSeparacaoResponseModel> | null;
  ecommerce?: EcommerceResponseModel;
  formaEnvio?: FormaEnvioResponseModel;
  volumes?: string | null;
};
export namespace ObterSeparacaoResponseModel {
  /**
   *
   * - 1 - Sit Aguardando Separacao
   * - 2 - Sit Separada
   * - 3 - Sit Embalada
   * - 4 - Sit Em Separacao
   */
  export enum situacao {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
  }
  /**
   *
   * - 1 - Sit Checkout Disponivel
   * - 2 - Sit Checkout Bloqueado
   */
  export enum situacaoCheckout {
    '_1' = 1,
    '_2' = 2,
  }
}
