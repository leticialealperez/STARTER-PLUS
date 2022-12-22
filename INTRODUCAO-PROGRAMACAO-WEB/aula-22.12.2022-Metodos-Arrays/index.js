let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 5, 50, 15, 1, 4, 7 ]

/*

// 1 - Escreva um algoritmo para buscar apenas os números positivos da lista e mostrar todos no console.log
   
// 2 - Escreva um algoritmo para buscar e preencher uma lista apenas os números pares e positivos da lista
    
// 3 - Escreva um algoritmo para buscar e preencher uma lista apenas os números ímpares (positivos ou negativos) da lista

// 4 - Escreva um algoritmo para informar se existe algum número maior que 50 na lista

// 5 - Escreva um algoritmo para informar se todos os números da lista são maiores que 50

// 6 - Escreva um algoritmo para buscar o índice do número 24

// 7 - Escreva um algoritmo para buscar um número na lista que seja maior ou igual a 90

*/

// arrow function
// (valor, indice, array) => 

// REGRAS - arrow function
// SE EU TENHO APENAS 1 LINHA DE CÓDIGO/EXPRESSÃO não é necessário utilizar o termo return
// SE EU TIVER VÁRIAS LINHAS DE CÓDIGO QUE PRECISAM SER EXECUTADAS daí é obrigatório o uso do {} e da expressão return


// find - encontrar - quando a gente precisa encontrar um VALOR dentro da lista
// const numeroEncontrado = listaNumeros.find( (valor, indice, array) => {
//     // ...
//     return valor === 4
// } )

const numeroEncontrado = listaNumeros.find( function(valor, indice, array) {
    return valor === 4
})

console.log(numeroEncontrado)
// OBS => função anonima e arrow function para os metodos de arrays vão funcionar da mesma

const par = listaNumeros.find( (valor, indice, array) => valor % 2 === 0)
console.log(par)



// findIndex = sempre retorna a posição na lista em que encontrou o valor buscado
// retorna indice de 0 até a ultima posição do array caso encontre o dado buscado
// retorna -1 quando não encontra nenhum dado correspondente a busca
// MUITO USUADO PARA ATUALIZAR DADOS DA LISTA
// primeiro busca o indice do que se quer atualizar e depois acessar lista[indiceEncontrado] e atribui o novo valor
const indiceEncontrado = listaNumeros.findIndex( (valor, indice, array) => valor === 98)
console.log(indiceEncontrado)

console.log(listaNumeros[indiceEncontrado])
listaNumeros[indiceEncontrado] = 150
console.log(listaNumeros[indiceEncontrado])



// filter - retorna uma nova lista com todos os dados que atenderem a condição de filtro
const numerosPrimos = listaNumeros.filter( (valor, indice, array) => ePrimo(valor) )
console.log(numerosPrimos)


// some - algum - retorna true se ao menos 1 dado dentro da lista atender à condição passada
// retorna false se NENHUM atender a condição passada
// OU => retorna false somente se todos forem false



// every - 

// E => retorna truw somente se todas as condições forem TRUE





function ePrimo(numero) {
    let divisores = 2;
    if (numero === 1 || numero === 0) return false;
    if (numero === 2) return true;
    if (numero < 0) return false;
    for (let contador = 2; contador < numero; contador++) {
        if (numero % contador === 0) {
            divisores++;
        }
    }
    if (divisores > 2) {
        return false;
    }
    return true;
}