
/* 7 - LISTAR TODOS
Crie uma função percorra a lista de produtos e mostre no console.log apenas id, nome, preço, quantidade em estoque e o valor em estoque da loja. Deve-se considerar a quantidade total de um produto multiplicado pelo valor do produto, assim como, considerar todos os produtos cadastrados/adicionados na lista de produtos.
 */
import listaProdutos from '../database/produtos';

function listarTudo() {

   const estoque = listaProdutos.map((item) => {
     return {
        id: item.id,
        nome: item.nome,
        preco: item.preco,
        quantidade: item.quantidade,

     }

    })

    const soma = estoque.reduce((somaEstoqueR, item) =>  somaEstoqueR += (item.preco * item.quantidade), 0)

    
    console.log(estoque);
    console.log(`O valor total em estoque é de ${soma}`);

}

export default listarTudo

// sem valor inicial
    // memo = [0]
    // item = [1]
    // estoque.reduce((memo, item) => )

    // com valor inicial
    // memo = 10
    // item = [0]
    // const somaEstoque = estoque.reduce((memo, item) => memo += (item.preco * item.quantidade), 0)

    // let somaEstoque = 0

    // estoque.forEach((item) => {
    //     somaEstoque += (item.preco * item.quantidade)
    // })