"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const produtos_1 = __importDefault(require("./database/produtos"));
const functions_1 = require("./functions");
// criar uma função que receba todas as informações necessarias para criar um novo produto e adicione em uma lista previamente definida
// toda nova função deve ser um modulo
// DIFERENÇAS
// default -> somente 1 exportação default por arquivo && pode ser alterado o nome do modulo quando importado
// não default ( utilizando {}) - pode ser exportado varios modulos no mesmo arquivo && não podemos alterar o nome na hora da importação
// CREATE - criar um novo produto
(0, functions_1.novoProduto)({
    id: (0, uuid_1.v4)(),
    nome: 'Camisa da Growdev',
    categoria: {
        nome: 'Vestuário',
        tags: []
    },
    genero: 'F',
    preco: 5000,
    quantidade: 1
});
(0, functions_1.novoProduto)({
    id: (0, uuid_1.v4)(),
    nome: 'Camisa da Growdev 2',
    categoria: {
        nome: 'Vestuário',
        tags: [],
    },
    genero: 'F',
    preco: 5000,
    quantidade: 1,
});
console.log(produtos_1.default);
