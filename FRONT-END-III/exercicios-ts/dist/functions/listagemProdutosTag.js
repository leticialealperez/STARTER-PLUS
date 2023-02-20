"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = __importDefault(require("../database/produtos"));
// 10 - Desenvolvimento da função de listagem dos produtos por tags - STATUS: ausente
/*

10 - LISTAR TODOS OS PRODUTOS DE UMA TAG
Crie uma função que receba o nome de uma tag por parametro, percorra a lista de produtos e mostre no console.log apenas os produtos cadastrados que tiverem a categoria contendo a tag igual ao que foi recebido por parametro. Na mostragem (console) deve aparecer apenas nome e quantidade em estoque e a soma total do valor de estoque desses produtos.

*/
function listagemProdutosTag(nome) {
    const novaLista = produtos_1.default.filter((item) => item.categoria.tags.some((tag) => tag === nome));
    const somaTotal = novaLista.reduce((memo, item) => memo += (item.preco * item.quantidade), 0);
    console.log(`${novaLista.map(({ nome, quantidade }) => ({ nome, quantidade }))}\n Valor total: ${somaTotal}`);
}
exports.default = listagemProdutosTag;
/*

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


*/ 
