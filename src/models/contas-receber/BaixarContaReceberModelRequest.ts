/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaRequestModel } from '../categorias/CategoriaRequestModel';
import type { ContaContabilRequestModel } from '../categorias/ContaContabilRequestModel';
/**
 *
 */
export type BaixarContaReceberModelRequest = {
  contaDestino?: ContaContabilRequestModel;
  data?: string | null;
  categoria?: CategoriaRequestModel;
  historico?: string | null;
  taxa?: string | null;
  juros?: string | null;
  desconto?: string | null;
  valorPago?: number | null;
  acrescimo?: string | null;
};
