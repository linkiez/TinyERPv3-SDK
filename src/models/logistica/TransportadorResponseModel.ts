/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaEnvioResponseModel } from '../expedicao/FormaEnvioResponseModel';
import type { FormaFreteResponseModel } from './FormaFreteResponseModel';
/**
 *
 */
export type TransportadorResponseModel = {
  id?: number | null;
  nome?: string | null;
  /**
   *
   * - R - Remetente
   * - D - Destinatario
   * - T - Terceiros
   * - 3 - Proprio Remetente
   * - 4 - Proprio Destinatario
   * - S - Sem Transporte
   */
  fretePorConta?: TransportadorResponseModel.fretePorConta | null;
  formaEnvio?: FormaEnvioResponseModel;
  formaFrete?: FormaFreteResponseModel;
  codigoRastreamento?: string | null;
  urlRastreamento?: string | null;
};
export namespace TransportadorResponseModel {
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
