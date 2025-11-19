/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type CriarOrdemCompraModelResponse = {
  id?: number;
  numeroPedido?: string;
  data?: string;
  /**
   *
   * - 0 - Em Aberto
   * - 1 - Atendido
   * - 2 - Cancelado
   * - 3 - Em Andamento
   */
  situacao?: CriarOrdemCompraModelResponse.situacao | null;
};
export namespace CriarOrdemCompraModelResponse {
  /**
   *
   * - 0 - Em Aberto
   * - 1 - Atendido
   * - 2 - Cancelado
   * - 3 - Em Andamento
   */
  export enum situacao {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }
}
