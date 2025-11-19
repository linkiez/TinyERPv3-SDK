/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type ExpedicaoNotaResponseModel = {
  id?: number;
  numero?: number | null;
  data?: string | null;
  /**
   *
   * - 1 - Pendente
   * - 2 - Emitida
   * - 3 - Cancelada
   * - 4 - Enviada Aguardando Recibo
   * - 5 - Rejeitada
   * - 6 - Autorizada
   * - 7 - Emitida Danfe
   * - 8 - Registrada
   * - 9 - Enviada Aguardando Protocolo
   * - 10 - Denegada
   */
  situacao?: ExpedicaoNotaResponseModel.situacao | null;
};
export namespace ExpedicaoNotaResponseModel {
  /**
   *
   * - 1 - Pendente
   * - 2 - Emitida
   * - 3 - Cancelada
   * - 4 - Enviada Aguardando Recibo
   * - 5 - Rejeitada
   * - 6 - Autorizada
   * - 7 - Emitida Danfe
   * - 8 - Registrada
   * - 9 - Enviada Aguardando Protocolo
   * - 10 - Denegada
   */
  export enum situacao {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
    '_9' = 9,
    '_10' = 10,
  }
}
