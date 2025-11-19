/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type ExpedicaoVendaResponseModel = {
  id?: number;
  numero?: number | null;
  data?: string | null;
  /**
   *
   * - 8 - Dados Incompletos
   * - 0 - Aberta
   * - 3 - Aprovada
   * - 4 - Preparando Envio
   * - 1 - Faturada
   * - 7 - Pronto Envio
   * - 5 - Enviada
   * - 6 - Entregue
   * - 2 - Cancelada
   * - 9 - Nao Entregue
   */
  situacao?: ExpedicaoVendaResponseModel.situacao | null;
};
export namespace ExpedicaoVendaResponseModel {
  /**
   *
   * - 8 - Dados Incompletos
   * - 0 - Aberta
   * - 3 - Aprovada
   * - 4 - Preparando Envio
   * - 1 - Faturada
   * - 7 - Pronto Envio
   * - 5 - Enviada
   * - 6 - Entregue
   * - 2 - Cancelada
   * - 9 - Nao Entregue
   */
  export enum situacao {
    '_8' = 8,
    '_0' = 0,
    '_3' = 3,
    '_4' = 4,
    '_1' = 1,
    '_7' = 7,
    '_5' = 5,
    '_6' = 6,
    '_2' = 2,
    '_9' = 9,
  }
}
