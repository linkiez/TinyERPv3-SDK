/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type FormaPagamentoModel = {
  id?: number;
  nome?: string | null;
  /**
   *
   * - 1 - Habilitada
   * - 2 - Desabilitada
   */
  situacao?: FormaPagamentoModel.situacao | null;
};
export namespace FormaPagamentoModel {
  /**
   *
   * - 1 - Habilitada
   * - 2 - Desabilitada
   */
  export enum situacao {
    '_1' = 1,
    '_2' = 2,
  }
}
