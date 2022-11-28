

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

/* 

if(numeroAtual > 0) {
    // SIM - aqui só executa se a resposta para a condição ou comparação for SIM/true
    // é positivo

} 

else {
    // NAO - aqui só executa se a resposta para a condição ou comparação for NAO/false
    // é negativo
} 

*/

/* // etapa 1
let primeiro = 10;
let segundo = 20;


// etapa 2 e 3
if(primeiro > segundo) {
    console.log(`O número ${primeiro} é o maior.`);

} else if(segundo > primeiro) {
    console.log(`O número ${segundo} é o maior.`);

} else {
    console.log(`Os numeros ${primeiro} e ${segundo} são iguais.`)
} */

// 100 > 100 -> nao
// 100 > 100 -> nao
// 100 === 100 -> sim

let quantidade = 5;
let valorCompra;

if(quantidade >= 12) {
    valorCompra = quantidade * 0.25;

} 
else {
    valorCompra = quantidade * 0.30;

}

console.log(`o valor da compra é R$${valorCompra}`);


/*

Escreva um algoritmo que tenha como valores de entradas o nome
e idade do usuário e 
imprima no terminal o nome e a quantidade de
letras que o nome possui, 
bem como a idade e o ano de nascimento
do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
2000”.

*/
/* 
// etapa 1
let nome = 'João';
let idade = 27;
let anoAtual = 2022;

// etapa 2
let quantidadeLetras = nome.length // capturar o tamanho da string = quantidade de caracters/espaços utilizados para armazenar esse dado
let anoNascimento = anoAtual - idade;

// etapa 3
console.log(`Nome: ${nome}, ${quantidadeLetras} letras`);
console.log(`Idade: ${idade}, nasceu em ${anoNascimento}`);


 */
/*

Crie um algoritmo que armazene um número inteiro positivo, 
e gere um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;

*/

// etapa 1
/* let numero = 10;
let resto = numero % 2; */

// 0 === PAR
// 1 === IMPAR


// 0 === !FALSE -> true -> PAR
// 1 === !TRUE -> false -> IMPAR
/* 
if(!resto){
    window.alert(`O número ${numero} é PAR!`);
    
} else {
   window.alert(`O número ${numero} é IMPAR!`);
} */


/*

10. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. 

se ela poderá ou não votar este ano

Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).

*/

// pode votar?

// sim
    // opcional ou obrigatório?

    // qualquer ( idade < 18) && (idade > 16) = 16 até 17 - opcional

    // 18 até 65 - obrigatório

    // maior que 65 - opcional


// nao



/*

  valorA = F
  valorB = F

  valorA || valorB = F

  só será false se ambas as condições forem false

*/

/*

  valorA = V
  valorB = V

  valorA && valorB = V

  só será true se ambas as condições forem true

*/

/*

  valorA = F

  !valorA => V

  inverte o valor lógico

*/

// LÓGICOS - || (ou), && (e), ! (nao)

// etapa 1 

let anoNascimento = 2009;
let anoAtual = 2022;
let idade = anoAtual - anoNascimento;


if(idade >= 16) {
    // SIM, pode votar

    // obrigatório?
    if(  ( idade >= 18 ) && ( idade <= 65)  ) {

        // SIM, possui idade entre 18 e 65 anos
        console.log(`Já pode votar. Idade ${idade}`);
        console.log(`Voto é obrigatório`);
    
    } else {

        // NAO, idade 16 ou 17 anos (maior ou igual a 16 e menor que 18), ou idade acima de 65
        console.log(`Já pode votar. Idade ${idade}`);
        console.log(`Voto é opcional`);
    }

} else {

    // NAO, é menor de idade
    console.log(`A idade é ${idade}, não pode votar. Menor de idade!`)
}