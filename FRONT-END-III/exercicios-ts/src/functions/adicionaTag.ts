import listaProdutos from '../database/produtos';
import { Tag } from '../types';


function adicionaTag(id: string, tags: Tag[]) {
  const indice = listaProdutos.findIndex((item) => item.id === id);

  if (indice === -1) {
    console.log('Produto não encontrado!');
    return;
  }

  const { categoria } = listaProdutos[indice];

  tags.forEach((item)=>{
    if(categoria.tags.includes(item)){
      console.log(`Tag ${item} já cadastrada!`);
    }else{
     categoria.tags.push(item)
    }
  })

  console.log(listaProdutos[indice]);
  
}

export default adicionaTag
