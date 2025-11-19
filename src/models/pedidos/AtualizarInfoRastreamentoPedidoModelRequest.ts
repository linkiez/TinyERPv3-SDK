/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaEnvioRequestModel } from '../expedicao/FormaEnvioRequestModel';
import type { FormaFreteRequestModel } from '../logistica/FormaFreteRequestModel';
/**
 *
 */
export type AtualizarInfoRastreamentoPedidoModelRequest = {
  codigoRastreamento?: string | null;
  urlRastreamento?: string | null;
  formaEnvio?: FormaEnvioRequestModel;
  formaFrete?: FormaFreteRequestModel;
  fretePagoEmpresa?: number | null;
  dataPrevista?: string | null;
  idContatoTransportadora?: number | null;
  volumes?: number | null;
  pesoBruto?: number | null;
  pesoLiquido?: number | null;
  observacoes?: string | null;
};
