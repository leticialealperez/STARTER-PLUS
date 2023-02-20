"use strict";
/* 8 - LISTAR TODOS OS PRODUTOS DE UMA CATEGORIA
Crie uma função que receba o nome de uma categoria por parametro, percorra a lista de produtos e mostre no console.log apenas os produtos cadastrados que tiverem o nome da categoria igual ao que foi recebido por parametro. Na mostragem (console) deve aparecer apenas nome e quantidade em estoque. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = __importDefault(require("../database/produtos"));
function listarTodosProdutos(categoriaNome) {
    const novaLista = produtos_1.default.filter((item) => item.categoria.nome.toUpperCase() === categoriaNome.toUpperCase());
    const mostarNovaLista = novaLista.map(({ nome, quantidade }) => {
        return {
            nome,
            quantidade
        };
    });
    console.log(mostarNovaLista);
}
exports.default = listarTodosProdutos;
/*
 
const novaLista = listaProdutos.filter((item) => item.categoria.nome === categoriaNome ).map((item) => ({nome:item.nome, quantidade: item.quantidade}))

*/ 
