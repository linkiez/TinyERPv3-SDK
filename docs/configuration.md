# Configuração

## Pré-requisitos da API V3

Para utilizar a API V3 do TinyERP, é necessário:

- **Plano**: Básico, Crescer, Evoluir, Essencial, Potencializar, Grande, Construa, Impulsione, Domine ou Protagonize
- **Permissões**: Usuário administrador da conta
- **Extensão**: Gestão de Aplicativos instalada na conta

## Obtendo o Token de Acesso

1. Acesse **Menu > Configurações > Aba Geral > Aplicativos**
2. Clique em **+ novo aplicativo**
3. Preencha o **Nome do aplicativo** (ex: "Integração JCM")
4. Configure as **URLs de Redirecionamento** (se necessário)
5. Após salvar, edite o aplicativo e copie as chaves:
   - **Client ID**
   - **Client Secret**

⚠️ **Atenção**: As chaves são sensíveis e dão acesso total aos dados da conta. Mantenha-as seguras.

## Definindo Permissões

Configure as permissões por módulo:

- **Leitura**: Visualizar e obter informações
- **Incluir e editar**: Inserir e modificar dados
- **Excluir**: Remover informações existentes

## Limites de Requisições

A API V3 possui limites por minuto que variam conforme o plano:

| Plano                  | Requisições/minuto | Escrita/minuto |
| ---------------------- | ------------------ | -------------- |
| Básico e Crescer       | 60                 | 30             |
| Essencial e Evoluir    | 120                | 60             |
| Grande e Potencializar | 240                | 100            |

⚠️ **Importante**: O limite é por conta, não por aplicativo. Múltiplos aplicativos compartilham o mesmo limite.

## Inicialização com a Classe TinyERP

A maneira mais simples de usar o SDK é através da classe `TinyERP`:

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';

const tiny = new TinyERP({
  TOKEN: 'seu_client_secret_aqui',
  BASE: 'https://api.tiny.com.br/api/v3', // URL da API (já é o padrão)
});

// Agora você tem acesso a todos os serviços
const produtos = await tiny.produtos.obterProduto({ id: 123 });
```

## Uso Direto dos Serviços

Você também pode importar e usar os serviços diretamente:

```typescript
import { ProdutosService, OpenAPI } from '@integrations/tinyerp-v3';

// Configure o token globalmente
OpenAPI.TOKEN = 'seu_token_aqui';
OpenAPI.BASE = 'https://api.tiny.com.br/api/v3';

// Use os serviços diretamente
const produtos = await ProdutosService.obterProduto({ id: 123 });
```

## Exemplo Completo

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

## Próximos Passos

- [Exemplos de Uso](./examples.md) - Veja exemplos práticos por módulo
- [Tratamento de Erros](./error-handling.md) - Aprenda a lidar com erros
- [Boas Práticas](./best-practices.md) - Otimize seu uso do SDK
