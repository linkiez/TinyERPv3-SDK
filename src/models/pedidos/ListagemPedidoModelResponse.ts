/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EcommerceResponseModel } from '../expedicao/EcommerceResponseModel';
import type { PedidoClienteModel } from './PedidoClienteModel';
import type { TransportadorResponseModel } from '../logistica/TransportadorResponseModel';
import type { VendedorResponseModel } from '../vendedores/VendedorResponseModel';
/**
 *
 */
export type ListagemPedidoModelResponse = {
  id?: number | null;
  situacao?: number | null;
  numeroPedido?: number | null;
  ecommerce?: EcommerceResponseModel;
  dataCriacao?: string | null;
  dataPrevista?: string | null;
  cliente?: PedidoClienteModel;
  valor?: string | null;
  vendedor?: VendedorResponseModel;
  transportador?: TransportadorResponseModel;
};
