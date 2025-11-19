/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DepositoRequestModel } from '../estoque/DepositoRequestModel';
import type { EcommerceRequestModel } from '../expedicao/EcommerceRequestModel';
import type { EnderecoEntregaPedidoModelRequest } from './EnderecoEntregaPedidoModelRequest';
import type { IntermediadorRequestModel } from '../intermediadores/IntermediadorRequestModel';
import type { ItemPedidoRequestModel } from './ItemPedidoRequestModel';
import type { ListaPrecoRequestModel } from '../lista-precos/ListaPrecoRequestModel';
import type { NaturezaOperacaoRequestModel } from '../notas-fiscais/NaturezaOperacaoRequestModel';
import type { PagamentoIntegradoModelRequest } from '../formas-pagamento/PagamentoIntegradoModelRequest';
import type { PagamentoRequestModel } from '../formas-pagamento/PagamentoRequestModel';
import type { PedidoModel } from './PedidoModel';
import type { TransportadorRequestModel } from '../logistica/TransportadorRequestModel';
import type { VendedorRequestModel } from '../vendedores/VendedorRequestModel';
/**
 *
 */
export type CriarPedidoModelRequest = PedidoModel & {
  idContato: number;
  listaPreco?: ListaPrecoRequestModel;
  naturezaOperacao?: NaturezaOperacaoRequestModel;
  vendedor?: VendedorRequestModel;
  enderecoEntrega?: EnderecoEntregaPedidoModelRequest;
  ecommerce?: EcommerceRequestModel;
  transportador?: TransportadorRequestModel;
  intermediador?: IntermediadorRequestModel;
  deposito?: DepositoRequestModel;
  pagamento?: PagamentoRequestModel;
  itens?: Array<ItemPedidoRequestModel>;
  pagamentosIntegrados?: Array<PagamentoIntegradoModelRequest>;
};
