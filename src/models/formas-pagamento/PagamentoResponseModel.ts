/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormaPagamentoResponseModel } from './FormaPagamentoResponseModel';
import type { MeioPagamentoResponseModel } from './MeioPagamentoResponseModel';
import type { ParcelaModelResponse } from './ParcelaModelResponse';
/**
 *
 */
export type PagamentoResponseModel = {
  formaPagamento?: FormaPagamentoResponseModel;
  meioPagamento?: MeioPagamentoResponseModel;
  condicaoPagamento?: string | null;
  parcelas?: Array<ParcelaModelResponse> | null;
};
