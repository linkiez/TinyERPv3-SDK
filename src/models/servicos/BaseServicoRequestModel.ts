/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 *
 */
export type BaseServicoRequestModel = {
  codigo?: string | null;
  preco?: number | null;
  unidade?: string | null;
  /**
   *
   * - A - Ativo
   * - I - Inativo
   * - E - Excluido
   */
  situacao?: BaseServicoRequestModel.situacao | null;
  /**
   *
   * - 00 - Mercadoria Para Revenda
   * - 01 - Materia Prima
   * - 02 - Embalagem
   * - 03 - Produto Em Processo
   * - 04 - Produto Acabado
   * - 05 - Subproduto
   * - 06 - Produto Intermediario
   * - 07 - Material Uso Consumo
   * - 08 - Ativo Imobilizado
   * - 09 - Servicos
   * - 10 - Outros Insumos
   * - 99 - Outras
   */
  tipoItemSped?: BaseServicoRequestModel.tipoItemSped | null;
  codigoListaServicos?: string | null;
  nbs?: string | null;
  descricaoComplementar?: string | null;
  observacoes?: string | null;
};
export namespace BaseServicoRequestModel {
  /**
   *
   * - A - Ativo
   * - I - Inativo
   * - E - Excluido
   */
  export enum situacao {
    A = 'A',
    I = 'I',
    E = 'E',
  }
  /**
   *
   * - 00 - Mercadoria Para Revenda
   * - 01 - Materia Prima
   * - 02 - Embalagem
   * - 03 - Produto Em Processo
   * - 04 - Produto Acabado
   * - 05 - Subproduto
   * - 06 - Produto Intermediario
   * - 07 - Material Uso Consumo
   * - 08 - Ativo Imobilizado
   * - 09 - Servicos
   * - 10 - Outros Insumos
   * - 99 - Outras
   */
  export enum tipoItemSped {
    _00 = '00',
    _01 = '01',
    _02 = '02',
    _03 = '03',
    _04 = '04',
    _05 = '05',
    _06 = '06',
    _07 = '07',
    _08 = '08',
    _09 = '09',
    _10 = '10',
    _99 = '99',
  }
}
