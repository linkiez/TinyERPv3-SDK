/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaRequestModel } from '../categorias/CategoriaRequestModel';
/**
 *
 */
export type AtualizarContaReceberRequestModel = {
  taxa?: number | null;
  dataVencimento?: string | null;
  categoria?: CategoriaRequestModel;
  dataCompetencia?: string | null;
  atualizarContaRecorrente?: boolean;
};
