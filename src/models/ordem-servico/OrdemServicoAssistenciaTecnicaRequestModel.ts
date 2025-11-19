/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PecaOrdemServicoRequestModel } from './PecaOrdemServicoRequestModel';
/**
 *
 */
export type OrdemServicoAssistenciaTecnicaRequestModel = {
  equipamento?: string | null;
  numeroSerieEquipamento?: string | null;
  pecas?: Array<PecaOrdemServicoRequestModel> | null;
};
