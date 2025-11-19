/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrecoProdutoResponseModel } from './PrecoProdutoResponseModel';
/**
 *
 */
export type ListagemProdutosResponseModel = {
  id?: number;
  sku?: string;
  descricao?: string;
  /**
   *
   * - K - Kit
   * - S - Simples
   * - V - Com Variacoes
   * - F - Fabricado
   * - M - Materia Prima
   */
  tipo?: ListagemProdutosResponseModel.tipo;
  /**
   *
   * - A - Ativo
   * - I - Inativo
   * - E - Excluido
   */
  situacao?: ListagemProdutosResponseModel.situacao;
  dataCriacao?: string | null;
  dataAlteracao?: string | null;
  unidade?: string;
  gtin?: string;
  precos?: PrecoProdutoResponseModel;
};
export namespace ListagemProdutosResponseModel {
  /**
   *
   * - K - Kit
   * - S - Simples
   * - V - Com Variacoes
   * - F - Fabricado
   * - M - Materia Prima
   */
  export enum tipo {
    K = 'K',
    S = 'S',
    V = 'V',
    F = 'F',
    M = 'M',
  }
  /**
   *
   * - A - Ativo
   * - I - Inativo
   * - E - Excluido
   */
  export enum situacao {
    A = 'A',
    I = 'I',
    E = 'E',
  }
}
