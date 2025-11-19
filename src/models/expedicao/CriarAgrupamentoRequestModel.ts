/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjetoAvulsoRequestModel } from '../logistica/ObjetoAvulsoRequestModel';
/**
 *
 */
export type CriarAgrupamentoRequestModel = {
  idsNotasFiscais?: Array<number>;
  idsPedidos?: Array<number>;
  objetosAvulsos?: Array<ObjetoAvulsoRequestModel>;
};
