/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnderecoModel } from './EnderecoModel';
/**
 *
 */
export type BaseContatoModel = {
  nome?: string | null;
  codigo?: string | null;
  fantasia?: string | null;
  /**
   *
   * - J - Juridica
   * - F - Fisica
   * - E - Estrangeiro
   * - X - Estrangeiro No Brasil
   */
  tipoPessoa?: BaseContatoModel.tipoPessoa | null;
  cpfCnpj?: string | null;
  inscricaoEstadual?: string | null;
  rg?: string | null;
  telefone?: string | null;
  celular?: string | null;
  email?: string | null;
  endereco?: EnderecoModel;
};
export namespace BaseContatoModel {
  /**
   *
   * - J - Juridica
   * - F - Fisica
   * - E - Estrangeiro
   * - X - Estrangeiro No Brasil
   */
  export enum tipoPessoa {
    J = 'J',
    F = 'F',
    E = 'E',
    X = 'X',
  }
}
