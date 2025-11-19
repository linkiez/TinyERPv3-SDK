/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseContatoModel } from './BaseContatoModel';
import type { EnderecoModel } from './EnderecoModel';
/**
 *
 */
export type ContatoModel = BaseContatoModel & {
  enderecoCobranca?: EnderecoModel;
  inscricaoMunicipal?: string | null;
  telefoneAdicional?: string | null;
  emailNfe?: string | null;
  site?: string | null;
  /**
   *
   * - 1 - Simples Nacional
   * - 2 - Simples Nacional Excesso Receita
   * - 3 - Regime Normal
   * - 4 - Mei
   */
  regimeTributario?: ContatoModel.regimeTributario | null;
  /**
   *
   * - 1 - Casado
   * - 2 - Solteiro
   * - 3 - Viuvo
   * - 4 - Separado
   * - 5 - Desquitado
   */
  estadoCivil?: ContatoModel.estadoCivil | null;
  profissao?: string | null;
  /**
   *
   * - masculino - Masculino
   * - feminino - Feminino
   */
  sexo?: ContatoModel.sexo | null;
  dataNascimento?: string | null;
  naturalidade?: string | null;
  nomePai?: string | null;
  nomeMae?: string | null;
  cpfPai?: string | null;
  cpfMae?: string | null;
  limiteCredito?: number | null;
  /**
   *
   * - B - Ativo
   * - A - Ativo Com Acesso Sistema
   * - I - Inativo
   * - E - Excluido
   */
  situacao?: ContatoModel.situacao | null;
  observacoes?: string | null;
};
export namespace ContatoModel {
  /**
   *
   * - 1 - Simples Nacional
   * - 2 - Simples Nacional Excesso Receita
   * - 3 - Regime Normal
   * - 4 - Mei
   */
  export enum regimeTributario {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
  }
  /**
   *
   * - 1 - Casado
   * - 2 - Solteiro
   * - 3 - Viuvo
   * - 4 - Separado
   * - 5 - Desquitado
   */
  export enum estadoCivil {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
  }
  /**
   *
   * - masculino - Masculino
   * - feminino - Feminino
   */
  export enum sexo {
    MASCULINO = 'masculino',
    FEMININO = 'feminino',
  }
  /**
   *
   * - B - Ativo
   * - A - Ativo Com Acesso Sistema
   * - I - Inativo
   * - E - Excluido
   */
  export enum situacao {
    B = 'B',
    A = 'A',
    I = 'I',
    E = 'E',
  }
}
