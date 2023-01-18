// FUNÇÕES NORMAIS
// para que são utilizadas? para evitar a reescrita de código


// definição
// function mostrarMensagem(mensagem, numero) {    
//     alert(mensagem)


//     if(10 > 5) {
//         return numero
//     } else {
//         return mensagem
//     }
// }


// console.log(mensagem)
// aqui fora a variavel mensagem não existe


// chamada/execução
// const teste1 = mostrarMensagem('Bem vindo!', 10)
// const teste2 = mostrarMensagem('Teste outra coisa', 20)


// RETORNO - pode ter um retorno (void = vazio), string, number, undefined, null
// const resposta = mostrarMensagem()


//





// FUNÇÕES ANONIMAS - só é usada para contextos específicos (passagem por parametro para outra função)
// let lista = [10, 20, 30]


// function
// function meuForEach(funcao) {

//     for(let indice = 0; indice < lista.length; indice++) {
//         const resposta = funcao(lista[indice], indice, lista)
//         console.log(resposta)
//     }

    
// }


// meuForEach(
//     function(valor, indice, array) {
//         return valor % 2 === 0
//     }
// )

// meuForEach( (valor, indice, array) => {
//     console.log(valor)
//     console.log(indice)
//     console.log(array)


//     return valor % 2 === 0
// })




// arrow function
// meuForEach((valor, indice, lista) => {
//     console.log(valor)
//     console.log(indice)
//     console.log(lista)
// })

// OBSERVAÇÕES

// QUANDO A LÓGICA COUBER EM UMA LINHA NÃO PRECISA USAR { }
// QUANDO TIVER MAIS DE UMA LINHA É NECESSÁRIO USAR {} E O TERMO return



// ---------------- arrays -----------------------
// OBS: toda lista inicia com a posição 0
// OBS: para editar um registro dentro de um array é necessário saber o ÍNDICE

// INDICES - posição de um determinado valor dentro dessa lista de valores
let listaNumeros = [25, 35, 45]


// VALOR - valor armazenado em cada indice da lista
// listaNumeros[2] = 55 
// console.log(listaNumeros)



// modificar a lista original pelo dobro dos valores contidos originalmente
// FOR EACH - ele não retorno

// console.log('ANTES DO FOR EACH', listaNumeros)

// listaNumeros.forEach( (valor, indice, array) => {
//     array[indice] = valor * 2
//     console.log(valor)
// })

// console.log('DEPOIS DO FOR EACH', listaNumeros)


// cria uma cópia da lista original com os valores modificados
// MAP - SEMPRE RETORNA UMA NOVA LISTA COM O MESMO TAMANHO DA ORIGINAL


// console.log('ANTES DO MAP', listaNumeros)

// const novaLista = listaNumeros.map( (valor, indice, array) => {
//     return valor * 2
// })

// console.log('DEPOIS DO MAP', listaNumeros)
// console.log(novaLista)


// criar uma nova lista com alguns dados (AQUELES QUE ATENDEREM A ALGUMA CONDIÇÃO)
// FILTER - sempre retorna uma nova lista e precisa de um teste lógico

// console.log('ANTES DO FILTER', listaNumeros)

// const novaLista = listaNumeros.filter( (valor, indice, array) => indice !== 0)

// console.log('DEPOIS DO FILTER', listaNumeros)
// console.log(novaLista)



// buscar 1 dado especifico de dentro da lista 
// FIND - sempre retorna o mesmo tipo de dado contido no array ou undefined
// SEMPRE RETORNA 1 VALOR - o primeiro que atender a condição passada 

// console.log(listaNumeros)
// const dadoEncontrado = listaNumeros.find( (valor, indice, array) => valor >= 35 )

// console.log(dadoEncontrado)




// buscar na lista um dado que atenda a uma determinada condição e retornar sua posição(indice)
// excluir ou atualizar dados - precisa usar o FindIndex

// FINDINDEX - sempre retorna um número. Quando encontra o registro retorna a posição na lista (0 ... tamanho - 1) ou -1 quando não encontra

// const indiceEncontrado = listaNumeros.findIndex( (valor, indice, array) => valor >= 35)
// console.log(indiceEncontrado)

// listaNumeros[indiceEncontrado] = 55
// console.log(listaNumeros)


// percorrer a lista e saber se ao menos 1 registro atende a uma determinada condição
// SOME - retorna true quando ao menos 1 registro atende, e false para quando nenhum atende
// console.log(listaNumeros)
// const existe = listaNumeros.some((valor, indice, array) => valor >= 45)
// console.log(existe)


// INSERIR UM NOVO REGISTRO NA LISTA

// .push() => insere um novo registro ao final da lista original
const numero = 100

listaNumeros.push(numero)


// .unshift() => insere um novo registro ao inicio da lista original [0]
const numero2 = 150
listaNumeros.unshift(numero2)

console.log(listaNumeros)




// APAGAR UM REGISTRO DE UMA LISTA - filtra ou utiliza o splice()

// .splice() => remove um dado ou mais dados de uma lista
// precisa de 2 argumentos => 1º é qual o indice que iniciará a exclusão, 2ª quantos registros quero excluir

listaNumeros.splice(3, 1)

console.log(listaNumeros)



