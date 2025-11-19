/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaPagamentoResponseModel } from './FormaPagamentoResponseModel';
import type { MeioPagamentoResponseModel } from './MeioPagamentoResponseModel';
import type { ParcelaModel } from './ParcelaModel';
/**
 *
 */
export type ParcelaModelResponse = ParcelaModel & {
  formaPagamento?: FormaPagamentoResponseModel;
  meioPagamento?: MeioPagamentoResponseModel;
};
