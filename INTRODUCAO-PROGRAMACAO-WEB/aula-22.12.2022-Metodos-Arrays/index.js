let listaNumeros = [ -31, 18, 50, 98, 4, -53, 1, -8, 15, 89, 24, -3, 0, 10, 15, 47, 5, 50, 15, 1, 4, 7 ]

// FILTER
// valor = -31
// indice = 0


// SOME
// valor = 18
// indice = 1


console.log(numeroEncontrado)


const par = listaNumeros.find( (valor, indice, array) => valor % 2 === 0)
console.log(par)



// findIndex = sempre retorna a posição na lista em que encontrou o valor buscado
// retorna indice 0, 1, 2 ...
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