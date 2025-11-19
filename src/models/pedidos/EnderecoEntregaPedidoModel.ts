/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type EnderecoEntregaPedidoModel = {
  endereco?: string | null;
  enderecoNro?: string | null;
  complemento?: string | null;
  bairro?: string | null;
  municipio?: string | null;
  cep?: string | null;
  uf?: string | null;
  fone?: string | null;
  nomeDestinatario?: string | null;
  cpfCnpj?: string | null;
  /**
   *
   * - J - Juridica
   * - F - Fisica
   * - E - Estrangeiro
   * - X - Estrangeiro No Brasil
   */
  tipoPessoa?: EnderecoEntregaPedidoModel.tipoPessoa | null;
  ie?: string | null;
};
export namespace EnderecoEntregaPedidoModel {
  /**
   *
   * - J - Juridica
   * - F - Fisica
   * - E - Estrangeiro
   * - X - Estrangeiro No Brasil
   */
  export enum tipoPessoa {
    J = 'J',
    F = 'F',
    E = 'E',
    X = 'X',
  }
}
