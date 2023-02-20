/* 9 - LISTAR PRODUTOS POR FAIXA DE PREÇO
Crie uma função que receba um valor minimo e um valor máximo por parametro, percorra a lista de produtos e mostre no console.log apenas os produtos cadastrados cujo preço esteja entre esse minimo e máximo passado por parametro. Na mostragem (console) deve aparecer apenas nome e preço. */
import listaProdutos from '../database/produtos';

function listarProdutosPreco(valorMinimo: number, valorMaximo: number) {
    const novaListaPreco = listaProdutos.filter( (item) => item.preco >= valorMinimo && item.preco <= valorMaximo).map((item) => {
        return {
            nome: item.nome,
            preco: item.preco
        }
    })
    console.log(novaListaPreco);
     
}

export default listarProdutosPreco;


// ex: todos os produtos que tenham preço entre 100 e 500 