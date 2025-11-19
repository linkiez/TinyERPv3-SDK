# Estrutura do SDK

## Módulos Disponíveis

O SDK está organizado em módulos por entidade, correspondendo às APIs disponíveis no TinyERP:

```typescript
const tiny = new TinyERP({ TOKEN: 'token' });

tiny.categorias; // ✔ API de Categorias
tiny.categoriasDeReceitaEDespesa; // ✔ Categorias financeiras
tiny.contasAPagar; // ✔ API de Contas a Pagar
tiny.contasAReceber; // ✔ API de Contas a Receber
tiny.contatos; // ✔ API de Contatos (inclui Vendedores)
tiny.dadosDaEmpresa; // ✔ API de Informações da Conta
tiny.estoque; // ✔ API de Estoque
tiny.expedicao; // ✔ API de Expedição
tiny.formasDePagamento; // ✔ API de Formas de Pagamento
tiny.intermediadores; // ✔ API de Intermediadores
tiny.listaDePrecos; // ✔ API de Listas de Preço
tiny.logistica; // ✔ Logística e transportadoras
tiny.marcas; // ✔ API de Marcas
tiny.notas; // ✔ API de Notas Fiscais
tiny.ordemDeCompra; // Ordens de compra
tiny.ordemDeServico; // Ordens de serviço
tiny.pedidos; // ✔ API de Pedidos
tiny.produtos; // ✔ API de Produtos
tiny.separacao; // ✔ API de Separação
tiny.servicos; // Serviços
tiny.vendedores; // ✔ Vendedores (via API de Contatos)
```

## Recursos por Módulo

Cada módulo oferece operações específicas conforme as permissões configuradas:

| Módulo               | Leitura | Incluir/Editar | Excluir |
| -------------------- | ------- | -------------- | ------- |
| Contatos             | ✔      | ✔             | ✔      |
| Produtos             | ✔      | ✔             | ✔      |
| Notas Fiscais        | ✔      | ✔             | ✔      |
| Expedição            | ✔      | ✔             | ✔      |
| Pedidos              | ✔      | ✔             | ✔      |
| Separação            | ✔      | ✔             | -       |
| Marcas               | ✔      | ✔             | -       |
| Estoque              | ✔      | ✔             | -       |
| Listas de Preço      | ✔      | -              | -       |
| Formas de Envio      | ✔      | -              | -       |
| Formas de Pagamento  | ✔      | -              | -       |
| Intermediadores      | ✔      | -              | -       |
| Categorias           | ✔      | -              | -       |
| Informações da Conta | ✔      | -              | -       |
| Contas a Pagar       | ✔      | ✔             | -       |
| Contas a Receber     | ✔      | ✔             | -       |

## Tipos e Interfaces

O SDK é totalmente tipado com TypeScript. Importe os tipos conforme necessário:

```typescript
import type {
  // Produtos
  CriarProdutoRequestModel,
  AtualizarProdutoRequestModel,
  ObterProdutoModelResponse,
  ListagemProdutosResponseModel,

  // Pedidos
  CriarPedidoModelRequest,
  ObterPedidoModelResponse,
  AtualizarSituacaoPedidoModelRequest,

  // Notas Fiscais
  GerarNotaFiscalPedidoModelResponse,
  AutorizarNotaFiscalModelRequest,
  ObterNotaFiscalModelResponse,

  // Contatos
  CriarContatoModelRequest,
  ObterContatoModelResponse,
  ListagemContatoModelResponse,

  // Comum
  PaginatedResultModel,
  ErrorDTO,

  // Enums
  situacaoPedido,
  situacaoNota,
  situacaoContato,
} from '@integrations/tinyerp-v3';
```

## Organização de Pastas

Os models estão organizados por entidade para facilitar a navegação:

```text
tinyerp-v3/
├── core/              # Core do SDK (ApiError, CancelablePromise, OpenAPI)
├── services/          # Serviços da API
│   ├── ProdutosService.ts
│   ├── PedidosService.ts
│   ├── NotasService.ts
│   └── ...
├── models/            # Models organizados por entidade
│   ├── categorias/    # Categorias de produtos
│   ├── common/        # Tipos compartilhados e enums
│   ├── contas-pagar/  # Contas a pagar
│   ├── contas-receber/# Contas a receber
│   ├── contatos/      # Contatos e clientes
│   ├── estoque/       # Estoque e depósitos
│   ├── expedicao/     # Expedição e separação
│   ├── notas-fiscais/ # Notas fiscais
│   ├── pedidos/       # Pedidos de venda
│   ├── produtos/      # Produtos e variações
│   └── ...
├── TinyERP.ts         # Classe principal
└── index.ts           # Exports públicos
```

## Arquitetura do SDK

### Core Components

#### OpenAPI

Configuração global do SDK:

```typescript
import { OpenAPI } from '@integrations/tinyerp-v3';

OpenAPI.TOKEN = 'seu_token';
OpenAPI.BASE = 'https://api.tiny.com.br/api/v3';
OpenAPI.WITH_CREDENTIALS = false;
```

#### ApiError

Classe de erro personalizada:

```typescript
class ApiError extends Error {
  status: number;
  statusText: string;
  body: any;
  request: ApiRequestOptions;
}
```

#### CancelablePromise

Promise que pode ser cancelada:

```typescript
const promise = service.obterProduto({ id: 123 });
promise.cancel(); // Cancela a requisição
```

### Services

Cada serviço corresponde a um módulo da API e expõe métodos para interação:

```typescript
class ProdutosService {
  static listarProdutos(params): CancelablePromise<ListagemProdutosResponseModel>;
  static obterProduto(params): CancelablePromise<ObterProdutoModelResponse>;
  static criarProduto(params): CancelablePromise<CriarProdutoModelResponse>;
  static atualizarProduto(params): CancelablePromise<void>;
  static excluirProduto(params): CancelablePromise<void>;
  // ... outros métodos
}
```

### Classe TinyERP

A classe principal agrupa todos os serviços em uma interface unificada:

```typescript
class TinyERP {
  public readonly produtos: typeof ProdutosService;
  public readonly pedidos: typeof PedidosService;
  public readonly notas: typeof NotasService;
  public readonly contatos: typeof ContatosService;
  // ... outros serviços

  constructor(config: Partial<OpenAPIConfig>) {
    OpenAPI.TOKEN = config.TOKEN;
    if (config.BASE) OpenAPI.BASE = config.BASE;
    // Inicializa serviços
  }
}
```

## Models

### Request Models

Definem a estrutura dos dados enviados:

```typescript
interface CriarProdutoRequestModel {
  nome: string;
  preco: number;
  tipo: 'P' | 'S' | 'K';
  situacao: 'A' | 'I';
  codigo?: string;
  unidade?: string;
  // ... outros campos
}
```

### Response Models

Definem a estrutura dos dados recebidos:

```typescript
interface ObterProdutoModelResponse {
  id: number;
  nome: string;
  preco: number;
  tipo: 'P' | 'S' | 'K';
  situacao: 'A' | 'I';
  dataCriacao: string;
  dataAlteracao: string;
  // ... outros campos
}
```

### Common Models

Tipos compartilhados entre múltiplos endpoints:

```typescript
interface PaginatedResultModel<T> {
  data: T[];
  total: number;
  limit: number;
  offset: number;
}
```

## Próximos Passos

- [Exemplos de Uso](./examples.md) - Veja exemplos práticos
- [Tratamento de Erros](./error-handling.md) - Aprenda a lidar com erros
- [Boas Práticas](./best-practices.md) - Otimize seu uso do SDK
