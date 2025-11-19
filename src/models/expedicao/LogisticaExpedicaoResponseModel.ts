/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaFreteResponseModel } from '../logistica/FormaFreteResponseModel';
import type { TransportadorExpedicaoResponseModel } from './TransportadorExpedicaoResponseModel';
/**
 *
 */
export type LogisticaExpedicaoResponseModel = {
  codigoRastreio?: string;
  urlRastreio?: string;
  possuiValorDeclarado?: boolean;
  valorDeclarado?: number;
  possuiAvisoRecebimento?: boolean;
  formaFrete?: FormaFreteResponseModel;
  transportador?: TransportadorExpedicaoResponseModel;
};
