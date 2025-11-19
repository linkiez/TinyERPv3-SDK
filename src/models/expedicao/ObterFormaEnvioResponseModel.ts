/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaEnvioModel } from './FormaEnvioModel';
import type { FormaFreteModel } from '../logistica/FormaFreteModel';
import type { GatewayLogisticoResponseModel } from '../logistica/GatewayLogisticoResponseModel';
/**
 *
 */
export type ObterFormaEnvioResponseModel = FormaEnvioModel & {
  id?: number;
  gatewayLogistico?: GatewayLogisticoResponseModel;
  formasFrete?: Array<FormaFreteModel> | null;
};
