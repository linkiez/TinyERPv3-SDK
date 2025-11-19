/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogisticaExpedicaoRequestModel } from './LogisticaExpedicaoRequestModel';
import type { VolumeExpedicaoRequestModel } from './VolumeExpedicaoRequestModel';
/**
 *
 */
export type ExpedicaoRequestModel = {
  descricao?: string | null;
  volume?: VolumeExpedicaoRequestModel;
  logistica?: LogisticaExpedicaoRequestModel;
};
