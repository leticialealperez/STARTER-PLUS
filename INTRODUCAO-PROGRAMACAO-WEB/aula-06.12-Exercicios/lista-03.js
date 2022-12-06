// LISTA 3 - EXERCICIO 1

/*

  Desenvolva um algoritmo que faça o cálculo do índice de massa
  corporal de uma pessoa. 
  
   ( peso ÷ (altura x altura)) 
  
  Esse algoritmo deve solicitar ao usuário
  que digite sua altura, em seguida solicitar que digite seu peso 
  
  e que lhe exiba o status. O status vai variar da seguinte forma:
    a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
    “Você está abaixo da faixa de peso ideal”;
    b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
    “Você está acima da faixa de peso ideal”;
    c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
    24,99, o status a ser mostrado será “Você está dentro da faixa
    de peso ideal”.

*/

// let peso = Number(prompt('Digite seu peso: '))
// let altura = Number(prompt('Digite sua altura: '))

// null, undefined, '', 0, false -> false -> Number('') -> 0 -> !false
// quando clicar no cancelar -> null
// primeiro verifico se ele digitou alguma coisa -> se ele não clicou no cancelar

// não digitar nada e clicar no OK -> ''
// let imc = peso / (altura * altura)

// if(imc < 18.5) {
//   // abaixo da faixa ideal
//   document.write(`Você está abaixo da faixa de peso ideal`)

// } else if(imc > 24.99) {
//   // acima da faixa ideal
//   document.write(`Você está acima da faixa de peso ideal`)

// } else {
//   // dentro da faixa ideal
//   document.write(`Você está dentro da faixa de peso ideal`)
// }

// LISTA 3 - EXERCICIO 2

/*

  Escreva um algoritmo que solicite 2 números e uma operação
  matemática. 
  
  operando (-) operador
  
  O algoritmo deve realizar o cálculo com os 2 números
  digitados conforme a operação informada.

*/
// operações => '+', '-', '/', '*', '%', '**'

// let numero1 = Number(prompt('Digite um numero'));
// let numero2 = Number(prompt('Digite outro numero'));
// let operacao = prompt('Digite o operador + - / * % ** ');

// switch (operacao) {
//   case '+':
//     document.write(`a soma é ${numero1 + numero2}`);
//     break;

//   case '-':
//     document.write(`a subtração é ${numero1 - numero2}`);
//     break;

//   case '/' : 

//     if(numero2 !== 0) {
//       document.write(`a divisão é ${numero1 / numero2}`)
    
//     } else {
//       document.write(`Não é possível dividir por zero!`)
//     }

//   break; 

//   case '*' : 
//     document.write(`a multiplicação é ${numero1 * numero2}`)
//   break; 

//   case '%' : 
//     document.write(`o resto da divisão é ${numero1 % numero2}`)
//   break; 

//   case '**' : 
//     document.write(`a exponenciação é ${numero1 ** numero2}`)
//   break; 

//   default: 
//      document.write(`Operador inválido!`)
//   break
// }

// LISTA 3 - EXERCICIO 3

/*

  Faça um algoritmo que simule um caixa eletrônico. 
  Nesse algoritmo a conta do usuário deve ser criada já com um saldo positivo. 
  
  O usuário precisa informar a quantidade de dinheiro que deseja
  retirar
  esse valor deve ser um número positivo,
  múltiplo de 5 
  e
  menor do que o saldo.
  Cada saque eletrônico cobra uma taxa de
  R$4.50.
   Ao final deve ser informado o saldo da conta
  caso dê tudo certo com o saque, 
  e se o usuário informar um valor maior que o
  saldo deve ser informado ao usuário que o mesmo não tem dinheiro
  suficiente em conta para realizar o saque.

  OBS: Na verificação se o valor do saque é maior que o saldo deve
  ser considerado e também contabilizado o valor da taxa a ser
  cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
  da taxa do saque não pode ser maior que o saldo disponível.

*/
// let saldo = 10000
// const taxa = 4.5
// let saque = Number(prompt("insira o saque: ")) // -50 + 4.5

//   if(saque > 0) {
//     // só se for positivo


//     if ((saque + taxa) > saldo) {
//      // nao tenho saldo sufuciente
//       document.write(`Não há saldo suficiente para o saque.`)
    
//     } else {
//       if (saque % 5 === 0) {
//         let saqueTotal = saque + taxa
//         saldo -= saqueTotal
//         // saldo = saldo - saqueTotal
//         document.write(`Saque e de ${saque} e o saldo e de ${saldo}`)
      
//       } else {
//         document.write(`O caixa possui apenas notas de R$5.`)
//       }
//     }


//   } else {
//     // é negativo
//     document.write(`Valor do saque deve ser um número positivo`)
//   }


// LISTA 3 - EXERCICIO 5

/*

Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela:

Idade           |          Peso          |    Categoria
Até 12 anos     |            -           |    Infantil
13 a 16 anos    |        Até 40kg        |  Juvenil leve
13 a 16 anos    |        Acima de 40kg   |  Juvenil pesado
17 a 24 anos    |        Até 45kg        |  Sênior leve
17 a 24 anos    | Acima de 45kg até 60kg |  Sênior médio
17 a 24 anos    | Acima de 60kg          |  Sênior pesado
Acima de 24 anos|            -           |    Veterano

*/

// let idade = Number(prompt('Digite a idade: '))
// let peso = Number(prompt('Digite o peso: '))

// if(idade <= 12) {
//     document.write(`Categoria infantil`)

// } else if(idade > 12 && idade <= 16) {
//    // entre 13 e 16 anos

//    if(peso <= 40) {
//     document.write(`Juvenil leve`)
//    } else {
//     document.write(`Juvenil pesado`)
//    }

// } else if(idade > 16 && idade <= 24) {
//   // entre 17 e 24 anos

//   if(peso <= 45) {
//     //Sênior leve
//     document.write(`Sênior leve`)
//   } else if(peso > 45 && peso <= 60) {
//     //Sênior medio
//     document.write(`Sênior médio`)
//   } else {
//     //Sênior pesado
//     document.write(`Sênior pesado`)
//   }

// } else {
//   document.write(`Categoria veterano`)
// }



// EXERCICIO 4

/*

. Escreva um algoritmo que percorra os números inteiros entre 1 e 250 (tá definido?)

e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.

*/

// for(let controle = 1; controle <= 250; controle++) {

//   if(controle % 3 === 0) {
//     console.log(`${controle} é multiplo de 3!`)
//   }

//   if(controle % 5 === 0) {
//     console.log(`${controle} é multiplo de 5!`)
//   }

// }



// EXERCICIO 8 

/*

 Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6

*/

// let multiplicando = Number(prompt('Informe o multiplicando: '));
// let iteracoes = Number(prompt('Informe a quantidade de iteracões: '));


// for(let contador = 1; contador <= iteracoes; contador++) {
//   let resultado = multiplicando * contador;

//   console.log(`${multiplicando} x ${contador} = ${resultado}`)
// }













// LISTA 3 - EXERCICIO 7

/*

  Escreva um programa que pergunte a velocidade de um carro. Caso
  ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
  multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
  km acima da velocidade permitida.

*/
