export * from './auth';
export * from './core';
export * from './models';
export * from './services';

import { OpenAPI } from './core/OpenAPI';
import { RateLimiter } from './core/RateLimiter';
import { TinyOAuth, type TinyOAuthConfig, type TinyTokenSet } from './auth/TinyOAuth';
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
 * Options for initializing TinyERPv3.
 * Accepts either a plain access token or a full OAuth configuration.
 */
export type TinyERPConfig =
  | {
      /** Plain Bearer token (static or callback). */
      TOKEN: string | (() => Promise<string>);
      oauth?: never;
      /** Initial token set when using OAuth. Use with `oauth` field. */
      tokenSet?: never;
      /** Rate limit ceiling (req/min). Defaults to 120. Pass 0 to disable. */
      rateLimit?: number;
      /** Callback invoked whenever the token set is refreshed via OAuth. */
      onTokenRefresh?: never;
    }
  | {
      TOKEN?: never;
      /** OAuth application credentials. */
      oauth: TinyOAuthConfig;
      /** Initial token set obtained after the OAuth code exchange. */
      tokenSet: TinyTokenSet;
      /** Rate limit ceiling (req/min). Defaults to 120. Pass 0 to disable. */
      rateLimit?: number;
      /** Callback invoked whenever the token set is refreshed. */
      onTokenRefresh?: (updated: TinyTokenSet) => void;
    };

/**
 * @class TinyERPv3
 * @description Master class to initialize and access all TinyERP V3 API services.
 * Supports plain token, OAuth 2.0 auto-refresh, and built-in rate limiting.
 *
 * @example — plain token
 * ```typescript
 * const tiny = new TinyERPv3({ TOKEN: process.env.TINY_TOKEN! });
 * ```
 *
 * @example — OAuth with auto-refresh
 * ```typescript
 * const oauth = new TinyOAuth({ clientId: '...', clientSecret: '...', redirectUri: '...' });
 * const tokenSet = await oauth.exchangeCode(codeFromCallback);
 * const tiny = new TinyERPv3({
 *   oauth,
 *   tokenSet,
 *   onTokenRefresh: (ts) => saveTokenSet(ts),
 *   rateLimit: 120,
 * });
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
   * @param config - Token config, OAuth config, or rate limit options.
   */
  constructor(config: TinyERPConfig) {
    OpenAPI.BASE = 'https://api.tiny.com.br/api/v3';

    // Rate limiter setup — disabled when rateLimit === 0.
    if (config.rateLimit !== 0) {
      OpenAPI.RATE_LIMITER = new RateLimiter(config.rateLimit ?? 120);
    }

    // Token resolver — plain token or OAuth auto-refresh.
    if (config.oauth && config.tokenSet) {
      const oauthClient = new TinyOAuth(config.oauth);
      OpenAPI.TOKEN = oauthClient.createTokenResolver(
        config.tokenSet,
        config.onTokenRefresh,
      ) as () => Promise<string>;
    } else if (config.TOKEN) {
      OpenAPI.TOKEN = config.TOKEN;
    }

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
