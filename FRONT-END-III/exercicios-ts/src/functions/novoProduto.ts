import { Tag as MinhaTag, Produto, Categoria, Genero } from '../types'
import { v4 as gerarId } from 'uuid'
import listaProduto from '../database/produtos'
// criar uma função que receba todas as informações necessarias para criar um novo produto e adicione em uma lista previamente definida
// toda nova função deve ser um modulo

// não pode cadastrar dois produtos com o mesmo nome


// findIndex -> percorre a lista e busca/encontra o INDICE do elemento conforme o teste logico

// find -> faz a mesma coisa que o findIndex porém ao inves de retornar o INDICE ele retorna o objeto inteiro


// some -> verifica se ao menos 1 registo atende à condição passada, se SIM retorna true, se nenhum item da lista atende à condição retorna FALSE

// isso vai dentro do metodo 
// (valor, indice, array) => 


function novoProduto(produto: Produto) {
    
    let existe = listaProduto.some((item) => item.nome === produto.nome)

    if (existe) {
        console.log('Esse produto já existe')
        return
    }

    listaProduto.push(produto)
}

export default novoProduto