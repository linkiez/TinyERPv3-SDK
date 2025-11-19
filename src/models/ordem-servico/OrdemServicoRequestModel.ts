/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnexoOrdemServicoRequestModel } from './AnexoOrdemServicoRequestModel';
import type { CriarMarcadorRequestModel } from '../marcas/CriarMarcadorRequestModel';
import type { ItemOrdemServicoRequestModel } from './ItemOrdemServicoRequestModel';
import type { ListaPrecoRequestModel } from '../lista-precos/ListaPrecoRequestModel';
import type { OrdemServicoAssistenciaTecnicaRequestModel } from './OrdemServicoAssistenciaTecnicaRequestModel';
import type { OrdemServicoPagamentoRequestModel } from './OrdemServicoPagamentoRequestModel';
import type { VendedorOrdemServicoRequestModel } from './VendedorOrdemServicoRequestModel';
/**
 *
 */
export type OrdemServicoRequestModel = {
  listaPreco?: ListaPrecoRequestModel;
  descricao?: string | null;
  consideracaoFinal?: string | null;
  dataInicio?: string | null;
  dataPrevista?: string | null;
  dataConclusao?: string | null;
  valorDesconto?: number | null;
  observacao?: string | null;
  observacaoInterna?: string | null;
  servicos?: Array<ItemOrdemServicoRequestModel> | null;
  vendedor?: VendedorOrdemServicoRequestModel;
  tecnico?: string | null;
  marcadores?: Array<CriarMarcadorRequestModel> | null;
  anexos?: Array<AnexoOrdemServicoRequestModel> | null;
  pagamento?: OrdemServicoPagamentoRequestModel;
  assistenciaTecnica?: OrdemServicoAssistenciaTecnicaRequestModel;
};
