/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnderecoEntregaModelResponse } from '../pedidos/EnderecoEntregaModelResponse';
import type { NotaFiscalClienteModel } from './NotaFiscalClienteModel';
import type { VendedorResponseModel } from '../vendedores/VendedorResponseModel';
/**
 *
 */
export type BaseNotaFiscalModel = {
  /**
   *
   * - 1 - Pendente
   * - 2 - Emitida
   * - 3 - Cancelada
   * - 4 - Enviada Aguardando Recibo
   * - 5 - Rejeitada
   * - 6 - Autorizada
   * - 7 - Emitida Danfe
   * - 8 - Registrada
   * - 9 - Enviada Aguardando Protocolo
   * - 10 - Denegada
   */
  situacao?: BaseNotaFiscalModel.situacao | null;
  /**
   *
   * - E - Entrada
   * - S - Saida
   */
  tipo?: BaseNotaFiscalModel.tipo | null;
  numero?: string | null;
  serie?: string | null;
  chaveAcesso?: string | null;
  dataEmissao?: string | null;
  cliente?: NotaFiscalClienteModel;
  enderecoEntrega?: EnderecoEntregaModelResponse;
  valor?: number | null;
  valorProdutos?: number | null;
  valorFrete?: number | null;
  vendedor?: VendedorResponseModel;
  idFormaEnvio?: number | null;
  idFormaFrete?: number | null;
  codigoRastreamento?: string | null;
  urlRastreamento?: string | null;
  fretePorConta?: string | null;
  qtdVolumes?: number | null;
  pesoBruto?: number | null;
  pesoLiquido?: number | null;
};
export namespace BaseNotaFiscalModel {
  /**
   *
   * - 1 - Pendente
   * - 2 - Emitida
   * - 3 - Cancelada
   * - 4 - Enviada Aguardando Recibo
   * - 5 - Rejeitada
   * - 6 - Autorizada
   * - 7 - Emitida Danfe
   * - 8 - Registrada
   * - 9 - Enviada Aguardando Protocolo
   * - 10 - Denegada
   */
  export enum situacao {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
    '_8' = 8,
    '_9' = 9,
    '_10' = 10,
  }
  /**
   *
   * - E - Entrada
   * - S - Saida
   */
  export enum tipo {
    E = 'E',
    S = 'S',
  }
}
