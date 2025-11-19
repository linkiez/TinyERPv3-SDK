/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaReceitaDespesaResponseModel } from '../categorias/CategoriaReceitaDespesaResponseModel';
import type { ContatoModelResponse } from '../contatos/ContatoModelResponse';
import type { FormaPagamentoResponseModel } from '../formas-pagamento/FormaPagamentoResponseModel';
/**
 *
 */
export type ObterOrdemServicoModelResponse = {
  id?: number;
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
  situacao?: ObterOrdemServicoModelResponse.situacao | null;
  data?: string;
  dataPrevista?: string;
  totalServicos?: string;
  totalOrdemServico?: string;
  totalPecas?: string;
  numeroOrdemServico?: string;
  equipamento?: string;
  equipamentoSerie?: string;
  descricaoProblema?: string;
  observacoes?: string;
  orcar?: boolean;
  orcado?: boolean;
  observacoesServico?: string;
  observacoesInternas?: string;
  alqComissao?: number;
  vlrComissao?: number;
  idForma?: number;
  idContaContabil?: number;
  desconto?: string;
  idListaPreco?: number;
  idLocalPrestacao?: string | null;
  idDeposito?: number;
  dataConclusao?: string;
  vendedor?: ContatoModelResponse;
  contato?: ContatoModelResponse;
  tecnico?: string;
  categoria?: CategoriaReceitaDespesaResponseModel;
  formaPagamento?: FormaPagamentoResponseModel;
};
export namespace ObterOrdemServicoModelResponse {
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
