/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContatoModel } from './ContatoModel';
import type { CriarContatoContatoModelRequest } from './CriarContatoContatoModelRequest';
import type { VendedorRequestModel } from '../vendedores/VendedorRequestModel';
/**
 *
 */
export type CriarAtualizarContatoModelRequest = ContatoModel & {
  vendedor?: VendedorRequestModel;
  tipos?: Array<number>;
  contatos?: Array<CriarContatoContatoModelRequest> | null;
};
