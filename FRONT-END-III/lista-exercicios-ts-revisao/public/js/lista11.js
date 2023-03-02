"use strict";
const data = [
    { nome: 'Roger Medeiros', sexo: 'M', salario: 3250, },
    { nome: 'Carolina Silva', sexo: 'F', salario: 1200, },
    { nome: 'Cristina Avila', sexo: 'F', salario: 8100, },
    { nome: 'Gustavo Hoffman', sexo: 'M', salario: 5200.35, },
    { nome: 'Eva Trindade', sexo: 'F', salario: 2501, },
    { nome: 'Andre Mathias', sexo: 'M', salario: 1750, },
    { nome: 'Joice Castro da Silva', sexo: 'F', salario: 8100, }
];
// eles só existem pra arrays
// obs: todos os métodos são laços de repetições que executam alguma lógica
// como argumento desse método é preciso passar uma função anonima
// function(valor, index, array) {
// }
// (valor, index, array) => 
// findIndex -> é utilizado quando precisamos atualizar um determinado registro de uma lista
// método -> ações que podem ser executadas para um determinado tipo de dado
// possiveis retornos 
// QUANDO ENCONTRA -> retorna o indice do valor buscado
// QUANDO NÃO ENCONTRA -> retorna -1 -> porque é o unico valor que não corresponde a um indice válido
const resultado = data.findIndex(function (valor, index, array) {
    if (index < 2) {
        return false;
    }
    return valor.salario === 8100;
});
// Qual o valor de resultado? 2
// FIND -> mesma execução do findIndex porém ao invés de retornar a posição do elemento
// retorna o valor contido na posição encontrada
// retornos possiveis
// retorna o valor todo quando a condição é atendida
// retorna undefined quando a condição não é atendida por nenhum item da lista
const resultado2 = data.find((valor, index, array) => {
    return valor.salario === 8100;
});
// qual o valor de resultado2? 8100 ou o objeto inteiro ? 
// { nome: 'Cristina Avila', sexo: 'F', salario: 8100, } 
// FILTER -> quando precisamos de uma nova lista que atenda a uma determinada condição
// OBS: encontrando ou não algum registro que atenda a condição
// o retorno será sempre uma nova lista do mesmo tipo que a original
const novaLista = data.filter((valor, index, array) => {
    return valor.salario > 9000;
});
// resultado do filter?
/*
[]
*/
// MAP -> mapear uma determinada lista e retornar uma cópia com as propriedades que a gente quiser
// retorno sempre será uma nova lista (cópia) do mesmo tamanho
const salariosComDesconto = data.map((valor, index, array) => {
    return valor.salario - (valor.salario * 10) / 100;
});
console.log(salariosComDesconto.map((v) => v.toFixed(2)));
console.log(salariosComDesconto);
// REDUCE -> quando precisamos ter 1 informação resultante de uma lista
// casos de uso -> ter a soma de total salarios
// SEM VALOR INICIAL PARA O ACUMULADOR - o valor inicial passa a ser a posicao [0] da lista
// e o valor passa a ser a posicao [1]
// COM VALOR INICIAL PARA O ACUMULADO - o valor de acumulador passa a ser o valor inicial e o segundo parametro "valor" passa a ser a posicao [0] da lista
const somaSalarios = data.reduce((acumulador, valor, index, array) => {
    return acumulador += valor.salario;
}, 0);
console.log(somaSalarios);
// SOME -> utiliza a regra lógica do OU ( || )
// caso de uso: olhar para todos os registros de uma lista e verificar se ALGUM atende a condição passada
// retornos possiveis -> true ou false
const salarioMenor100 = data.some((valor, index, array) => {
    return valor.salario < 1100;
});
// qual vai ser resultado do some? false
// EVERY -> utiliza a regra lógica do E (&&)
// caso de uso: olhar para todos os registros de uma lista e verificar se TODOS atendem a uma determinada condição
// retornos possiveis -> true ou false
const salarioMenos100Every = data.every((valor, index, array) => {
    return valor.salario < 1100;
});
// qual vai ser resultado do every? true
// SORT -> ordena uma lista em uma ordem especifica (ASC ou DESC)
salariosComDesconto.sort((atual, proximo) => atual - proximo);
// atual -> 2925 
// proximo -> 1080
// 
// do resultado de atual - proximo o retorno é positivo? entao o atual é maior
// [0] -> 7290
// [1] -> 7290
// [2] -> 4680.3150000000005
// [3] -> 2925
// [4] -> 2250.9
// [5] -> 1575
// [6] -> 1080
data.sort((a, b) => {
    return a.nome.localeCompare(b.nome); // 1 0 -1
    // Claudio
    // Claúdia
});
