/*

1. Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.

*/

function exercicio1() {
    // etapa 1
    let lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


    for(let indice = 0; indice < lista.length; indice++) {
        verificaPar(lista[indice])
    }
    
}

function verificaPar(numero) {
    if(numero % 2 === 0) {
       document.write(`${numero} é par <br>`)
    } else {
        document.write(`${numero} é impar <br>`)
    }
}


/*

2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
inteiros e no final mostre a soma de todos os elementos.

*/

function exercicio2() {

}


/*

3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos.

*/

function exercicio3() {
    
}


/*

4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
retorne a união dos dois em um novo vetor.

*/

function exercicio4() {

}