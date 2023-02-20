import listaProdutos from '../database/produtos';
import { Tag } from '../types';

// 10 - Desenvolvimento da função de listagem dos produtos por tags - STATUS: ausente

/*

10 - LISTAR TODOS OS PRODUTOS DE UMA TAG
Crie uma função que receba o nome de uma tag por parametro, percorra a lista de produtos e mostre no console.log apenas os produtos cadastrados que tiverem a categoria contendo a tag igual ao que foi recebido por parametro. Na mostragem (console) deve aparecer apenas nome e quantidade em estoque e a soma total do valor de estoque desses produtos.

*/


function listagemProdutosTag(nomeTag:Tag){

  const novaLista = listaProdutos.filter((item) => {
    const existe = item.categoria.tags.some((tag) => tag === nomeTag)

    return existe
  })

  const somaTotal = novaLista.reduce((memo,item, index, array)=> memo +=(item.preco * item.quantidade), 0)
  
  console.log(novaLista.map(({ nome, quantidade })=> ({ nome, quantidade }) ));
  console.log(somaTotal)
  
}

export default listagemProdutosTag

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