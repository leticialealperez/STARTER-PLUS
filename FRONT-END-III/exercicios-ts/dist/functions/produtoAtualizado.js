"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = __importDefault(require("../database/produtos"));
// UTILITARIO TYPESCRIPT
// PARTIAL -> serve para tornar todas as propriedades de um tipo opcionais de preenchimento
function atualizarProduto(id, novosdados) {
    // undefined, null, '', 0, false -> false
    // novosdados.categoria ? novosdados.categoria  : produtoAntigo.categoria
    produtos_1.default.findIndex((item) => item.id === id);
}
// (valor, index, array) => 
// atualizarProduto('1234', {nome: 'Novo produto', preco: 10000})
