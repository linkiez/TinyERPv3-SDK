export * from './core';
export * from './models';
export * from './services';

import type { OpenAPIConfig } from './core/OpenAPI';
import { OpenAPI } from './core/OpenAPI';
import { CategoriasDeReceitaEDespesaService } from './services/CategoriasDeReceitaEDespesaService';
import { CategoriasService } from './services/CategoriasService';
import { ContasAPagarService } from './services/ContasAPagarService';
import { ContasAReceberService } from './services/ContasAReceberService';
import { ContatosService } from './services/ContatosService';
import { DadosDaEmpresaService } from './services/DadosDaEmpresaService';
import { EstoqueService } from './services/EstoqueService';
import { ExpediOService } from './services/ExpediOService';
import { FormasDePagamentoService } from './services/FormasDePagamentoService';
import { IntermediadoresService } from './services/IntermediadoresService';
import { ListaDePreOsService } from './services/ListaDePreOsService';
import { LogisticaService } from './services/LogisticaService';
import { MarcasService } from './services/MarcasService';
import { NotasService } from './services/NotasService';
import { OrdemDeCompraService } from './services/OrdemDeCompraService';
import { OrdemDeServiOService } from './services/OrdemDeServiOService';
import { PedidosService } from './services/PedidosService';
import { ProdutosService } from './services/ProdutosService';
import { SeparaOService } from './services/SeparaOService';
import { ServiOsService } from './services/ServiOsService';
import { VendedoresService } from './services/VendedoresService';

/**
 * @class TinyERP
 * @description Master class to initialize and access all TinyERP V3 API services.
 * @example
 * ```typescript
 * const tiny = new TinyERP({ TOKEN: 'YOUR_API_TOKEN' });
 * const produtos = await tiny.produtos.obterProduto({ id: 123 });
 * ```
 */
export class TinyERPv3 {
  public categorias: typeof CategoriasService;
  public categoriasDeReceitaEDespesa: typeof CategoriasDeReceitaEDespesaService;
  public contasAPagar: typeof ContasAPagarService;
  public contasAReceber: typeof ContasAReceberService;
  public contatos: typeof ContatosService;
  public dadosDaEmpresa: typeof DadosDaEmpresaService;
  public estoque: typeof EstoqueService;
  public expedicao: typeof ExpediOService;
  public formasDePagamento: typeof FormasDePagamentoService;
  public intermediadores: typeof IntermediadoresService;
  public listaDePrecos: typeof ListaDePreOsService;
  public logistica: typeof LogisticaService;
  public marcas: typeof MarcasService;
  public notas: typeof NotasService;
  public ordemDeCompra: typeof OrdemDeCompraService;
  public ordemDeServico: typeof OrdemDeServiOService;
  public pedidos: typeof PedidosService;
  public produtos: typeof ProdutosService;
  public separacao: typeof SeparaOService;
  public servicos: typeof ServiOsService;
  public vendedores: typeof VendedoresService;

  /**
   * Initializes the TinyERP API services.
   * @param {OpenAPIConfig} config - The configuration for the API, usually the token.
   */
  constructor(config: OpenAPIConfig) {
    OpenAPI.TOKEN = config.TOKEN;
    OpenAPI.BASE = config.BASE || 'https://api.tiny.com.br/api/v3';

    this.categorias = CategoriasService;
    this.categoriasDeReceitaEDespesa = CategoriasDeReceitaEDespesaService;
    this.contasAPagar = ContasAPagarService;
    this.contasAReceber = ContasAReceberService;
    this.contatos = ContatosService;
    this.dadosDaEmpresa = DadosDaEmpresaService;
    this.estoque = EstoqueService;
    this.expedicao = ExpediOService;
    this.formasDePagamento = FormasDePagamentoService;
    this.intermediadores = IntermediadoresService;
    this.listaDePrecos = ListaDePreOsService;
    this.logistica = LogisticaService;
    this.marcas = MarcasService;
    this.notas = NotasService;
    this.ordemDeCompra = OrdemDeCompraService;
    this.ordemDeServico = OrdemDeServiOService;
    this.pedidos = PedidosService;
    this.produtos = ProdutosService;
    this.separacao = SeparaOService;
    this.servicos = ServiOsService;
    this.vendedores = VendedoresService;
  }
}
