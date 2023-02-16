// todo produto deve possuir id, nome, preco, categoria, quantidade em estoque, genero

// toda categoria precisa ter nome e tag

// uma categoria poderá ter uma ou mais tags

// o valor para tag só poderá ser PROMOÇÃO, LIQUIDAÇÃO, INFANTIL, ADULTO

// EX: calça masculina - categoria vestuario - tags da categoria ADULTO, PROMOCAO


import Categoria from './categoria.type';
import Genero from './genero.type';

interface Produto {
  id: string;
  nome: string;
  preco: number;
  categoria: Categoria;
  quantidade: number;
  genero: Genero;
}

export default Produto;  







