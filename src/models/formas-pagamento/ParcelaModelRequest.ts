/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaPagamentoRequestModel } from './FormaPagamentoRequestModel';
import type { MeioPagamentoRequestModel } from './MeioPagamentoRequestModel';
import type { ParcelaModel } from './ParcelaModel';
/**
 *
 */
export type ParcelaModelRequest = ParcelaModel & {
  formaPagamento?: FormaPagamentoRequestModel;
  meioPagamento?: MeioPagamentoRequestModel;
};
