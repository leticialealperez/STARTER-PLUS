/*

LÓGICA PROGRAMAÇÃO - aplicar todos esses fundamentos para resolver um problema

-> dados: 18 - input -> entrada de dados

-> informação - output -> representação do mínimo para maior idade - idade de alguém - pessoa avoada

-> estruturas condicionais - desvio de fluxos

*/

// DADOS - tipos

// 18 - number - idade, altura, peso, valor - inteiro ou real

// 'a' ou 'abc' - string - conjunto de caracters - '!@#%¨&98()787776' -> string 
// nome, cidade, email, cpf, data

// true ou false - boolean
// ativo, maior, promocao

// DECLARAÇÃO DE VARIÁVEIS - input

// var -> declaração global -> esta caindo em desuso

// let -> declaração local - tenho acesso somente onde declaração/criada

// const -> declaração local - porém não pode ser mofificada/reatribuida

/* 

let idade = 18;
let nome = 'João';
let ativo = true;


const altura = 73.5;
altura = 87.0; // ISSO DÁ ERRO - cuidado!

ativo = false; // ISSO DÁ BOM - vai em frente!

*/

// OPERADORES 

// ARITMÉTICOS -> +, -, *, /, %, **  -> (valor1 OPERADOR valor2)
/* let num1 = 10;
let num2 = 20;
 */
// num1 + num2 = 30;
// num1 - num2 = 10;
// num1 * num2 = 200;
// num1 / num2 = 2;
// num1 % num2 = 10;
// num1 ** 2 = 100;


// DE ATRIBUIÇÃO -> =, +=, -=, *=, /=, %=, **=

// let num3 = 5;

// num3 += 2
// num3 = num3 + 2   é igual ao de cima
// 7

// num3 -= 2
// num3 = num3 - 2  é igual ao de cima
// 3

// num3 *=2
// num3 = num3 * 2
// 10

// num3 /=2
// num3 = num3 / 2
// 2.500000


// num3 %=2
// num3 = num3 % 2
// 1


// DE COMPARAÇÃO ->  > (maior que), < (menor que), >= (maior OU igual), <= (menor OU igual), == (igual), != (diferente), === (estritamente igual), !== (estritamente diferente)

//let num1 = '5';
//let num2 = 5;

// num1 == num2 (?) true - ignora o tipo e considera apenas o valor
// num1 != num2 (?) false - ignora o tipo e considera apenas o valor

// num1 === num2 (?) false - identico - igual em tipo e em valor
// num1 !== num2 (?) true - não são identicos - igual em valor mas não em tipo

let num1 = 5;
let num2 = 10;

// num1 > num2 -> false  sempre o da esquerda submetido à comparação com o da direita
// num1 < num2 -> false

// num1 >= num2 -> maior(F) OU igual(V) => false
// num1 <= num2 -> menor(V) OU igual(F) => true


// LÓGICOS

// OU -> ||

// E -> &&

// NAO -> !
