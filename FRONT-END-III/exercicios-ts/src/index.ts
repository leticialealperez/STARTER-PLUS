import { Tag as MinhaTag, Produto, Categoria, Genero } from './types'
import { v4 as gerarId } from 'uuid'
import listaProdutos from './database/produtos'
import { novoProduto } from './functions'


// criar uma função que receba todas as informações necessarias para criar um novo produto e adicione em uma lista previamente definida
// toda nova função deve ser um modulo


// DIFERENÇAS

// default -> somente 1 exportação default por arquivo && pode ser alterado o nome do modulo quando importado

// não default ( utilizando {}) - pode ser exportado varios modulos no mesmo arquivo && não podemos alterar o nome na hora da importação


// CREATE - criar um novo produto
novoProduto({
    id: gerarId(),
    nome: 'Camisa da Growdev',
    categoria: {
        nome: 'Vestuário',
        tags: []
    },
    genero: 'F',
    preco: 5000,
    quantidade: 1
})

novoProduto({
  id: gerarId(),
  nome: 'Camisa da Growdev 2',
  categoria: {
    nome: 'Vestuário',
    tags: [],
  },
  genero: 'F',
  preco: 5000,
  quantidade: 1,
});

console.log(listaProdutos);


// deve ser possivel atualizar qualquer informação de um produto
// escreva uma função que receba as propriedades que serão atualizadas por parametro
// e atualize os dados do produto
// OBS: apenas 1 campo deve ser obrigatorio de ser enviado

