"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = __importDefault(require("../database/produtos"));
// criar uma função que receba todas as informações necessarias para criar um novo produto e adicione em uma lista previamente definida
// toda nova função deve ser um modulo
// não pode cadastrar dois produtos com o mesmo nome
// findIndex -> percorre a lista e busca/encontra o INDICE do elemento conforme o teste logico
// find -> faz a mesma coisa que o findIndex porém ao inves de retornar o INDICE ele retorna o objeto inteiro
// some -> verifica se ao menos 1 registo atende à condição passada, se SIM retorna true, se nenhum item da lista atende à condição retorna FALSE
// isso vai dentro do metodo 
// (valor, indice, array) => 
function novoProduto(produto) {
    let existe = produtos_1.default.some((item) => item.nome === produto.nome);
    if (existe) {
        console.log('Esse produto já existe');
        return;
    }
    produtos_1.default.push(produto);
}
exports.default = novoProduto;
