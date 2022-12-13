/*

1. Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que
lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;
c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”

*/

// toda vez que um return executar a função para sua execução

function exercicio1() {

    const altura = Number(prompt("Digite sua altura: "))

    // null, '', 0 -> !false
    if(!altura) {
        alert("Você precisa informar a altura para continuar. tente novamente!")
        // para a função QUE DEU RUIM
        return
    }

    const peso = Number(prompt("Digite sua peso: "))

    if(!peso) {
        alert("Você precisa informar o peso para continuar. tente novamente!")
        // para a função QUE DEU RUIM
        return
    }

    const imc = peso / (altura * altura);

    if(imc < 18.5) {
        document.write(`Você está abaixo da faixa de peso ideal.`)
    
    } else if(imc > 24.99) {
        document.write(`Você está acima da faixa de peso ideal.`)
    
    } else {
        document.write(`Você está dentro da faixa de peso ideal.`)
    }
    
}


function exercicio4() {

    document.write(`<h2> Multiplos de 3 </h2>`)
    for(let contador = 1; contador <= 250; contador++) {

        if(contador % 3 === 0) {
            document.write(`[${contador}], `)
        }
    }

    document.write(`<h2> Multiplos de 5 </h2>`)
    for(let contador = 1; contador <= 250; contador++) {

        if(contador % 5 === 0) {
            document.write(`[${contador}], `)
        }
    }
    
}

/*

11. Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16…

*/
function exercicio11() {
    
    for(let contador = 30; contador >= 1; contador--) {
        
        const primo = verificaPrimo(contador) // 30 -> 1ª   29 -> 2ª

        // se primo receber o valor true -> é primo
        // se primo tiver o valor false -> não é primo
        if(primo) {
            document.write(`[${contador}], `)
        }else {
            document.write(`${contador}, `)
        }
    }
}

function verificaPrimo(numero) { //30
    // primo ele só pode ter 2 divisores - 1 e ele mesmo
    let divisores = 2; // começamos com 2 pois todo numero é dividido por 1 e por ele mesmo

    for(let contador = 2; contador < numero; contador++) {
        // ex: 7
        // 2 até 6
        if(numero % contador === 0) {
            divisores++
        }
    }

    if(divisores === 2) {
        return true
    } else {
        return false
    }
}

/*

12. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.

soma = 0
numeroLido = 15 + 30 + 45 + 50
soma = soma + numeroLido


*/

function exercicio12() {
    let soma = 0;
    let negativos = 0;
    let positivos = 0;

    for(let contador = 1; contador <= 10; contador++) {

        let numeroLido = Number(prompt(`Digite o ${contador}º número: `))

        if(!numeroLido) {
            alert("Digite um número válido! Tente de novo")
            return
        }

        soma = soma + numeroLido;

        if(numeroLido < 0) {
            negativos++
        } else {
            positivos++
        }
    }

    let media = soma / 10;
    let percentualPositivos = (positivos * 100) / 10
     let percentualNegativos = (negativos * 100) / 10


    document.write(`<p>A média dos números lidos é ${media.toFixed(2)} </p>`)
    document.write(`<p>A quantidade de números positivos é ${positivos}, equivalente á ${percentualPositivos}% </p>`)
    document.write(`<p>A quantidade de números negativos é ${negativos}, , equivalente á ${percentualNegativos}%  </p>`)


}

/*

Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo

*/

function exercicio9() {
    let maior = 0; // substitui pelo valor mais distante do zero -> 
    let menor = 999; // substitui pelo valor mais proximo do zero -> 

    for(let contador = 1; contador <= 5; contador++) {
        const altura = Number(prompt(`Informe a ${contador}ª altura: `));

        if(!altura || altura < 0) {
            alert("Valor inválido. Executa novamente!")
            return
        }


        if(altura > maior) {
            maior = altura
        }

        if(altura < menor) {
            menor = altura
        }

    }

    document.write(`<p>A maior altura informada é ${maior.toFixed(2)}</p>`)
    document.write(`<p>A menor altura informada é ${menor.toFixed(2)}</p>`)

}

function teste() {
    let numero = prompt('Digite um numero decimal: ');


    // aqui verifica se o individuo clicou no cancelar
    if(numero === null) {
        alert("Você precisa informar um numero");
        return
    }

    numero = Number(numero.replace(',', '.'))

    if(!numero) {
        alert("Você não digitou um valor válido. Tenta de novo")
        return
    }

    document.write(`${numero.toFixed(2)}`)
}

