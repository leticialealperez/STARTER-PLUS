import { Tag as MinhaTag, Produto, Categoria, Genero } from './types'
import { v4 as gerarId } from 'uuid'
import listaProdutos from './database/produtos'
import { adicionaTag, atualizarProduto, excluir, listagemProdutosTag, listarProdutosPreco, listarTodosProdutos, listarTudo, novoProduto, } from './functions'


// criar uma função que receba todas as informações necessarias para criar um novo produto e adicione em uma lista previamente definida
// toda nova função deve ser um modulo


// DIFERENÇAS

// default -> somente 1 exportação default por arquivo && pode ser alterado o nome do modulo quando importado

// não default ( utilizando {}) - pode ser exportado varios modulos no mesmo arquivo && não podemos alterar o nome na hora da importação


// CREATE - criar um novo produto
novoProduto({
    id: '1',
    nome: 'Camisa da Growdev',
    categoria: {
        nome: 'Vestuário',
        tags: ['ADULTO', 'PROMOÇÃO', 'LIQUIDAÇÃO']
    },
    genero: 'F',
    preco: 100,
    quantidade: 1
})

novoProduto({
  id:'2',
  nome: 'Tenis da Growdev 2',
  categoria: {
    nome: 'Calçados',
    tags: ['LIQUIDAÇÃO'],
  },
  genero: 'F',
  preco: 500,
  quantidade: 2,
});

novoProduto({
  id:'3',
  nome: 'Tenis da Growdev 3',
  categoria: {
    nome: 'Calçados',
    tags: ['ADULTO', 'LIQUIDAÇÃO'],
  },
  genero: 'F',
  preco: 1500,
  quantidade: 2,
});

console.log(listaProdutos);

// atualizarProduto('1', {nome: 'Atualizado'})

// console.log(listaProdutos);

// excluir('2')

// listarTudo()

// listarTodosProdutos('calçados')

// listarProdutosPreco(100, 500)

// listagemProdutosTag('ADULTO')

// adicionaTag('3', ['ADULTO', 'PROMOÇÃO'])