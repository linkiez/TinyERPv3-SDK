/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DepositoModel } from '../estoque/DepositoModel';
/**
 *
 */
export type ObterEstoqueProdutoModelResponse = {
  id?: number;
  nome?: string;
  codigo?: string;
  unidade?: string;
  saldo?: number;
  reservado?: number;
  disponivel?: number;
  depositos?: Array<DepositoModel>;
};
