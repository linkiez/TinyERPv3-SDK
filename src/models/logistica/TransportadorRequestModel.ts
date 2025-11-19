/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaEnvioRequestModel } from '../expedicao/FormaEnvioRequestModel';
import type { FormaFreteRequestModel } from './FormaFreteRequestModel';
/**
 *
 */
export type TransportadorRequestModel = {
  id?: number | null;
  /**
   *
   * - R - Remetente
   * - D - Destinatario
   * - T - Terceiros
   * - 3 - Proprio Remetente
   * - 4 - Proprio Destinatario
   * - S - Sem Transporte
   */
  fretePorConta?: TransportadorRequestModel.fretePorConta | null;
  formaEnvio?: FormaEnvioRequestModel;
  formaFrete?: FormaFreteRequestModel;
  codigoRastreamento?: string | null;
  urlRastreamento?: string | null;
};
export namespace TransportadorRequestModel {
  /**
   *
   * - R - Remetente
   * - D - Destinatario
   * - T - Terceiros
   * - 3 - Proprio Remetente
   * - 4 - Proprio Destinatario
   * - S - Sem Transporte
   */
  export enum fretePorConta {
    R = 'R',
    D = 'D',
    T = 'T',
    _3 = '3',
    _4 = '4',
    S = 'S',
  }
}
