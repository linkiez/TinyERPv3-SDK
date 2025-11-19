/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContatoModelResponse } from '../contatos/ContatoModelResponse';
import type { ExpedicaoNotaResponseModel } from '../notas-fiscais/ExpedicaoNotaResponseModel';
import type { ExpedicaoVendaResponseModel } from './ExpedicaoVendaResponseModel';
import type { LogisticaExpedicaoResponseModel } from './LogisticaExpedicaoResponseModel';
import type { VolumeExpedicaoResponseModel } from './VolumeExpedicaoResponseModel';
/**
 *
 */
export type ExpedicaoResponseModel = {
  id?: number;
  data?: string;
  situacao?: string;
  venda?: ExpedicaoVendaResponseModel;
  notaFiscal?: ExpedicaoNotaResponseModel;
  destinatario?: ContatoModelResponse;
  volume?: VolumeExpedicaoResponseModel;
  logistica?: LogisticaExpedicaoResponseModel;
};
