/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BasePedidoModel } from './BasePedidoModel';
import type { PagamentoIntegradoModelRequest } from '../formas-pagamento/PagamentoIntegradoModelRequest';
import type { PagamentoParcelasRequestModel } from '../formas-pagamento/PagamentoParcelasRequestModel';
/**
 *
 */
export type AtualizarPedidoModelRequest = BasePedidoModel & {
  pagamento?: PagamentoParcelasRequestModel;
  pagamentosIntegrados?: Array<PagamentoIntegradoModelRequest>;
};
