/*
. Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis.
*/

function exercicio1() {
    let A = Number(prompt("Digite o valor A: "))

    if(!A) {
        alert("Você precisa informar o valor para A")
        return
    }

    let B = Number(prompt("Digite o valor B: "))

    if(!B) {
        alert("Você precisa informar o valor para B")
        return
    }

    let C
    C = A
    A = B
    B = C

    document.write(`<p>O valor de A é ${A}</p>`)
    document.write(`<p>O valor de B é ${B}</p>`)
}


/*

2. Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores

*/

function exercicio2() {
    let totalEleitores = Number(prompt("Informe o número total de eleitores do município: "))

    if(!totalEleitores) {
        alert("Você precisa informar o número total de eleitores.")
        return
    }

    let votosBrancos = Number(prompt("Informe o número total de votos brancos: "))

    if(!votosBrancos || votosBrancos > totalEleitores) {
        alert("Votos brancos inválidos")
        return
    }   

    let votosNulos = Number(prompt("Informe o número total de votos nulos: "))

    if(!votosNulos || (votosNulos + votosBrancos) > totalEleitores) {
        alert("Votos nulos inválidos. A somatória dos votos nulos e brancos não devem ser maior que o número total de eleitores.")

        return
    }

    let votosValidos = Number(prompt("Informe o número total de votos válidos: "))

    if(!votosValidos || (votosBrancos + votosNulos + votosValidos) > totalEleitores) {
        alert("Votos válidos inválidos. A somatória dos votos nulos, brancos e válidos não devem ser maior que o número total de eleitores.")

        return
    }

    let percentualBrancos = (votosBrancos * 100) / totalEleitores;

    let percentualNulos = (votosNulos * 100) / totalEleitores;

    let percentualValidos = (votosValidos * 100) / totalEleitores;

    document.write(`<p>Percentual total de votos brancos ${percentualBrancos.toFixed(2)}%</p>`)
    document.write(`<p>Percentual total de votos nulos ${percentualNulos.toFixed(2)}%</p>`)

    document.write(`<p>Percentual total de votos válidos ${percentualValidos.toFixed(2)}%</p>`)
}


/*
O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.

*/

function exercicio3() {
    let custoFabrica = prompt("Informe o custo de fábrica do veículo: ")

    if(custoFabrica === null) {
        alert("Operação cancelada. Você precisa informar o custo de fábrica do veículo.")

        return
    }

    // Ex: zsdsdfsds
    custoFabrica = Number(custoFabrica.replace('.', '').replace(',', '.')) // 10.000,00 -> 10000.00

    if(!custoFabrica) {
        alert("Valor de fábrica inválido. Tente novamente!")

        return
    }

    let percentualDistribuidor = 28
    let percentualImpostoFabrica = 45
    let percentualTotalAcrescimo = percentualDistribuidor + percentualImpostoFabrica

    let valorAcrescimo = (percentualTotalAcrescimo * custoFabrica) / 100

    let custoTotalVeiculo = valorAcrescimo + custoFabrica

    document.write(`<p>Custo fábrica: ${custoFabrica.toFixed(2)}</p>`)
    document.write(`<p>Acrescimo: ${valorAcrescimo.toFixed(2)}</p>`)
    document.write(`<p>Custo total: ${custoTotalVeiculo.toFixed(2)}</p>`)

}


/*

Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, mais uma comissão também
fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.

salarioFixo
10 * 10000

*/

function exercicio4() {
    let totalCarrosVendidos = Number(prompt("Informe o total de carros vendidos pelo funcionário: "))

    if(!totalCarrosVendidos) {
        alert("Total de carros vendidos inválido.")
        return
    }

    let valorCarro = prompt("Informe o valor de cada carro: ")

    if(valorCarro === null) {
        alert("Operação cancelada!")

        return
    }

    valorCarro = Number(valorCarro.replace('.', '').replace(',', '.'))

    if(!valorCarro) {
        alert("Valor inválido. Tente novamente!")
    }

    let salarioFixo = prompt("Informe o valor do salário fixo do funcionário: ")

    if(salarioFixo === null) {
        alert("Operação cancelada!")

        return
    }

    salarioFixo = Number(salarioFixo.replace('.', '').replace(',', '.'))

    if(!salarioFixo) {
        alert("Valor inválido. Tente novamente!")
    }

    let valorFixoRecebidoPorCarro = prompt("Informe o valor fixo recebido por carro vendido: ")

    if(valorFixoRecebidoPorCarro === null) {
        alert("Operação cancelada!")

        return
    }

    valorFixoRecebidoPorCarro = Number(valorFixoRecebidoPorCarro.replace('.', '').replace(',', '.'))

    if(!valorFixoRecebidoPorCarro) {
        alert("Valor inválido. Tente novamente!")
    }

    let totalVendas = valorCarro * totalCarrosVendidos
    let valorpercentualTotalVendas = (totalVendas * 5) / 100;

    let salarioTotal = salarioFixo + (valorFixoRecebidoPorCarro * totalCarrosVendidos) + valorpercentualTotalVendas

    document.write(`<p>Salário total do funcionário: ${salarioTotal.toFixed(2)} </p>`)
    document.write(`<p>Salário fixo: ${salarioFixo.toFixed(2)} </p>`)
    document.write(`<p>5% do Total vendas: ${valorpercentualTotalVendas.toFixed(2)} </p>`)
    document.write(`<p>Adicional total por carro vendido: ${(valorFixoRecebidoPorCarro * totalCarrosVendidos).toFixed(2)} </p>`)

}

