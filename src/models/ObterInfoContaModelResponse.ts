/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { EnderecoModel } from './contatos/EnderecoModel';

/**
 *
 */
export type ObterInfoContaModelResponse = {
  razaoSocial?: string;
  cpfCnpj?: string;
  fantasia?: string;
  enderecoEmpresa?: EnderecoModel;
  fone?: string;
  email?: string;
  inscricaoEstadual?: string;
  /**
   *
   * - 1 - Simples Nacional
   * - 2 - Simples Nacional Excesso Receita
   * - 3 - Regime Normal
   * - 4 - Mei
   */
  regimeTributario?: ObterInfoContaModelResponse.regimeTributario;
};
export namespace ObterInfoContaModelResponse {
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
