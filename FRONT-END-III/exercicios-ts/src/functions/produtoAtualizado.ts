import listaProdutos from  '../database/produtos'
import { Produto } from '../types';

// UTILITARIO TYPESCRIPT
// PARTIAL -> serve para tornar todas as propriedades de um tipo opcionais de preenchimento

function atualizarProduto(id: string, novosdados: Partial<Produto>) {
    // undefined, null, '', 0, false -> false

    // novosdados.categoria ? novosdados.categoria  : produtoAntigo.categoria

    listaProdutos.findIndex((item) => item.id === id)
}


// (valor, index, array) => 







// atualizarProduto('1234', {nome: 'Novo produto', preco: 10000})
