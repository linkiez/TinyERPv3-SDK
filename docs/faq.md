# FAQ - Perguntas Frequentes

## Configuração e Autenticação

### Como obter o token de acesso?

1. Acesse **Menu > Configurações > Aba Geral > Aplicativos**
2. Clique em **+ novo aplicativo**
3. Preencha o **Nome do aplicativo**
4. Configure as **URLs de Redirecionamento** (se necessário)
5. Após salvar, edite o aplicativo e copie o **Client Secret**

### Como renovar as chaves de acesso?

1. Acesse **Menu > Configurações > Aba Geral > Aplicativos**
2. Clique em **detalhes** no aplicativo
3. Na seção **Chaves de acesso**, clique em **gerar novas chaves**
4. Copie a nova chave e atualize em sua aplicação
5. Clique em **salvar**

⚠️ **Importante**: Atualize suas integrações antes de remover as chaves antigas.

### Como alterar permissões de um aplicativo?

1. Edite o aplicativo
2. Ajuste as permissões na seção **Permissões do aplicativo**
3. **Obrigatório**: Gere novas chaves na seção **Chaves de acesso**
4. Atualize as chaves em sua aplicação
5. Salve as alterações

⚠️ **Atenção**: Sem renovar as chaves, a integração pode falhar.

### O que fazer ao excluir um aplicativo?

⚠️ **Atenção**: Um aplicativo excluído não pode ser recuperado e todos os vínculos serão perdidos. Certifique-se de atualizar suas integrações antes de excluir.

### Quantos aplicativos posso criar?

Cada conta pode ter no máximo **5 aplicativos** configurados. Organize por ambiente ou tipo de integração.

## Limites e Performance

### Quais são os limites de requisições?

Os limites variam conforme o plano:

| Plano                  | Requisições/minuto | Escrita/minuto |
| ---------------------- | ------------------ | -------------- |
| Básico e Crescer       | 60                 | 30             |
| Essencial e Evoluir    | 120                | 60             |
| Grande e Potencializar | 240                | 100            |

⚠️ **Importante**: O limite é por conta, não por aplicativo.

### Como evitar exceder o limite de requisições?

Implemente rate limiting no seu código:

```typescript
// Veja o exemplo completo em docs/error-handling.md
class TinyERPWithRateLimit {
  // ... implementação
}
```

### O que fazer quando recebo erro 429?

Erro 429 indica que você excedeu o limite de requisições. Aguarde alguns segundos e tente novamente. Implemente retry com backoff exponencial.

## API V2 vs V3

### Qual a diferença entre API V2 e V3?

- **API V3**: Requer configuração de aplicativo no módulo de Aplicativos
- **API V2**: Não requer o módulo de Aplicativos (legado)
- **Recomendação**: Use API V3 para novas integrações

### Posso usar V2 e V3 simultaneamente?

Sim, mas cada versão tem seus próprios tokens e configurações.

## Funcionalidades

### Como listar todos os produtos?

Use paginação para grandes volumes:

```typescript
const tiny = new TinyERP({ TOKEN: 'token' });

let offset = 0;
const limit = 100;
let todosProdutos = [];

while (true) {
  const resultado = await tiny.produtos.listarProdutos({ limit, offset });
  todosProdutos.push(...resultado.data);

  if (resultado.data.length < limit) break;
  offset += limit;
}
```

### Como atualizar o estoque de um produto?

```typescript
await tiny.produtos.atualizarEstoqueProduto({
  id: 123,
  requestBody: {
    deposito: { id: 1 },
    operacao: 'E', // E = Entrada, S = Saída
    quantidade: 10,
  },
});
```

### Como gerar nota fiscal a partir de um pedido?

```typescript
const nf = await tiny.notas.gerarNotaFiscalPedido({
  idVenda: 12345,
});

await tiny.notas.autorizarNotaFiscal({
  id: nf.id!,
  requestBody: { enviarEmail: true },
});
```

### Como buscar pedidos por período?

```typescript
const pedidos = await tiny.pedidos.listarPedidos({
  dataInicial: '2024-01-01',
  dataFinal: '2024-12-31',
  situacao: 'aprovado',
  limit: 50,
});
```

## Erros Comuns

### Erro 401: Token inválido ou expirado

- Verifique se o token está correto
- Gere um novo token se necessário
- Confirme que está usando o Client Secret (não o Client ID)

### Erro 403: Permissão insuficiente

- Verifique as permissões configuradas no aplicativo
- Gere novas chaves após alterar permissões
- Confirme que o módulo necessário está habilitado

### Erro 404: Recurso não encontrado

- Verifique se o ID do recurso está correto
- Confirme que o recurso existe na conta
- Verifique se está usando o endpoint correto

### Erro 500: Internal Server Error

- Erro temporário do servidor
- Implemente retry com backoff
- Aguarde alguns minutos e tente novamente

## TypeScript

### Como tipar corretamente as respostas?

Importe os tipos do SDK:

```typescript
import type { ObterProdutoModelResponse, CriarProdutoRequestModel } from '@integrations/tinyerp-v3';

const produto: ObterProdutoModelResponse = await tiny.produtos.obterProduto({ id: 123 });
```

### Como criar tipos customizados?

Estenda os tipos existentes:

```typescript
import type { ObterProdutoModelResponse } from '@integrations/tinyerp-v3';

interface ProdutoComEstoque extends ObterProdutoModelResponse {
  estoqueDisponivel: number;
}
```

## Integração

### Como integrar com Next.js?

Use no lado do servidor (API Routes ou Server Components):

```typescript
// app/api/produtos/route.ts
import { TinyERP } from '@integrations/tinyerp-v3';
import { NextResponse } from 'next/server';

export async function GET() {
  const tiny = new TinyERP({ TOKEN: process.env.TINY_TOKEN! });
  const produtos = await tiny.produtos.listarProdutos({ limit: 10 });
  return NextResponse.json(produtos);
}
```

### Como integrar com Express?

```typescript
import express from 'express';
import { TinyERP } from '@integrations/tinyerp-v3';

const app = express();
const tiny = new TinyERP({ TOKEN: process.env.TINY_TOKEN! });

app.get('/api/produtos', async (req, res) => {
  try {
    const produtos = await tiny.produtos.listarProdutos({ limit: 10 });
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});
```

### Como usar em ambiente serverless?

```typescript
// AWS Lambda
export const handler = async (event) => {
  const tiny = new TinyERP({ TOKEN: process.env.TINY_TOKEN! });

  const produto = await tiny.produtos.obterProduto({
    id: parseInt(event.pathParameters.id),
  });

  return {
    statusCode: 200,
    body: JSON.stringify(produto),
  };
};
```

## Suporte

### Onde encontrar mais informações?

- [Documentação de Configuração](./configuration.md)
- [Exemplos de Uso](./examples.md)
- [Tratamento de Erros](./error-handling.md)
- [Boas Práticas](./best-practices.md)
- [Estrutura do SDK](./structure.md)

### Como reportar bugs?

Abra uma issue no GitHub: [linkiez/TinyERPv3-SDK](https://github.com/linkiez/TinyERPv3-SDK/issues)

### Como contribuir?

Contribuições são bem-vindas! Veja o [README principal](../README.md) para mais informações.
