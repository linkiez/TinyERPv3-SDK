# Exemplos de Uso

Este documento contém exemplos práticos de uso do SDK para cada módulo disponível.

## Produtos

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

## Pedidos

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

## Notas Fiscais

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

## Contatos

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

## Estoque

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

## Ordens de Compra

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

## Ordens de Serviço

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

## Próximos Passos

- [Tratamento de Erros](./error-handling.md) - Aprenda a lidar com erros
- [Estrutura do SDK](./structure.md) - Entenda a organização do código
- [Boas Práticas](./best-practices.md) - Otimize seu uso do SDK
