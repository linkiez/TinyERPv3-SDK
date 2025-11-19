/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseContatoModel } from './BaseContatoModel';
import type { VendedorResponseModel } from '../vendedores/VendedorResponseModel';
/**
 *
 */
export type ListagemContatoModelResponse = BaseContatoModel & {
  id?: number;
  vendedor?: VendedorResponseModel | null;
  /**
   *
   * - B - Ativo
   * - A - Ativo Com Acesso Sistema
   * - I - Inativo
   * - E - Excluido
   */
  situacao?: ListagemContatoModelResponse.situacao | null;
  dataCriacao?: string | null;
  dataAtualizacao?: string | null;
};
export namespace ListagemContatoModelResponse {
  /**
   *
   * - B - Ativo
   * - A - Ativo Com Acesso Sistema
   * - I - Inativo
   * - E - Excluido
   */
  export enum situacao {
    B = 'B',
    A = 'A',
    I = 'I',
    E = 'E',
  }
}
