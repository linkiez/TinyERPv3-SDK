# TinyERP V3 SDK

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![GitHub release](https://img.shields.io/github/release/linkiez/TinyERPv3-SDK.svg)](https://github.com/linkiez/TinyERPv3-SDK/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

SDK TypeScript totalmente tipado para integração com a API V3 do TinyERP.

## ⚖️ Aviso Legal

**Este é um projeto independente desenvolvido por [@linkiez](https://github.com/linkiez).** Este SDK não possui qualquer associação, vínculo ou endosso oficial da Olist ou TinyERP. O projeto foi criado para facilitar a integração com a API pública do TinyERP e é mantido pela comunidade de desenvolvedores.

Todos os direitos sobre as marcas "TinyERP" e "Olist" pertencem aos seus respectivos proprietários.

## 🚀 Início Rápido

```typescript
import { TinyERP } from '@integrations/tinyerp-v3';

const tiny = new TinyERP({ TOKEN: 'seu_client_secret' });

// Listar produtos
const produtos = await tiny.produtos.listarProdutos({ limit: 10 });

// Criar pedido
const pedido = await tiny.pedidos.criarPedido({
  requestBody: {
    /* dados do pedido */
  },
});

// Gerar nota fiscal
const nota = await tiny.notas.gerarNotaFiscalPedido({ idVenda: 123 });
```

## 📚 Documentação Completa

- **[📦 Instalação](./docs/installation.md)** - Como instalar e importar o SDK
- **[⚙️ Configuração](./docs/configuration.md)** - Configure tokens, permissões e limites de requisições
- **[💡 Exemplos de Uso](./docs/examples.md)** - Exemplos práticos para todos os módulos (Produtos, Pedidos, Notas, etc)
- **[🏗️ Estrutura do SDK](./docs/structure.md)** - Entenda a arquitetura, módulos e tipos disponíveis
- **[⚠️ Tratamento de Erros](./docs/error-handling.md)** - Lidando com erros, rate limiting e retry
- **[✨ Boas Práticas](./docs/best-practices.md)** - Otimize performance, segurança e manutenibilidade
- **[❓ FAQ](./docs/faq.md)** - Perguntas frequentes e soluções comuns

## 🎯 Recursos

- ✅ **100% TypeScript** - Totalmente tipado para melhor DX
- ✅ **Todos os Módulos** - Produtos, Pedidos, Notas Fiscais, Contatos, Estoque e mais
- ✅ **Rate Limiting** - Controle de requisições por minuto
- ✅ **Error Handling** - Tratamento robusto de erros da API
- ✅ **Promise-based** - API moderna com async/await
- ✅ **CancelablePromise** - Cancele requisições em andamento
- ✅ **Documentação Completa** - Exemplos e guias detalhados

## 🔧 Módulos Disponíveis

```typescript
const tiny = new TinyERP({ TOKEN: 'token' });

// Gestão de Produtos e Estoque
tiny.produtos; // Produtos e variações
tiny.estoque; // Controle de estoque
tiny.marcas; // Marcas de produtos
tiny.categorias; // Categorias de produtos

// Vendas e Pedidos
tiny.pedidos; // Pedidos de venda
tiny.notas; // Notas fiscais
tiny.expedicao; // Expedição e envio
tiny.separacao; // Separação de pedidos

// Compras
tiny.ordemDeCompra; // Ordens de compra
tiny.fornecedores; // Gestão de fornecedores

// Financeiro
tiny.contasAReceber; // Contas a receber
tiny.contasAPagar; // Contas a pagar
tiny.formasDePagamento; // Formas de pagamento
tiny.categoriasDeReceitaEDespesa; // Categorias financeiras

// Cadastros
tiny.contatos; // Clientes e fornecedores
tiny.vendedores; // Vendedores
tiny.servicos; // Serviços

// Configurações
tiny.dadosDaEmpresa; // Informações da conta
tiny.logistica; // Transportadoras
tiny.intermediadores; // Intermediadores
tiny.listaDePrecos; // Listas de preço
```

## 💻 Exemplos de Uso

### Produtos

```typescript
// Criar produto
const produto = await tiny.produtos.criarProduto({
  requestBody: {
    nome: 'Notebook Dell',
    preco: 2500.0,
    tipo: 'P',
    situacao: 'A',
  },
});

// Listar produtos
const produtos = await tiny.produtos.listarProdutos({
  pesquisa: 'notebook',
  situacao: 'A',
  limit: 20,
});
```

### Pedidos

```typescript
// Criar pedido
const pedido = await tiny.pedidos.criarPedido({
  requestBody: {
    cliente: {
      nome: 'João Silva',
      cpfCnpj: '123.456.789-00',
    },
    itens: [{ produto: { id: 123 }, quantidade: 2, valorUnitario: 2500 }],
  },
});
```

### Notas Fiscais

```typescript
// Gerar e autorizar nota
const nf = await tiny.notas.gerarNotaFiscalPedido({ idVenda: 123 });
await tiny.notas.autorizarNotaFiscal({
  id: nf.id!,
  requestBody: { enviarEmail: true },
});
```

**[Ver mais exemplos →](./docs/examples.md)**

## ⚠️ Tratamento de Erros

```typescript
import { TinyERP, ApiError } from '@integrations/tinyerp-v3';

try {
  const produto = await tiny.produtos.obterProduto({ id: 123 });
} catch (error) {
  if (error instanceof ApiError) {
    console.error(`Erro ${error.status}: ${error.message}`);

    if (error.status === 429) {
      // Rate limit excedido - aguardar
    }
  }
}
```

**[Ver guia completo de erros →](./docs/error-handling.md)**

## 🔐 Segurança

- Mantenha suas chaves de acesso seguras
- Use variáveis de ambiente para armazenar credenciais
- Nunca compartilhe tokens publicamente
- Rotacione as chaves periodicamente

```typescript
// ✅ Correto
const tiny = new TinyERP({
  TOKEN: process.env.TINY_ERP_TOKEN!,
});

// ❌ Incorreto
const tiny = new TinyERP({
  TOKEN: 'abc123def456',
});
```

## 📊 Limites de Requisições

| Plano                  | Requisições/minuto | Escrita/minuto |
| ---------------------- | ------------------ | -------------- |
| Básico e Crescer       | 60                 | 30             |
| Essencial e Evoluir    | 120                | 60             |
| Grande e Potencializar | 240                | 100            |

⚠️ O limite é por conta, não por aplicativo.

**[Ver implementação de rate limiting →](./docs/error-handling.md#implementando-rate-limiting)**

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adicionar nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Links

- [Repositório GitHub](https://github.com/linkiez/TinyERPv3-SDK)
- [Issues e Bugs](https://github.com/linkiez/TinyERPv3-SDK/issues)
- [Releases](https://github.com/linkiez/TinyERPv3-SDK/releases)
- [Swagger da API](./swagger.json)

## 👤 Autor

Desenvolvido por [@linkiez](https://github.com/linkiez)

---

**Nota**: Este é um projeto independente e não possui vínculo oficial com Olist ou TinyERP.
