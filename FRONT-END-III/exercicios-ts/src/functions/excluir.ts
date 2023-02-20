/*

6 - EXCLUIR
Crie uma função que receba o identificador de um produto e, a partir deste dado, remova um produto da lista. A função deve validar se o identificador informado corresponde a um produto da lista de produtos.


*/
import listaProdutos from '../database/produtos';

function excluir (id:string) {
    const indexProduto = listaProdutos.findIndex ((item) => item.id === id)
    
    if (indexProduto === -1) {
        console.log ('Produto não encontrado')
        return
    }
    
    const [produtoDeletado] = listaProdutos.splice(indexProduto, 1)

    console.log("Item excluido com sucesso")
    console.log(produtoDeletado);

}

export default excluir