/*

Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit

*/

function exercicio5() {
    let celsius = prompt("Digite a temperatura em ºC: ")

    if(celsius === null) {
        alert("Operação cancelada")
        return
    }

    celsius = parseFloat(celsius.replace('.', '').replace(',', '.'))

    if(!celsius) {
        alert("Informação inválida. Tente novamente!")
        return
    }

    // (0 °C × 9/5) + 32 = 32 °F
    let fahrenheit = (celsius * (9 / 5)) + 32

    document.write(`<p>${celsius} ºC => ${fahrenheit}ºF </p>`)
}



/*

Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

*/

function exercicio6() {
    let numero1 = Number(prompt("Informe o valor 1:"))

    if(!numero1) {
        alert("Número 1 inválido")
        return
    }

    let numero2 = Number(prompt("Informe o valor 2:"))

    if(!numero2) {
        alert("Número 2 inválido")
        return
    }

    if(numero1 > numero2) {
        document.write(`Primeiro é maior`)
    } else if (numero1 < numero2) {
        document.write(`Segundo é maior`)
    } else {
        document.write(`Os valores informados são iguais`)
    }
}

/*

As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.

*/

function exercicio7() {
    let quantidade = Number(prompt("Informe a quantidade total de maçãs compradas: "))

    if(!quantidade) {
        alert("Valor inválido")
        return
    }

    let totalCompra;

    if(quantidade < 12) {
        totalCompra = quantidade * 0.3
    } else {
        totalCompra = quantidade * 0.25
    }

    document.write(`<p>Total da compra R$${totalCompra.toFixed(2)}`)
}


/*

    Escreva um algoritmo que tenha como valores de entradas o nome
    e idade do usuário e imprima no terminal o nome e a quantidade de
    letras que o nome possui, bem como a idade e o ano de nascimento
    do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em
    2000”.

*/

function exercicio8() {
    let nome = prompt("Informe o nome: ")

    if(!nome) { // ''
        alert("Você precisa informar o nome para continuar")

        return
    }

    let idade = Number(prompt("Informe a idade: "))

    if(!idade) {
         alert("Você precisa informar a idade para continuar")

        return
    }


    let letras = nome.length // [J][o][a][o] -> nome
    let anoNascimento = 2022 - idade

    document.write(`Quantidade de letras: ${letras}, Ano de Nascimento: ${anoNascimento}`)
}

/*

. Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar;


*/

function exercicio9() {
    let valor = Number(prompt("Informe um número: "))

    if(!valor || valor < 0) {
        alert("Valor inválido. Deve ser positivo")
        return
    }

    let retorno = verificaPar(valor)

    if(retorno) {
        document.write("É par!")
    } else {
        document.write("É impar!")
    }

}

function verificaPar(numero) {
    if(numero % 2 === 0) {
        return true
    } else {
        return false
    }
}


/*
Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/

function exercicio10() {
    let anoAtual = Number(prompt("Informe o ano atual: "))

    if(!anoAtual || anoAtual < 2000) {
        alert("Valor inválido")
        return
    }

    let anoNascimento = Number(prompt("Informe o ano de nascimento: "))

    if(!anoNascimento || anoNascimento > anoAtual) {
        alert("Valor inválido!")
        return
    }

    let idade = anoAtual - anoNascimento


    if(idade < 16 ) {
        document.write("Não pode votar. Menor de idade!")
    
    } else if(idade >= 18 && idade < 65) {
        document.write("Pode votar. Voto obrigatório!")
        
    } else {
        document.write("Pode votar. Voto opcional!")
    }
}