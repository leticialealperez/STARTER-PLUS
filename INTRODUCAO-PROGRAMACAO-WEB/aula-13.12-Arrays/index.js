// sempre estará ordenado por indices

// VALOR e INDICE

// INDICE -> posição do dado na lista
// VALOR -> é o dado armazenado -> string, number, boolean


// [15, 78, 56, 45, 0, -89]

// [0] => 15
// [1] => 78
// [2] => 56
// [3] => 45
// [4] => 0
// [5] => -89


// tamanho da lista é !== da ultima posição
// ultima posição sempre vai ser tamanho da lista - 1

// .length => tamanho da lista => quantidade total de dados armazenados

let lista = [] // lenght => 0

// adicionar valores a uma lista => ou adicionamos ao final da lista ou ao inicio da lista

// adicionar no inicio - unshift
lista.unshift(15) // => 1
lista.unshift(78) // => 2

// [78,15]


// adicionar ao final da lista - push
lista.push(56) // => 3
// [78,15,56]


// remover dados de uma lista -> do inicio ou do final da lista

// remover do inicio
lista.shift() // => 2
// [15,56]


//remover do final
lista.pop() // => 1
// [15]