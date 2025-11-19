/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnderecoContatoPedidoModel } from './EnderecoContatoPedidoModel';
/**
 *
 */
export type ContatoPedidoModel = {
  id?: number;
  codigo?: string | null;
  nome?: string | null;
  fantasia?: string | null;
  tipoPessoa?: string | null;
  cnpj?: string | null;
  inscricaoEstadual?: string | null;
  rg?: string | null;
  endereco?: EnderecoContatoPedidoModel;
  fone?: string | null;
  email?: string | null;
};
