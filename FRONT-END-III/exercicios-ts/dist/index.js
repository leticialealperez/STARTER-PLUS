"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = __importDefault(require("./database/produtos"));
const functions_1 = require("./functions");
// criar uma função que receba todas as informações necessarias para criar um novo produto e adicione em uma lista previamente definida
// toda nova função deve ser um modulo
// DIFERENÇAS
// default -> somente 1 exportação default por arquivo && pode ser alterado o nome do modulo quando importado
// não default ( utilizando {}) - pode ser exportado varios modulos no mesmo arquivo && não podemos alterar o nome na hora da importação
// CREATE - criar um novo produto
(0, functions_1.novoProduto)({
    id: '1',
    nome: 'Camisa da Growdev',
    categoria: {
        nome: 'Vestuário',
        tags: ['ADULTO', 'PROMOÇÃO', 'LIQUIDAÇÃO']
    },
    genero: 'F',
    preco: 100,
    quantidade: 1
});
(0, functions_1.novoProduto)({
    id: '2',
    nome: 'Tenis da Growdev 2',
    categoria: {
        nome: 'Calçados',
        tags: ['LIQUIDAÇÃO'],
    },
    genero: 'F',
    preco: 500,
    quantidade: 2,
});
(0, functions_1.novoProduto)({
    id: '3',
    nome: 'Tenis da Growdev 3',
    categoria: {
        nome: 'Calçados',
        tags: ['ADULTO', 'LIQUIDAÇÃO'],
    },
    genero: 'F',
    preco: 1500,
    quantidade: 2,
});
console.log(produtos_1.default);
// atualizarProduto('1', {nome: 'Atualizado'})
// console.log(listaProdutos);
// excluir('2')
// listarTudo()
// listarTodosProdutos('calçados')
// listarProdutosPreco(100, 500)
(0, functions_1.listagemProdutosTag)("ADULTO");
