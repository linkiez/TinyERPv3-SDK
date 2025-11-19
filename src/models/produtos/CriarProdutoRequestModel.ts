/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnexoRequestModel } from '../ordem-servico/AnexoRequestModel';
import type { CriarProdutoEstoqueRequestModel } from './CriarProdutoEstoqueRequestModel';
import type { ProducaoProdutoRequestModel } from './ProducaoProdutoRequestModel';
import type { ProdutoKitRequestModel } from './ProdutoKitRequestModel';
import type { ProdutoModel } from './ProdutoModel';
import type { SeoProdutoRequestModel } from './SeoProdutoRequestModel';
import type { VariacaoProdutoRequestModel } from './VariacaoProdutoRequestModel';
/**
 *
 */
export type CriarProdutoRequestModel = ProdutoModel & {
  descricao: string | null;
  /**
   *
   * - K - Kit
   * - S - Simples
   * - V - Com Variacoes
   * - F - Fabricado
   * - M - Materia Prima
   */
  tipo: CriarProdutoRequestModel.tipo | null;
  estoque?: CriarProdutoEstoqueRequestModel;
  seo?: SeoProdutoRequestModel;
  anexos?: Array<AnexoRequestModel>;
  grade?: Array<string>;
  producao?: ProducaoProdutoRequestModel;
  kit?: Array<ProdutoKitRequestModel>;
  variacoes?: Array<VariacaoProdutoRequestModel>;
};
export namespace CriarProdutoRequestModel {
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
}
