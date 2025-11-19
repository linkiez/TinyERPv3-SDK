/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaResponseModel } from '../categorias/CategoriaResponseModel';
import type { ContatoModelResponse } from '../contatos/ContatoModelResponse';
import type { OrdemCompraNotaFiscalModelResponse } from '../notas-fiscais/OrdemCompraNotaFiscalModelResponse';
/**
 *
 */
export type ListarOrdemCompraModelResponse = {
  id?: number;
  numero?: string | null;
  data?: string;
  /**
   *
   * - 0 - Em Aberto
   * - 1 - Atendido
   * - 2 - Cancelado
   * - 3 - Em Andamento
   */
  situacao?: ListarOrdemCompraModelResponse.situacao | null;
  desconto?: string;
  frete?: number;
  totalProdutos?: number;
  totalPedidoCompra?: number;
  dataPrevista?: string;
  contato?: ContatoModelResponse;
  categoria?: CategoriaResponseModel;
  notaFiscal?: OrdemCompraNotaFiscalModelResponse;
  /**
   *
   * - R - Remetente
   * - D - Destinatario
   * - T - Terceiros
   * - 3 - Proprio Remetente
   * - 4 - Proprio Destinatario
   * - S - Sem Transporte
   */
  fretePorConta?: ListarOrdemCompraModelResponse.fretePorConta | null;
  observacoes?: string;
  observacoesInternas?: string | null;
};
export namespace ListarOrdemCompraModelResponse {
  /**
   *
   * - 0 - Em Aberto
   * - 1 - Atendido
   * - 2 - Cancelado
   * - 3 - Em Andamento
   */
  export enum situacao {
    '_0' = 0,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }
  /**
   *
   * - R - Remetente
   * - D - Destinatario
   * - T - Terceiros
   * - 3 - Proprio Remetente
   * - 4 - Proprio Destinatario
   * - S - Sem Transporte
   */
  export enum fretePorConta {
    R = 'R',
    D = 'D',
    T = 'T',
    _3 = '3',
    _4 = '4',
    S = 'S',
  }
}
