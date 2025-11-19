/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type AlterarSituacaoSeparacaoModelRequest = {
  /**
   *
   * - 1 - Sit Aguardando Separacao
   * - 2 - Sit Separada
   * - 3 - Sit Embalada
   * - 4 - Sit Em Separacao
   */
  situacao?: AlterarSituacaoSeparacaoModelRequest.situacao | null;
};
export namespace AlterarSituacaoSeparacaoModelRequest {
  /**
   *
   * - 1 - Sit Aguardando Separacao
   * - 2 - Sit Separada
   * - 3 - Sit Embalada
   * - 4 - Sit Em Separacao
   */
  export enum situacao {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
  }
}
