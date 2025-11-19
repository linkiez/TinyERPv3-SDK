/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmbalagemRequestModel } from '../logistica/EmbalagemRequestModel';
/**
 *
 */
export type VolumeExpedicaoRequestModel = {
  embalagem?: EmbalagemRequestModel;
  largura?: number | null;
  altura?: number | null;
  comprimento?: number | null;
  diametro?: number | null;
  pesoBruto?: number | null;
  /**
   * Apenas para notas e pedidos
   */
  quantidadeVolumes?: number | null;
};
