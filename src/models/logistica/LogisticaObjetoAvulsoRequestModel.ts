/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaFreteRequestModel } from './FormaFreteRequestModel';
/**
 *
 */
export type LogisticaObjetoAvulsoRequestModel = {
  formaFrete?: FormaFreteRequestModel;
  codigoRastreio?: string | null;
  urlRastreio?: string | null;
  possuiValorDeclarado?: any;
  valorDeclarado?: number | null;
  possuiAvisoRecebimento?: any;
};
