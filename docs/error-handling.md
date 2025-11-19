# Tratamento de Erros

## Lidando com Erros da API

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

## Códigos de Erro Comuns

| Código | Descrição                           | Ação Recomendada                   |
| ------ | ----------------------------------- | ---------------------------------- |
| 400    | Bad Request - Dados inválidos       | Verifique os dados enviados        |
| 401    | Unauthorized - Token inválido       | Gere um novo token                 |
| 403    | Forbidden - Sem permissão           | Ajuste as permissões do aplicativo |
| 404    | Not Found - Recurso não encontrado  | Verifique o ID do recurso          |
| 429    | Too Many Requests - Limite excedido | Implemente rate limiting           |
| 500    | Internal Server Error               | Tente novamente mais tarde         |

## Implementando Rate Limiting

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

## Retry com Backoff Exponencial

Implemente retry automático para erros temporários:

```typescript
import { TinyERP, ApiError } from '@integrations/tinyerp-v3';
import type { CriarProdutoRequestModel } from '@integrations/tinyerp-v3';

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

## Logging de Erros

Implemente logging estruturado para rastreamento:

```typescript
import { TinyERP, ApiError } from '@integrations/tinyerp-v3';

class TinyERPWithLogging {
  private tiny: TinyERP;
  private logger: (message: string, data: any) => void;

  constructor(token: string, logger?: (message: string, data: any) => void) {
    this.tiny = new TinyERP({ TOKEN: token });
    this.logger = logger || console.log;
  }

  async executeWithLogging<T>(operation: () => Promise<T>, operationName: string): Promise<T> {
    const startTime = Date.now();

    try {
      this.logger(`[${operationName}] Iniciando operação`, {});
      const result = await operation();
      const duration = Date.now() - startTime;

      this.logger(`[${operationName}] Sucesso`, { duration });
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;

      if (error instanceof ApiError) {
        this.logger(`[${operationName}] Erro da API`, {
          duration,
          status: error.status,
          message: error.message,
          body: error.body,
        });
      } else {
        this.logger(`[${operationName}] Erro inesperado`, {
          duration,
          error: error instanceof Error ? error.message : String(error),
        });
      }

      throw error;
    }
  }

  get api() {
    return this.tiny;
  }
}

// Uso
const tiny = new TinyERPWithLogging('token', (message, data) => {
  console.log(JSON.stringify({ timestamp: new Date().toISOString(), message, ...data }));
});

await tiny.executeWithLogging(() => tiny.api.produtos.obterProduto({ id: 123 }), 'obterProduto');
```

## Próximos Passos

- [Boas Práticas](./best-practices.md) - Otimize seu uso do SDK
- [Exemplos de Uso](./examples.md) - Veja exemplos práticos
- [FAQ](./faq.md) - Perguntas frequentes
