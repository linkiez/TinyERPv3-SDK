/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type ListarTiposDeContatosModelResponse = {
  id?: number;
  nome?: string;
  /**
   *
   * - 0 - Outro
   * - 1 - Cliente
   * - 2 - Fornecedor
   * - 3 - Vendedor
   * - 4 - Transportador
   * - 5 - Funcionario
   */
  perfilContato?: ListarTiposDeContatosModelResponse.perfilContato;
};
export namespace ListarTiposDeContatosModelResponse {
  /**
   *
   * - 0 - Outro
   * - 1 - Cliente
   * - 2 - Fornecedor
   * - 3 - Vendedor
   * - 4 - Transportador
   * - 5 - Funcionario
   */
  export enum perfilContato {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
  }
}
