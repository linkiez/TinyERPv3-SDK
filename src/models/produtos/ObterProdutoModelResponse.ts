/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnexoResponseModel } from '../ordem-servico/AnexoResponseModel';
import type { CategoriaResponseModel } from '../categorias/CategoriaResponseModel';
import type { DimensoesProdutoResponseModel } from './DimensoesProdutoResponseModel';
import type { EstoqueProdutoResponseModel } from './EstoqueProdutoResponseModel';
import type { FornecedorProdutoResponseModel } from './FornecedorProdutoResponseModel';
import type { MarcaResponseModel } from '../marcas/MarcaResponseModel';
import type { PrecoProdutoResponseModel } from './PrecoProdutoResponseModel';
import type { ProducaoProdutoResponseModel } from './ProducaoProdutoResponseModel';
import type { ProdutoKitResponseModel } from './ProdutoKitResponseModel';
import type { ProdutoResponseModel } from './ProdutoResponseModel';
import type { SeoProdutoModelResponse } from './SeoProdutoModelResponse';
import type { TributacaoProdutoResponseModel } from './TributacaoProdutoResponseModel';
import type { VariacaoProdutoResponseModel } from './VariacaoProdutoResponseModel';
/**
 *
 */
export type ObterProdutoModelResponse = ProdutoResponseModel & {
  descricaoComplementar?: string | null;
  /**
   *
   * - K - Kit
   * - S - Simples
   * - V - Com Variacoes
   * - F - Fabricado
   * - M - Materia Prima
   */
  tipo?: ObterProdutoModelResponse.tipo | null;
  /**
   *
   * - A - Ativo
   * - I - Inativo
   * - E - Excluido
   */
  situacao?: ObterProdutoModelResponse.situacao | null;
  produtoPai?: ProdutoResponseModel;
  unidade?: string | null;
  unidadePorCaixa?: string | null;
  ncm?: string | null;
  gtin?: string | null;
  /**
   *
   * - 0 - Nacional Exceto Codigo 3 A 5
   * - 4 - Nacional Producao Conforme Ajustes
   * - 5 - Nacional Conteudo Importacao Inferior 40
   * - 3 - Nacional Conteudo Importacao Superior 40
   * - 8 - Nacional Conteudo Importacao Superior 70
   * - 1 - Estrangeira Importacao Direta Exceto Codigo 6
   * - 6 - Estrangeira Importacao Direta Sem Similar
   * - 2 - Estrangeira Adquirida Mercado Interno
   * - 7 - Estrangeira Adquirida Mercado Interno Sem Similar
   */
  origem?: ObterProdutoModelResponse.origem;
  garantia?: string | null;
  observacoes?: string | null;
  categoria?: CategoriaResponseModel;
  marca?: MarcaResponseModel;
  dimensoes?: DimensoesProdutoResponseModel;
  precos?: PrecoProdutoResponseModel;
  estoque?: EstoqueProdutoResponseModel;
  fornecedores?: Array<FornecedorProdutoResponseModel> | null;
  seo?: SeoProdutoModelResponse;
  tributacao?: TributacaoProdutoResponseModel;
  anexos?: Array<AnexoResponseModel>;
  variacoes?: Array<VariacaoProdutoResponseModel>;
  kit?: Array<ProdutoKitResponseModel>;
  producao?: ProducaoProdutoResponseModel;
};
export namespace ObterProdutoModelResponse {
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
  /**
   *
   * - 0 - Nacional Exceto Codigo 3 A 5
   * - 4 - Nacional Producao Conforme Ajustes
   * - 5 - Nacional Conteudo Importacao Inferior 40
   * - 3 - Nacional Conteudo Importacao Superior 40
   * - 8 - Nacional Conteudo Importacao Superior 70
   * - 1 - Estrangeira Importacao Direta Exceto Codigo 6
   * - 6 - Estrangeira Importacao Direta Sem Similar
   * - 2 - Estrangeira Adquirida Mercado Interno
   * - 7 - Estrangeira Adquirida Mercado Interno Sem Similar
   */
  export enum origem {
    '_0' = 0,
    '_4' = 4,
    '_5' = 5,
    '_3' = 3,
    '_8' = 8,
    '_1' = 1,
    '_6' = 6,
    '_2' = 2,
    '_7' = 7,
  }
}
