# Boas Práticas

## Gerenciamento de Aplicativos

### Limite de Aplicativos

- Cada conta pode ter no máximo **5 aplicativos** configurados
- Crie aplicativos diferentes para integrações diferentes
- Organize por ambiente (desenvolvimento, homologação, produção)

### Segurança das Chaves

- **Nunca** compartilhe as chaves Client Secret publicamente
- Use variáveis de ambiente para armazenar credenciais
- Rotacione as chaves periodicamente
- Gere novas chaves após alterações de permissões

```typescript
// ✅ Correto - usando variáveis de ambiente
const tiny = new TinyERP({
  TOKEN: process.env.TINY_ERP_TOKEN!,
});

// ❌ Incorreto - hardcoded no código
const tiny = new TinyERP({
  TOKEN: 'abc123def456',
});
```

### Permissões Mínimas

Configure apenas as permissões necessárias para cada aplicativo:

```typescript
// Aplicativo apenas para leitura de produtos
// Permissões: Produtos (Leitura)

// Aplicativo para gestão de pedidos
// Permissões: Pedidos (Leitura, Incluir/Editar), Contatos (Leitura)
```

## Otimização de Requisições

### Cache Local

Armazene dados que mudam pouco frequentemente:

```typescript
class TinyERPCache {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private ttl = 3600000; // 1 hora
  private tiny: TinyERP;

  constructor(token: string) {
    this.tiny = new TinyERP({ TOKEN: token });
  }

  async getCategorias() {
    const key = 'categorias';
    const cached = this.cache.get(key);

    if (cached && Date.now() - cached.timestamp < this.ttl) {
      return cached.data;
    }

    const data = await this.tiny.categorias.listarCategorias({});
    this.cache.set(key, { data, timestamp: Date.now() });
    return data;
  }

  clearCache() {
    this.cache.clear();
  }
}
```

### Paginação Eficiente

Use `limit` e `offset` para processar grandes volumes:

```typescript
async function processarTodosProdutos() {
  const tiny = new TinyERP({ TOKEN: 'token' });
  const batchSize = 100;
  let offset = 0;
  let hasMore = true;

  while (hasMore) {
    const resultado = await tiny.produtos.listarProdutos({
      limit: batchSize,
      offset: offset,
    });

    // Processar batch
    for (const produto of resultado.data) {
      await processarProduto(produto);
    }

    offset += batchSize;
    hasMore = resultado.data.length === batchSize;
  }
}
```

### Filtros Específicos

Reduza o volume de dados retornados usando filtros:

```typescript
// ✅ Correto - busca específica
const produtos = await tiny.produtos.listarProdutos({
  pesquisa: 'notebook',
  situacao: 'A',
  limit: 20,
});

// ❌ Incorreto - retorna tudo e filtra localmente
const todosProdutos = await tiny.produtos.listarProdutos({ limit: 1000 });
const produtosAtivos = todosProdutos.data.filter((p) => p.situacao === 'A');
```

### Batch Operations

Agrupe operações quando possível:

```typescript
async function atualizarMultiplosProdutos(atualizacoes: Array<{ id: number; preco: number }>) {
  const tiny = new TinyERP({ TOKEN: 'token' });

  // Processar em lotes para respeitar rate limit
  const batchSize = 10;
  for (let i = 0; i < atualizacoes.length; i += batchSize) {
    const batch = atualizacoes.slice(i, i + batchSize);

    await Promise.all(
      batch.map((item) =>
        tiny.produtos.atualizarProduto({
          id: item.id,
          requestBody: { preco: item.preco, situacao: 'A' },
        }),
      ),
    );

    // Pequena pausa entre batches
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
```

## Gestão de Erros em Produção

### Circuit Breaker

Implemente circuit breaker para falhas contínuas:

```typescript
class CircuitBreaker {
  private failures = 0;
  private readonly threshold = 5;
  private readonly timeout = 60000;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private nextAttempt = 0;

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error('Circuit breaker is OPEN');
      }
      this.state = 'HALF_OPEN';
    }

    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess() {
    this.failures = 0;
    this.state = 'CLOSED';
  }

  private onFailure() {
    this.failures++;
    if (this.failures >= this.threshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.timeout;
    }
  }
}
```

### Monitoramento

Implemente métricas para monitoramento:

```typescript
interface Metrics {
  requests: number;
  errors: number;
  latency: number[];
}

class TinyERPWithMetrics {
  private metrics: Metrics = { requests: 0, errors: 0, latency: [] };
  private tiny: TinyERP;

  constructor(token: string) {
    this.tiny = new TinyERP({ TOKEN: token });
  }

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    const start = Date.now();
    this.metrics.requests++;

    try {
      const result = await operation();
      const duration = Date.now() - start;
      this.metrics.latency.push(duration);
      return result;
    } catch (error) {
      this.metrics.errors++;
      throw error;
    }
  }

  getMetrics() {
    const avgLatency =
      this.metrics.latency.reduce((a, b) => a + b, 0) / this.metrics.latency.length;
    return {
      ...this.metrics,
      avgLatency,
      errorRate: this.metrics.errors / this.metrics.requests,
    };
  }
}
```

## Testes

### Mocking do SDK

Use mocks para testes unitários:

```typescript
import { jest } from '@jest/globals';

// Mock do serviço
jest.mock('@integrations/tinyerp-v3', () => ({
  TinyERP: jest.fn().mockImplementation(() => ({
    produtos: {
      obterProduto: jest.fn().mockResolvedValue({
        id: 123,
        nome: 'Produto Teste',
        preco: 100,
      }),
    },
  })),
}));

// Teste
test('deve obter produto', async () => {
  const tiny = new TinyERP({ TOKEN: 'test' });
  const produto = await tiny.produtos.obterProduto({ id: 123 });
  expect(produto.nome).toBe('Produto Teste');
});
```

### Testes de Integração

Use ambiente de testes separado:

```typescript
describe('Integração TinyERP', () => {
  let tiny: TinyERP;

  beforeAll(() => {
    tiny = new TinyERP({
      TOKEN: process.env.TINY_TEST_TOKEN!,
      BASE: process.env.TINY_TEST_BASE,
    });
  });

  test('deve criar e buscar produto', async () => {
    const novoProduto = await tiny.produtos.criarProduto({
      requestBody: {
        nome: 'Produto Teste',
        preco: 100,
        tipo: 'P',
        situacao: 'A',
      },
    });

    const produto = await tiny.produtos.obterProduto({
      id: novoProduto.id!,
    });

    expect(produto.nome).toBe('Produto Teste');
  });
});
```

## Documentação do Código

### JSDoc

Documente funções complexas:

```typescript
/**
 * Sincroniza produtos entre sistemas
 * @param produtos - Lista de produtos a sincronizar
 * @param options - Opções de sincronização
 * @param options.atualizarEstoque - Se deve atualizar estoque
 * @param options.criarNovos - Se deve criar produtos novos
 * @returns Resultado da sincronização
 * @throws {ApiError} Se houver erro na API
 */
async function sincronizarProdutos(produtos: Produto[], options: SyncOptions): Promise<SyncResult> {
  // implementação
}
```

## Próximos Passos

- [FAQ](./faq.md) - Perguntas frequentes
- [Tratamento de Erros](./error-handling.md) - Aprenda a lidar com erros
- [Exemplos de Uso](./examples.md) - Veja exemplos práticos
