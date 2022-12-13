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
    // lista de salario dos funcionarios do sexo Feminino
    let salarioTotalM = 0;
    let salarioTotalF = 0;
    let confirma = true;

    do {
        let salario = prompt("Informe o salário do funcionário: ")
        salario = verificaDecimalPositivo(salario)

        let sexo = prompt("Informe o sexo do funcionário (M - masculino, F - feminino): ").toUpperCase()

        if(sexo === 'M') {
            salarioTotalM += salario
        }

        if(sexo === 'F') {
            salarioTotalF += salario
        }

        confirma = confirm('Deseja continuar cadastrando?') // ok => true // cancel => false

    }while(confirma)

    document.write(`Salário total do sexo Masculino = R$${salarioTotalM.toFixed(2)}<br>`)
    document.write(`Salário total do sexo Feminino = R$${salarioTotalF.toFixed(2)}`)

    // while(confirma) {
    //     let salario = prompt("Informe o salário do funcionário: ")
    //     salario = verificaDecimalPositivo(salario)

    //     let sexo = prompt("Informe o sexo do funcionário (M - masculino, F - feminino): ")

    //     if(sexo === 'M') {
    //         salarioTotalM += salario
    //     }

    //     if(sexo === 'F') {
    //         salarioTotalF += salario
    //     }

    //     confirma = confirm('Deseja continuar cadastrando?') // ok => true // cancel => false
    // }


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




