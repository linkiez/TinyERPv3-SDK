/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaEnvioModel } from './FormaEnvioModel';
import type { GatewayLogisticoResponseModel } from '../logistica/GatewayLogisticoResponseModel';
/**
 *
 */
export type ListagemFormasEnvioResponseModel = FormaEnvioModel & {
  id?: number;
  gatewayLogistico?: GatewayLogisticoResponseModel;
};
