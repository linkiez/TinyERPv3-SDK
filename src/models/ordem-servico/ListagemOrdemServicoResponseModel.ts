/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContatoModelResponse } from '../contatos/ContatoModelResponse';
/**
 *
 */
export type ListagemOrdemServicoResponseModel = {
  id?: number | null;
  /**
   *
   * - 4 - Nao Aprovada
   * - 3 - Finalizada
   * - 0 - Em Aberto
   * - 2 - Serv Concluido
   * - 1 - Orcada
   * - 5 - Aprovada
   * - 6 - Em Andamento
   * - 7 - Cancelada
   */
  situacao?: ListagemOrdemServicoResponseModel.situacao | null;
  data?: string | null;
  dataPrevista?: string | null;
  valor?: number | null;
  numeroOrdemServico?: string | null;
  cliente?: ContatoModelResponse;
  marcadores?: any;
};
export namespace ListagemOrdemServicoResponseModel {
  /**
   *
   * - 4 - Nao Aprovada
   * - 3 - Finalizada
   * - 0 - Em Aberto
   * - 2 - Serv Concluido
   * - 1 - Orcada
   * - 5 - Aprovada
   * - 6 - Em Andamento
   * - 7 - Cancelada
   */
  export enum situacao {
    '_4' = 4,
    '_3' = 3,
    '_0' = 0,
    '_2' = 2,
    '_1' = 1,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
  }
}
