/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type FormaFreteModel = {
  id?: number;
  nome?: string | null;
  codigo?: string | null;
  codigoExterno?: string | null;
  /**
   *
   * - 0 - Nao Definida
   * - 1 - Normal
   * - 2 - Expressa
   * - 3 - Agendada
   * - 4 - Economica
   * - 5 - Super Expressa
   * - 6 - Retirada
   */
  tipoEntrega?: FormaFreteModel.tipoEntrega | null;
};
export namespace FormaFreteModel {
  /**
   *
   * - 0 - Nao Definida
   * - 1 - Normal
   * - 2 - Expressa
   * - 3 - Agendada
   * - 4 - Economica
   * - 5 - Super Expressa
   * - 6 - Retirada
   */
  export enum tipoEntrega {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
  }
}
