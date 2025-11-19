/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaRequestModel } from '../categorias/CategoriaRequestModel';
import type { DimensoesProdutoRequestModel } from './DimensoesProdutoRequestModel';
import type { FornecedorProdutoRequestModel } from './FornecedorProdutoRequestModel';
import type { MarcaRequestModel } from '../marcas/MarcaRequestModel';
import type { PrecoProdutoRequestModel } from './PrecoProdutoRequestModel';
import type { SeoProdutoRequestModel } from './SeoProdutoRequestModel';
import type { TributacaoProdutoRequestModel } from './TributacaoProdutoRequestModel';
/**
 *
 */
export type ProdutoModel = {
  sku: string | null;
  descricaoComplementar?: string | null;
  unidade?: string | null;
  unidadePorCaixa?: string | null;
  ncm?: string | null;
  gtin?: string | null;
  origem?: number | null;
  codigoEspecificadorSubstituicaoTributaria?: string | null;
  garantia?: string | null;
  observacoes?: string | null;
  marca?: MarcaRequestModel;
  categoria?: CategoriaRequestModel;
  precos?: PrecoProdutoRequestModel;
  dimensoes?: DimensoesProdutoRequestModel;
  tributacao?: TributacaoProdutoRequestModel;
  seo?: SeoProdutoRequestModel;
  fornecedores?: Array<FornecedorProdutoRequestModel>;
};
