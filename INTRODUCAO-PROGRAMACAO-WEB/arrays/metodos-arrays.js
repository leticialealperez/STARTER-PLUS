// sempre vai percorrer todo o array -> sai do indice 0 e vai até a ultima posição da lista

let listaFrutas = ['Banana', 'Maçã', 'Uva']

// find -> encontra um determinado valor dentro da lista e nos retorna uma copia desse valor
// const resposta1 = listaFrutas.find( function(valor, indice, lista) {
//     return valor === 'Maçã'
// })


// arrow function

// find -> busca e retorna um VALOR

// encontrou ? sim -> retorna uma cópia do valor encontrado
// nao -> retorna undefined
const resultado = listaFrutas.find( (valor, indice, lista) => valor === 'Banana')
console.log(resultado)


// findIndex -> percorre a lista de elementos e retorna o INDICE do primeiro elemento que atender à condição de busca

// encontrou ? sim -> retorna o indice em que o elemento se encontra na lista
// nao -> retorna -1
const indiceEncontrado = listaFrutas.findIndex( (valor, indice, lista) => valor === 'Banan')
console.log(indiceEncontrado)

// some => retorna verdadeiro se o elemento buscado existir na lista
// retorna falso se o elemento buscado não existir na lista
// se ao menos 1 dado da lista atender a condição, retorna true
const existe = listaFrutas.some( (valor, indice, lista) => valor === 'Pêra')
console.log(existe)



// every -> retorna true se TODOS os elementos da lista atenderem a condição passada
// retorna false se ao menos 1 não atender
let listaNumeros = [0, 20, 35, 40]

const existe2 = listaNumeros.every( (valor, indice, lista) => valor > 0)
console.log(existe2)