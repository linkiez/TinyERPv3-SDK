/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaPagamentoRequestModel } from './FormaPagamentoRequestModel';
import type { MeioPagamentoRequestModel } from './MeioPagamentoRequestModel';
import type { ParcelaModelRequest } from './ParcelaModelRequest';
/**
 *
 */
export type PagamentoRequestModel = {
  formaPagamento?: FormaPagamentoRequestModel;
  meioPagamento?: MeioPagamentoRequestModel;
  parcelas?: Array<ParcelaModelRequest> | null;
};
