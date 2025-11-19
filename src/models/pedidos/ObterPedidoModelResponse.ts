/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DepositoResponseModel } from '../estoque/DepositoResponseModel';
import type { EcommerceResponseModel } from '../expedicao/EcommerceResponseModel';
import type { EnderecoEntregaModelResponse } from './EnderecoEntregaModelResponse';
import type { IntermediadorResponseModel } from '../intermediadores/IntermediadorResponseModel';
import type { ItemPedidoResponseModel } from './ItemPedidoResponseModel';
import type { ListaPrecoResponseModel } from '../lista-precos/ListaPrecoResponseModel';
import type { NaturezaOperacaoResponseModel } from '../notas-fiscais/NaturezaOperacaoResponseModel';
import type { PagamentoIntegradoModelResponse } from '../formas-pagamento/PagamentoIntegradoModelResponse';
import type { PagamentoResponseModel } from '../formas-pagamento/PagamentoResponseModel';
import type { PedidoClienteModel } from './PedidoClienteModel';
import type { PedidoModel } from './PedidoModel';
import type { TransportadorResponseModel } from '../logistica/TransportadorResponseModel';
import type { VendedorResponseModel } from '../vendedores/VendedorResponseModel';
/**
 *
 */
export type ObterPedidoModelResponse = PedidoModel & {
  id?: number | null;
  numeroPedido?: number | null;
  idNotaFiscal?: number | null;
  dataFaturamento?: string | null;
  valorTotalProdutos?: number | null;
  valorTotalPedido?: number | null;
  listaPreco?: ListaPrecoResponseModel;
  cliente?: PedidoClienteModel;
  enderecoEntrega?: EnderecoEntregaModelResponse;
  ecommerce?: EcommerceResponseModel;
  transportador?: TransportadorResponseModel;
  deposito?: DepositoResponseModel;
  vendedor?: VendedorResponseModel;
  naturezaOperacao?: NaturezaOperacaoResponseModel;
  intermediador?: IntermediadorResponseModel;
  pagamento?: PagamentoResponseModel;
  itens?: Array<ItemPedidoResponseModel> | null;
  pagamentosIntegrados?: Array<PagamentoIntegradoModelResponse> | null;
};
