"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = __importDefault(require("../database/produtos"));
// UTILITARIO TYPESCRIPT
// PARTIAL -> serve para tornar todas as propriedades de um tipo opcionais de preenchimento
// OMIT -> criar um novo tipo, omitindo uma ou mais propriedades do tipo/interface base
const teste = {};
/*

5 - ATUALIZAR
Crie uma função que receba o identificador de um produto e os dados a serem atualizados do produto que
tiver esse identificador. Deve ser possível atualizar 1 (uma) ou mais propriedades/informações sobre um produto. A função deve validar se o identificador informado corresponde a um produto da lista de produtos.

*/
function atualizarProduto(id, novosdados) {
    const { categoria, preco, genero, nome, quantidade } = novosdados;
    // undefined, null, '', 0, false -> false
    // novosdados.categoria ? novosdados.categoria  : produtoAntigo.categoria
    if (!categoria && !genero && !nome && !preco && !quantidade) {
        console.log("Os dados estão vazios.");
        return;
    }
    const indexProduto = produtos_1.default.findIndex((item) => item.id === id);
    if (indexProduto === -1) {
        console.log("Produto não encontrado.");
        return;
    }
    const dadosAntigos = produtos_1.default[indexProduto];
    produtos_1.default[indexProduto].categoria = categoria !== null && categoria !== void 0 ? categoria : dadosAntigos.categoria;
    produtos_1.default[indexProduto].preco = preco !== null && preco !== void 0 ? preco : dadosAntigos.preco;
    produtos_1.default[indexProduto].genero = genero !== null && genero !== void 0 ? genero : dadosAntigos.genero;
    produtos_1.default[indexProduto].nome = nome !== null && nome !== void 0 ? nome : dadosAntigos.nome;
    produtos_1.default[indexProduto].quantidade = quantidade !== null && quantidade !== void 0 ? quantidade : dadosAntigos.quantidade;
}
exports.default = atualizarProduto;
// (valor, index, array) => 
// atualizarProduto('1234', {nome: 'Novo produto', preco: 10000})
