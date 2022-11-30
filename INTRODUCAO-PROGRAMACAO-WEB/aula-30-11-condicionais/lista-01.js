

/*
 > (maior que)
 < (menor que)
 >= (maior ou igual que)
 <= (menor ou igual que)

 == (igual) -> só olha pro valor
 != (diferente) -> só olha pro valor

 === (estritamente igual - idêntico)  -> olha pro valor e para o tipo de dado
 !== (estritamente diferente - nada a ver)

*/

/*

-> estruturas condicionais - desvio de fluxos

 o numero atual é maior a 0?
    se sim 
		é positivo
		anotar o numero
	senão 
		é negativo
		descartar o numero

*/

 
// EXEMPLO CONDICIONAL SIMPLES
// if(numeroAtual > 0) {
//     // SIM - aqui só executa se a resposta para a condição ou comparação for SIM/true
//     // é positivo

// } 

// else {
//     // NAO - aqui só executa se a resposta para a condição ou comparação for NAO/false
//     // é negativo
// } 


// LISTA 1 - EXERCICIO 1

/*

  Desenvolva um algoritmo que armazene o valor 10 em uma variável
  A e o valor 20 em uma variável B. A seguir (utilizando apenas
  atribuições entre variáveis) troque os seus conteúdos fazendo com
  que o valor que está em A passe para B e vice-versa. Ao final,
  escrever os valores que ficaram armazenados nas variáveis.

*/

// input de dados - window e document
// let A = window.prompt('Informe o valor a ser atribuido para A: ');
// let B = window.prompt('Informe o valor a ser atribuido para B: ');
// let C;

// C = A;
// A = B;
// B = C;

// console.log(`Valor A = ${A}`);
// console.log(`Valor B = ${B}`);





// LISTA 1 - EXERCICIO 2

/*

  Desenvolva um algoritmo para ler o número total de eleitores de um
  município, o número de votos brancos, nulos e válidos. Calcular e
  escrever o percentual que cada um representa em relação ao total
  de eleitores.

*/
// let totalEleitoresTexto = window.prompt('Informe o total de eleitores: ');

// if(totalEleitoresTexto !== null) {

//   let totalBrancosTexto = window.prompt('Informe o total de votos brancos: ');

//   if(totalBrancosTexto !== null) {
//     let totalNulosTexto = window.prompt('Informe o total de votos nulos: ');
    
//     if(totalNulosTexto !== null ) {
//       let totalValidosTexto = window.prompt('Informe o total de votos válidos: ');


//       if(totalValidosTexto !== null ) {
//         let totalEleitores = Number(totalEleitoresTexto);
//         let totalBrancos = Number(totalBrancosTexto);
//         let totalNulos = Number(totalNulosTexto);
//         let totalValidos = Number(totalValidosTexto);

//         console.log(`Total eleitores: ${totalEleitores}`)
//         console.log(`Total brancos: ${totalBrancos}`)
//         console.log(`Total nulos: ${totalNulos}`)
//         console.log(`Total validos: ${totalValidos}`)
      
//       } else {
//         document.write('Total de votos válidos não informado. Tente novamente')
//       }
//     } else {
//       document.write('Total de votos nulos não informado. Tente novamente')
//     }
//   } else {
//     document.write('Total de votos brancos não informado. Tente novamente')
//   }
// } else {
//   document.write('Total de eleitores não informado. Tente novamente')
// }



/*

pro JS os valores '', undefined, null ou 0 -> false

*/

// let totalEleitores = Number(window.prompt('Informe o total de eleitores: '));

// if(!totalEleitores) {
//   document.write('Total de eleitores não é válido! Tente novamente');

// } else {
  
//   let votosBrancos = Number(window.prompt('Informe o total de votos brancos: '));

//   if(!votosBrancos) {
//     document.write('Total de votos brancos não é válido! Tente novamente');
  
//   } else {
//     let totalNulos = Number(window.prompt('Informe o total de votos nulos: '));

//     if(!totalNulos) {
//       document.write('Total de votos nulos não é válido! Tente novamente');
    
//     } else {
//       let totalValidos = Number(window.prompt('Informe o total de votos válidos: '));

//       if(!totalValidos) {
//         document.write('Total de votos validos não é válido! Tente novamente');
//       } else {
//         let percentualBrancos = (votosBrancos * 100) / totalEleitores;
//         let percentualNulos = (totalNulos * 100) / totalEleitores;
//         let percentualValidos = (totalValidos * 100) / totalEleitores;

//         document.write(`<p>Total de eleitores: ${totalEleitores.toFixed(2)}</p>`);
//         document.write(`<p>Percentual de brancos: ${percentualBrancos.toFixed(2)}%</p>`);
//         document.write(`<p>Percentual de nulos: ${percentualNulos.toFixed(2)}%</p>`);
//         document.write(`<p>Percentual de validos: ${percentualValidos.toFixed(2)}%</p>`);

//       }
//     }
//   }
// }




// LISTA 1 - EXERCICIO 3

/*

  O custo de um carro novo ao consumidor é a soma do custo de
  fábrica com a porcentagem do distribuidor e dos impostos
  (aplicados ao custo de fábrica). Supondo que o percentual do
  distribuidor seja de 28% e os impostos de 45%, escrever um
  algoritmo para ler o custo de fábrica de um carro,calcular e escrever
  o custo final ao consumidor.

*/

let custoFabrica = Number(window.prompt('Informe o custo de fábrica do veículo: ').replace('.', '').replace(',', '.'));

// ''     -> 0 -> !false -> true
// null   -> 0 -> false
// 'zxxd' -> 0 -> false

if(!custoFabrica) {

  document.write("Valor inválido");

} else {

  let percentualAcrescimo = 28 + 45;
  let valorAcrescimo = (custoFabrica * percentualAcrescimo) / 100;
  let custoFinal = custoFabrica + valorAcrescimo;

  document.write(`<p>Custo Fábrica: ${custoFabrica}</p>`);
  document.write(`<p>Custo Final: ${custoFinal}</p>`);

}


// LISTA 1 - EXERCICIO 4

/*

Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, mais uma comissão também
fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por
ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.

*/




// LISTA 1 - EXERCICIO 5

/*

Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.

*/




// LISTA 1 - EXERCICIO 6

/*

Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

*/



// LISTA 1 - EXERCICIO 7

/*

As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.

*/



// LISTA 1 - EXERCICIO 8

/*

Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e imprima no terminal o nome e a quantidade de
letras que o nome possui, bem como a idade e o ano de nascimento
do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
2000”.

*/


// LISTA 1 - EXERCICIO 9

/*

Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;

*/



// LISTA 1 - EXERCICIO 10

/*

Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).

*/