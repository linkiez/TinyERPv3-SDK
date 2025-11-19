/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExpedicaoResponseModel } from './ExpedicaoResponseModel';
import type { FormaEnvioResponseModel } from './FormaEnvioResponseModel';
/**
 *
 */
export type ObterAgrupamentoResponseModel = {
  id?: number;
  identificacao?: string;
  data?: string;
  formaEnvio?: FormaEnvioResponseModel;
  expedicoes?: Array<ExpedicaoResponseModel>;
};
