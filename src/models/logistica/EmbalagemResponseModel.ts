/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type EmbalagemResponseModel = {
  id?: number | null;
  /**
   *
   * - 0 - Nao Definido
   * - 1 - Envelope
   * - 2 - Caixa
   * - 3 - Cilindro
   */
  tipo?: EmbalagemResponseModel.tipo | null;
  descricao?: string | null;
};
export namespace EmbalagemResponseModel {
  /**
   *
   * - 0 - Nao Definido
   * - 1 - Envelope
   * - 2 - Caixa
   * - 3 - Cilindro
   */
  export enum tipo {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }
}
