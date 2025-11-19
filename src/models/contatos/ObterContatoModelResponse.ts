/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContatoModel } from './ContatoModel';
import type { PessoaContatoModel } from './PessoaContatoModel';
import type { TipoContatoModel } from './TipoContatoModel';
import type { VendedorResponseModel } from '../vendedores/VendedorResponseModel';
/**
 *
 */
export type ObterContatoModelResponse = ContatoModel & {
  id?: number;
  dataCriacao?: string | null;
  dataAtualizacao?: string | null;
  vendedor?: VendedorResponseModel | null;
  tipos?: Array<TipoContatoModel> | null;
  contatos?: Array<PessoaContatoModel> | null;
};
