/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContatoModelResponse } from '../contatos/ContatoModelResponse';
import type { EcommerceResponseModel } from './EcommerceResponseModel';
import type { FormaEnvioResponseModel } from './FormaEnvioResponseModel';
import type { SeparacaoNotaResponseModel } from '../notas-fiscais/SeparacaoNotaResponseModel';
import type { SeparacaoVendaResponseModel } from './SeparacaoVendaResponseModel';
/**
 *
 */
export type ListagemSeparacaoResponseModel = {
  id?: number;
  /**
   *
   * - 1 - Sit Aguardando Separacao
   * - 2 - Sit Separada
   * - 3 - Sit Embalada
   * - 4 - Sit Em Separacao
   */
  situacao?: ListagemSeparacaoResponseModel.situacao;
  dataCriacao?: string | null;
  dataSeparacao?: string | null;
  dataCheckout?: string | null;
  cliente?: ContatoModelResponse;
  venda?: SeparacaoVendaResponseModel;
  notaFiscal?: SeparacaoNotaResponseModel;
  ecommerce?: EcommerceResponseModel;
  formaEnvio?: FormaEnvioResponseModel;
};
export namespace ListagemSeparacaoResponseModel {
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
}
