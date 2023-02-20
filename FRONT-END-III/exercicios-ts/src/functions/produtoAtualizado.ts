import listaProdutos from  '../database/produtos'
import { Produto } from '../types';

// UTILITARIO TYPESCRIPT
// PARTIAL -> serve para tornar todas as propriedades de um tipo opcionais de preenchimento
// OMIT -> criar um novo tipo, omitindo uma ou mais propriedades do tipo/interface base

const teste: Partial<Omit<Produto, 'id' | 'nome'>> = {
    
}

/*

5 - ATUALIZAR
Crie uma função que receba o identificador de um produto e os dados a serem atualizados do produto que 
tiver esse identificador. Deve ser possível atualizar 1 (uma) ou mais propriedades/informações sobre um produto. A função deve validar se o identificador informado corresponde a um produto da lista de produtos.

*/

function atualizarProduto(id: string, novosdados: Partial<Omit<Produto, 'id'>>) {
    const { categoria, preco, genero, nome, quantidade } = novosdados


    // undefined, null, '', 0, false -> false

    // novosdados.categoria ? novosdados.categoria  : produtoAntigo.categoria
  
    if(!categoria && !genero && !nome && !preco && !quantidade){
        console.log("Os dados estão vazios.");
        return 
   
    }

    const indexProduto = listaProdutos.findIndex((item) => item.id === id)

    if(indexProduto === -1) {
        console.log("Produto não encontrado.");
        return
    }

    const dadosAntigos = listaProdutos[indexProduto]

    listaProdutos[indexProduto].categoria = categoria ?? dadosAntigos.categoria
    listaProdutos[indexProduto].preco = preco ?? dadosAntigos.preco
    listaProdutos[indexProduto].genero = genero ?? dadosAntigos.genero
    listaProdutos[indexProduto].nome = nome ?? dadosAntigos.nome
    listaProdutos[indexProduto].quantidade = quantidade ?? dadosAntigos.quantidade
    
}


export default atualizarProduto



// (valor, index, array) => 







// atualizarProduto('1234', {nome: 'Novo produto', preco: 10000})
