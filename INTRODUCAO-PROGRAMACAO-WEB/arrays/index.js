

// string, number, boolean, any => tipos primitivos



// while ou do while - quando não sabemos quantas vezes vai repetir um determinado trecho de código

// cadastrar quantas idades do usário quiser
//  COM WHILE
// while(confirma)  {
//     const idade = Number(prompt("cadastre uma idade: "))

//     // adicionar na lista
//     lista.push(idade)

//     confirma = confirm("Deseja cadastrar mais uma idade? ")
// }





// cadastrar 5 idades com DO WHILE

// do {
//     const idade = Number(prompt("Cadastre uma idade: "))

//     // adiciona valores na lista de idades
//     lista.push(idade)

//     contador++
// } while(contador <= 5) 


// cadastrar 5 idades com WHILE

// while(contador <= 5) {
//     const idade = Number(prompt("Cadastre uma idade: "))

//     // adiciona valores na lista de idades
//     lista.push(idade)

//     contador++
// } 


// for(let contador = 1; contador <= 5; contador++) {

//     const idade = Number(prompt("Cadastre uma idade: "))

//     // adiciona valores na lista de idades
//     lista.push(idade)

// }





// chave de um array/lista é o índice em que o dado se encontra


/* 
console.log(lista[0]) => 18 => 18 > 30 ? nao
console.log(lista[1]) => 21 => 21 > 30 ? nao
console.log(lista[2]) => 35 => 35 > 30 ? sim
console.log(lista[3]) => 48 => 48 > 30 ? sim
    
 */

// for(let indice = 0; indice < lista.length; indice++) {

//     console.log(lista[indice])

//     if(lista[indice] > 30) {
//         console.log(`${lista[indice]} É maior que 30`)
//     }

// }


let lista = []
let confirma = true

//  COM DO WHILE
do {
    const idadeInformada = Number(prompt("cadastre uma idade: "))

    // adicionar na lista
    lista.push(idadeInformada)

    confirma = confirm("Deseja cadastrar mais uma idade? ")

}while(confirma) 


// para cada idade da lista - especifico para listas



for(let valor of lista) {

    console.log(valor)

    if(valor > 30) {
        console.log(`${valor} é maior que 30`)
    }

}

console.log(lista)


// tamanho => .length
// lista.length  acessa o tamanho total da lista, ou seja quantidade total de dados armazenados


// adicionar ou remover dados de uma lista

// adicionar - ao inicio da lista ou ao final da lista

// .unshift() => adiciona um novo valor ao inicio da lista
// lista.unshift(78)


// .push() => adiciona um novo valor ao final da lista
// lista.push(100)



// remover dados de uma lista - ou do inicio ou do final

// .shift() => remove o dado contido na posição [0] da lista
// lista.shift()


// .pop() => remove o dado contido na ultima posição da lista
// lista.pop()
