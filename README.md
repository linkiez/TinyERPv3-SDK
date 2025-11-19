# TinyERP V3 SDK - Guia de Utilização

SDK TypeScript para integração com a API V3 do TinyERP.

## 📋 Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso Básico](#uso-básico)
- [Estrutura do SDK](#estrutura-do-sdk)
- [Exemplos de Uso](#exemplos-de-uso)
  - [Produtos](#produtos)
  - [Pedidos](#pedidos)
  - [Notas Fiscais](#notas-fiscais)
  - [Contatos](#contatos)
  - [Estoque](#estoque)
  - [Ordens de Compra](#ordens-de-compra)
  - [Ordens de Serviço](#ordens-de-serviço)
- [Tratamento de Erros](#tratamento-de-erros)
- [Tipos e Interfaces](#tipos-e-interfaces)
- [Estrutura de Pastas](#estrutura-de-pastas)

## 🚀 Instalação

O SDK está localizado em `src/services/tinyerp-v3` e pode ser importado diretamente no seu projeto.

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';
// ou
import { ProdutosService, ContatosService } from '@integrations/tinyerp-v3';
```

## ⚙️ Configuração

### Pré-requisitos da API V3

Para utilizar a API V3 do TinyERP, é necessário:

- **Plano**: Básico, Crescer, Evoluir, Essencial, Potencializar, Grande, Construa, Impulsione, Domine ou Protagonize
- **Permissões**: Usuário administrador da conta
- **Extensão**: Gestão de Aplicativos instalada na conta

### Obtendo o Token de Acesso

1. Acesse **Menu > Configurações > Aba Geral > Aplicativos**
2. Clique em **+ novo aplicativo**
3. Preencha o **Nome do aplicativo** (ex: "Integração JCM")
4. Configure as **URLs de Redirecionamento** (se necessário)
5. Após salvar, edite o aplicativo e copie as chaves:
   - **Client ID**
   - **Client Secret**

⚠️ **Atenção**: As chaves são sensíveis e dão acesso total aos dados da conta. Mantenha-as seguras.

### Definindo Permissões

Configure as permissões por módulo:

- **Leitura**: Visualizar e obter informações
- **Incluir e editar**: Inserir e modificar dados
- **Excluir**: Remover informações existentes

### Limites de Requisições

A API V3 possui limites por minuto que variam conforme o plano:

| Plano                  | Requisições/minuto | Escrita/minuto |
| ---------------------- | ------------------ | -------------- |
| Básico e Crescer       | 60                 | 30             |
| Essencial e Evoluir    | 120                | 60             |
| Grande e Potencializar | 240                | 100            |

⚠️ **Importante**: O limite é por conta, não por aplicativo. Múltiplos aplicativos compartilham o mesmo limite.

### Inicialização com a Classe TinyERP

A maneira mais simples de usar o SDK é através da classe `TinyERP`:

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';

const tiny = new TinyERP({
  TOKEN: 'seu_client_secret_aqui',
  BASE: 'https://api.tiny.com.br/api/v3', // Opcional, já é o padrão
});

// Agora você tem acesso a todos os serviços
const produtos = await tiny.produtos.obterProduto({ id: 123 });
```

### Uso Direto dos Serviços

Você também pode importar e usar os serviços diretamente:

```typescript
import { ProdutosService, OpenAPI } from '@integrations/tinyerp-v3';

// Configure o token globalmente
OpenAPI.TOKEN = 'seu_token_aqui';
OpenAPI.BASE = 'https://api.tiny.com.br/api/v3';

// Use os serviços diretamente
const produtos = await ProdutosService.obterProduto({ id: 123 });
```

## 📚 Uso Básico

### Exemplo Completo

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';
import type { CriarProdutoRequestModel, ObterProdutoModelResponse } from '@integrations/tinyerp-v3';

// Inicializa o SDK
const tiny = new TinyERP({ TOKEN: process.env.TINY_ERP_TOKEN! });

async function exemplo() {
  try {
    // Criar um produto
    const novoProduto: CriarProdutoRequestModel = {
      nome: 'Produto Exemplo',
      preco: 100.0,
      tipo: 'P',
      situacao: 'A',
    };

    const resultado = await tiny.produtos.criarProduto({
      requestBody: novoProduto,
    });

    console.log('Produto criado:', resultado.id);

    // Buscar o produto
    const produto = await tiny.produtos.obterProduto({
      id: resultado.id!,
    });

    console.log('Produto:', produto.nome);

    // Listar produtos com paginação
    const listaProdutos = await tiny.produtos.listarProdutos({
      limit: 10,
      offset: 0,
      orderBy: 'nome',
    });

    console.log(`Total de produtos: ${listaProdutos.total}`);
  } catch (error) {
    console.error('Erro:', error);
  }
}
```

## 🏗️ Estrutura do SDK

### Módulos Disponíveis

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

### Recursos por Módulo

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

## 💡 Exemplos de Uso

### Produtos

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';
import type {
  CriarProdutoRequestModel,
  AtualizarProdutoRequestModel,
} from '@integrations/tinyerp-v3';

const tiny = new TinyERP({ TOKEN: 'token' });

// Criar produto
const novoProduto: CriarProdutoRequestModel = {
  nome: 'Notebook Dell',
  preco: 2500.0,
  tipo: 'P', // P = Produto
  situacao: 'A', // A = Ativo
  codigo: 'NB-001',
  unidade: 'UN',
  gtin: '7891234567890',
  descricaoCurta: 'Notebook para uso profissional',
  descricaoComplementar: 'Intel i5, 8GB RAM, 256GB SSD',
  estoque: {
    saldo: 10,
    deposito: { id: 1 },
  },
  categorias: [{ id: 1 }],
  marca: {
    id: 5,
  },
};

const resultado = await tiny.produtos.criarProduto({
  requestBody: novoProduto,
});

// Obter produto por ID
const produto = await tiny.produtos.obterProduto({
  id: resultado.id!,
});

// Atualizar produto
const atualizacao: AtualizarProdutoRequestModel = {
  preco: 2300.0,
  situacao: 'A',
};

await tiny.produtos.atualizarProduto({
  id: produto.id!,
  requestBody: atualizacao,
});

// Listar produtos com filtros
const produtos = await tiny.produtos.listarProdutos({
  pesquisa: 'notebook',
  limit: 20,
  offset: 0,
  orderBy: 'nome',
  situacao: 'A',
});

// Atualizar estoque
await tiny.produtos.atualizarEstoqueProduto({
  id: produto.id!,
  requestBody: {
    deposito: { id: 1 },
    operacao: 'E', // E = Entrada, S = Saída
    quantidade: 5,
  },
});
```

### Pedidos

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';
import type { CriarPedidoModelRequest } from '@integrations/tinyerp-v3';

const tiny = new TinyERP({ TOKEN: 'token' });

// Criar pedido
const novoPedido: CriarPedidoModelRequest = {
  cliente: {
    codigo: 'CLI-001',
    nome: 'João Silva',
    cpfCnpj: '123.456.789-00',
    email: 'joao@email.com',
    telefone: '11999999999',
  },
  itens: [
    {
      produto: { id: 123 },
      quantidade: 2,
      valorUnitario: 2500.0,
    },
    {
      produto: { id: 124 },
      quantidade: 1,
      valorUnitario: 150.0,
    },
  ],
  formasPagamento: [
    {
      formaPagamento: { id: 1 },
      valor: 5150.0,
    },
  ],
  enderecoEntrega: {
    endereco: 'Rua Exemplo, 123',
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP',
    cep: '01234-567',
  },
  observacoes: 'Entregar no período da manhã',
};

const pedido = await tiny.pedidos.criarPedido({
  requestBody: novoPedido,
});

// Obter pedido
const pedidoCompleto = await tiny.pedidos.obterPedido({
  id: pedido.id!,
});

// Atualizar situação do pedido
await tiny.pedidos.atualizarSituacaoPedido({
  id: pedido.id!,
  requestBody: {
    situacao: 'faturado',
  },
});

// Listar pedidos
const pedidos = await tiny.pedidos.listarPedidos({
  dataInicial: '2024-01-01',
  dataFinal: '2024-12-31',
  situacao: 'aprovado',
  limit: 50,
});
```

### Notas Fiscais

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';

const tiny = new TinyERP({ TOKEN: 'token' });

// Gerar nota fiscal a partir de um pedido
const nf = await tiny.notas.gerarNotaFiscalPedido({
  idVenda: 12345,
});

// Autorizar nota fiscal
const autorizacao = await tiny.notas.autorizarNotaFiscal({
  id: nf.id!,
  requestBody: {
    enviarEmail: true,
  },
});

// Obter nota fiscal
const notaFiscal = await tiny.notas.obterNotaFiscal({
  id: nf.id!,
});

// Obter XML da nota
const xml = await tiny.notas.obterXmlNotaFiscal({
  id: nf.id!,
});

// Listar notas fiscais
const notas = await tiny.notas.listarNotasFiscais({
  dataInicial: '2024-01-01',
  dataFinal: '2024-12-31',
  situacao: 'autorizada',
  tipo: 'S', // S = Saída, E = Entrada
});
```

### Contatos

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';
import type { CriarContatoModelRequest } from '@integrations/tinyerp-v3';

const tiny = new TinyERP({ TOKEN: 'token' });

// Criar contato
const novoContato: CriarContatoModelRequest = {
  codigo: 'CLI-001',
  nome: 'Empresa Exemplo LTDA',
  tipoContato: 'J', // F = Física, J = Jurídica
  cpfCnpj: '12.345.678/0001-90',
  situacao: 'A',
  email: 'contato@empresa.com.br',
  telefone: '1133334444',
  celular: '11999998888',
  endereco: 'Av. Paulista, 1000',
  bairro: 'Bela Vista',
  cidade: 'São Paulo',
  uf: 'SP',
  cep: '01310-100',
  tiposPessoa: ['C', 'F'], // C = Cliente, F = Fornecedor
};

const contato = await tiny.contatos.criarContato({
  requestBody: novoContato,
});

// Obter contato
const contatoCompleto = await tiny.contatos.obterContato({
  id: contato.id!,
});

// Atualizar contato
await tiny.contatos.atualizarContato({
  id: contato.id!,
  requestBody: {
    email: 'novo@email.com.br',
    telefone: '1144445555',
  },
});

// Listar contatos
const contatos = await tiny.contatos.listarContatos({
  pesquisa: 'empresa',
  tipoContato: 'J',
  situacao: 'A',
  limit: 100,
});
```

### Estoque

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';

const tiny = new TinyERP({ TOKEN: 'token' });

// Obter estoque de um produto
const estoque = await tiny.estoque.obterEstoqueProduto({
  idProduto: 123,
});

console.log('Saldo total:', estoque.saldoTotal);
console.log('Disponível:', estoque.saldoDisponivel);

// Listar depósitos
const depositos = await tiny.estoque.listarDepositos();

// Movimentar estoque
await tiny.produtos.atualizarEstoqueProduto({
  id: 123,
  requestBody: {
    deposito: { id: 1 },
    operacao: 'E', // Entrada
    quantidade: 10,
    custo: 100.0,
    observacoes: 'Compra de estoque',
  },
});
```

### Ordens de Compra

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';
import type { CriarOrdemCompraModelRequest } from '@integrations/tinyerp-v3';

const tiny = new TinyERP({ TOKEN: 'token' });

// Criar ordem de compra
const novaOC: CriarOrdemCompraModelRequest = {
  numeroOrdemCompra: 'OC-2024-001',
  fornecedor: {
    codigo: 'FORN-001',
    nome: 'Fornecedor Exemplo',
  },
  dataEmissao: '2024-01-15',
  itens: [
    {
      produto: { id: 123 },
      quantidade: 50,
      valorUnitario: 80.0,
    },
  ],
  formasPagamento: [
    {
      formaPagamento: { id: 1 },
      valor: 4000.0,
    },
  ],
};

const oc = await tiny.ordemDeCompra.criarOrdemCompra({
  requestBody: novaOC,
});

// Atualizar situação
await tiny.ordemDeCompra.atualizarSituacaoOrdemCompra({
  id: oc.id!,
  requestBody: {
    situacao: 'aprovada',
  },
});

// Lançar no estoque
await tiny.ordemDeCompra.lancarEstoqueOrdemCompra({
  id: oc.id!,
  requestBody: {
    deposito: { id: 1 },
  },
});
```

### Ordens de Serviço

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';
import type { CriarOrdemServicoRequestModel } from '@integrations/tinyerp-v3';

const tiny = new TinyERP({ TOKEN: 'token' });

// Criar ordem de serviço
const novaOS: CriarOrdemServicoRequestModel = {
  numero: 'OS-001',
  cliente: {
    id: 456,
    nome: 'Cliente Exemplo',
  },
  dataEmissao: '2024-01-15',
  servicos: [
    {
      descricao: 'Manutenção preventiva',
      quantidade: 1,
      valorUnitario: 200.0,
    },
  ],
  pecas: [
    {
      produto: { id: 789 },
      quantidade: 2,
      valorUnitario: 50.0,
    },
  ],
  observacoes: 'Realizar limpeza completa',
};

const os = await tiny.ordemDeServico.criarOrdemServico({
  requestBody: novaOS,
});

// Atualizar situação
await tiny.ordemDeServico.atualizarSituacaoOrdemServico({
  id: os.id!,
  requestBody: {
    situacao: 'em_andamento',
  },
});
```

## ⚠️ Tratamento de Erros

O SDK lança exceções do tipo `ApiError` quando ocorrem erros:

```typescript
import { TinyERP, ApiError } from '@integrations/tinyerp-v3';

const tiny = new TinyERP({ TOKEN: 'token' });

try {
  const produto = await tiny.produtos.obterProduto({ id: 999999 });
} catch (error) {
  if (error instanceof ApiError) {
    console.error('Erro da API:', {
      status: error.status,
      message: error.message,
      body: error.body,
    });

    // Tratamento específico por código de erro
    switch (error.status) {
      case 404:
        console.log('Produto não encontrado');
        break;
      case 401:
        console.log('Token inválido ou expirado');
        break;
      case 403:
        console.log('Permissão insuficiente - verifique as permissões do aplicativo');
        break;
      case 429:
        console.log('Limite de requisições excedido - aguarde antes de tentar novamente');
        break;
      default:
        console.log('Erro desconhecido');
    }
  } else {
    console.error('Erro inesperado:', error);
  }
}
```

### Implementando Rate Limiting

Para evitar exceder os limites de requisições, implemente controle de taxa:

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';

class TinyERPWithRateLimit {
  private tiny: TinyERP;
  private requestCount = 0;
  private readonly maxRequests: number;
  private readonly timeWindow = 60000; // 1 minuto
  private lastReset = Date.now();

  constructor(token: string, plano: 'basico' | 'essencial' | 'grande') {
    this.tiny = new TinyERP({ TOKEN: token });

    // Define limite conforme o plano
    this.maxRequests = {
      basico: 60,
      essencial: 120,
      grande: 240,
    }[plano];
  }

  private async checkRateLimit() {
    const now = Date.now();

    // Reset contador a cada minuto
    if (now - this.lastReset >= this.timeWindow) {
      this.requestCount = 0;
      this.lastReset = now;
    }

    // Aguarda se excedeu o limite
    if (this.requestCount >= this.maxRequests) {
      const waitTime = this.timeWindow - (now - this.lastReset);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
      this.requestCount = 0;
      this.lastReset = Date.now();
    }

    this.requestCount++;
  }

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    await this.checkRateLimit();
    return operation();
  }

  get api() {
    return this.tiny;
  }
}

// Uso
const tinyWithLimit = new TinyERPWithRateLimit('token', 'essencial');

const produto = await tinyWithLimit.execute(() =>
  tinyWithLimit.api.produtos.obterProduto({ id: 123 }),
);
```

## 📦 Tipos e Interfaces

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

## 📁 Estrutura de Pastas

Os models estão organizados por entidade para facilitar a navegação:

```
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

## 🔧 Boas Práticas

### Gerenciamento de Aplicativos

- **Limite de Aplicativos**: Cada conta pode ter no máximo 5 aplicativos configurados
- **Aplicativos Separados**: Crie aplicativos diferentes para integrações diferentes
- **Renovação de Chaves**: Sempre gere novas chaves após alterar permissões
- **Segurança**: Nunca compartilhe as chaves Client Secret publicamente

### Otimização de Requisições

1. **Cache Local**: Armazene dados que mudam pouco (categorias, formas de pagamento)
2. **Batch Operations**: Agrupe múltiplas operações quando possível
3. **Paginação**: Use `limit` e `offset` para listar grandes volumes de dados
4. **Filtros**: Utilize filtros para reduzir o volume de dados retornados

### Tratamento de Erros em Produção

```typescript
import { TinyERP, ApiError } from '@integrations/tinyerp-v3';

async function createProductSafely(produto: CriarProdutoRequestModel) {
  const tiny = new TinyERP({ TOKEN: process.env.TINY_TOKEN! });
  let tentativas = 0;
  const maxTentativas = 3;

  while (tentativas < maxTentativas) {
    try {
      return await tiny.produtos.criarProduto({ requestBody: produto });
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.status === 429) {
          // Rate limit - aguarda e tenta novamente
          const waitTime = Math.pow(2, tentativas) * 1000; // Backoff exponencial
          await new Promise((resolve) => setTimeout(resolve, waitTime));
          tentativas++;
          continue;
        }

        if (error.status === 403) {
          // Erro de permissão - não tenta novamente
          throw new Error('Permissão insuficiente para criar produto');
        }
      }

      throw error; // Outros erros
    }
  }

  throw new Error('Número máximo de tentativas excedido');
}
```

## 🔗 Links Úteis

- [Documentação Oficial TinyERP V3](https://docs.tiny.com.br/docs/api-v3)
- [Configuração de Aplicativos](https://ajuda.olist.com/kb/articles/erp/integracoes/gestao-de-integracoes/aplicativos-api-v3-configuracoes-e-utilizacao)
- [Swagger da API](./swagger.json)

## ❓ FAQ

### Como renovar as chaves de acesso?

1. Acesse **Menu > Configurações > Aba Geral > Aplicativos**
2. Clique em **detalhes** no aplicativo
3. Na seção **Chaves de acesso**, clique em **gerar novas chaves**
4. Copie a nova chave e atualize em sua aplicação
5. Clique em **salvar**

### O que fazer ao excluir um aplicativo?

⚠️ **Atenção**: Um aplicativo excluído não pode ser recuperado e todos os vínculos serão perdidos. Certifique-se de atualizar suas integrações antes de excluir.

### Como alterar permissões de um aplicativo?

1. Edite o aplicativo
2. Ajuste as permissões na seção **Permissões do aplicativo**
3. **Obrigatório**: Gere novas chaves na seção **Chaves de acesso**
4. Atualize as chaves em sua aplicação
5. Salve as alterações

Sem renovar as chaves, a integração pode falhar.

### API V2 vs API V3

- **API V3**: Requer configuração de aplicativo no módulo de Aplicativos
- **API V2**: Não requer o módulo de Aplicativos (legado)
- **Recomendação**: Use API V3 para novas integrações

---
