"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*

6 - EXCLUIR
Crie uma função que receba o identificador de um produto e, a partir deste dado, remova um produto da lista. A função deve validar se o identificador informado corresponde a um produto da lista de produtos.


*/
const produtos_1 = __importDefault(require("../database/produtos"));
function excluir(id) {
    const indexProduto = produtos_1.default.findIndex((item) => item.id === id);
    if (indexProduto === -1) {
        console.log('Produto não encontrado');
        return;
    }
    const [produtoDeletado] = produtos_1.default.splice(indexProduto, 1);
    console.log("Item excluido com sucesso");
    console.log(produtoDeletado);
}
exports.default = excluir;
