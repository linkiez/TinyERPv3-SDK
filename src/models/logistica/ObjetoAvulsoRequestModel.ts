/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContatoRequestModel } from '../contatos/ContatoRequestModel';
import type { LogisticaObjetoAvulsoRequestModel } from './LogisticaObjetoAvulsoRequestModel';
import type { VolumeObjetoAvulsoRequestModel } from './VolumeObjetoAvulsoRequestModel';
/**
 *
 */
export type ObjetoAvulsoRequestModel = {
  descricao?: string | null;
  data?: string | null;
  destinatario?: ContatoRequestModel;
  volume?: VolumeObjetoAvulsoRequestModel;
  logistica?: LogisticaObjetoAvulsoRequestModel;
};
