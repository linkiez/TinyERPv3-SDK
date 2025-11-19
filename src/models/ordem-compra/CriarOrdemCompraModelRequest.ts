/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaRequestModel } from '../categorias/CategoriaRequestModel';
import type { ContatoRequestModel } from '../contatos/ContatoRequestModel';
import type { CriarAtualizarOrdemCompraModelRequest } from './CriarAtualizarOrdemCompraModelRequest';
import type { OrdemCompraItemModelRequest } from './OrdemCompraItemModelRequest';
/**
 *
 */
export type CriarOrdemCompraModelRequest = CriarAtualizarOrdemCompraModelRequest & {
  contato?: ContatoRequestModel;
  categoria?: CategoriaRequestModel;
  frete?: number | null;
  itens?: Array<OrdemCompraItemModelRequest>;
};
