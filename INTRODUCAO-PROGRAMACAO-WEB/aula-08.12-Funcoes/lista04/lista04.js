/*

Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. 
No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. 

O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário.

- Sabemos quantas vezes vai repetir? (?????)

*/

function exercicio2() {

    // lista de salario dos funcionarios do sexo Masculino
    let listaSalarioM = []
    // lista de salario dos funcionarios do sexo Feminino
    let listaSalarioF = []

    let salarioTotalM = 0;
    let salarioTotalF = 0;
    let confirma = true;

    do {
        let salario = prompt("Informe o salário do funcionário: ")
        salario = verificaDecimalPositivo(salario)

        let sexo = prompt("Informe o sexo do funcionário (M - masculino, F - feminino): ").toUpperCase()

        if(sexo === 'M') {
            listaSalarioM.push(salario)
        }

        if(sexo === 'F') {
            listaSalarioF.push(salario)
        }

        confirma = confirm('Deseja continuar cadastrando?') // ok => true // cancel => false

    }while(confirma)

    // array => indice e valor
    // listaM => [1000]

    // mostrar no html o seguimte formato
    // 1ª posição do array = 1000,00
    // 2ª posição do array = 2000,00
    // 3ª posição do array = 2000,00
    document.write(`<h2>Lista Masculino</h2>`)
    for(let indice = 0; indice < listaSalarioM.length; indice++) {
        document.write(`<p>${indice + 1}ª posicao da lista M => ${listaSalarioM[indice]}</p>`)

        salarioTotalM += listaSalarioM[indice]
    } 
    document.write(`<p>Total de salário Masculino => ${salarioTotalM.toFixed(2)}</p>`)

    // somar todos os valores da listaSalarioM e mostrar o total
    document.write(`<h2>Lista Feminino</h2>`)
    for(let indice = 0; indice < listaSalarioF.length; indice++) {
        document.write(`<p>${indice + 1}ª posicao da lista F => ${listaSalarioF[indice]}</p>`)

        // indice => 0
        // indice => 1
        // indice => 2

        salarioTotalF += listaSalarioF[indice]
    } 
    document.write(`<p>Total de salário Feminino => ${salarioTotalF.toFixed(2)}</p>`)

    // somar todos os valores da listaSalarioF e mostrar o total

    


    // alert => apenas mostra uma mensagem com o botao ok para descongelar a tela
    // prompt => caixa de entrada com dois botoes ok => enviar os dados inputados e o cancel => cancelar a operacao => retorna uma string ou null
    // confirm => retorna um booleano => true => clica no ok // false => clica no cancel
}

function verificaDecimalPositivo(numeroString) {

    const numeroDecimal = parseFloat(numeroString) // float -> decimais  int -> parte inteira
    // 'abc' ou '' -> NaN -> false

    // verificando se foi digitado um valor válido !== '' ou 'abc' ou clique no cancelar
    if(!numeroDecimal) {
        alert("Valor inválido")
        return 0
    }

    // verificar se é positivo
    if(numeroDecimal <= 0) {
        alert("Precisar ser inteiro e positivo.")
        return 0
    }


    return numeroDecimal
}




