// saldo do Usuario - OK
// opções - visualizar o saldo, sacar, depositar, sair/cancelar

let saldo = 100.50
let opcaoSelecionada = 0;

function executarCaixaEletronico() {
    
    while(opcaoSelecionada !== 4) {
        opcaoSelecionada = parseInt(prompt("1 - Mostrar saldo \n 2 - Sacar \n 3 - Depositar \n 4 - Cancelar e Sair"))

        if(!opcaoSelecionada) {
            alert("Operação inválida. Tente novamente!")
            executarCaixaEletronico()
        }

        switch(opcaoSelecionada) {
            case 1:
                // visualizar o saldo
                mostrarSaldo(saldo)
                executarCaixaEletronico()
            break

            case 2: 
                // sacar
                let valorSaque = parseInt(prompt("Informe o valor a ser sacado (R$): "))

                // executar uma função que verifique o valor informado e o saldo disponivel
                saldo = sacar(saldo, valorSaque)
                executarCaixaEletronico()
            break

            case 3:
                // depositar
                let valorDeposito = parseInt(prompt("Informe o valor a ser Depositado (R$): "))

                // executar uma função que verifique o valor informado e o saldo disponivel e realize o deposito
                saldo = depositar(valorDeposito, saldo)
                executarCaixaEletronico()
            break

            case 4: 
                console.log(opcaoSelecionada)
            break

            default:
                alert("Operação inválida. Digite um valor correspondente as opções informadas.")

        }
    }

    
}

function mostrarSaldo(valorSaldoUsuario) {
    alert(`Seu saldo é de R${valorSaldoUsuario.toFixed(2)}`)
}

function sacar(saldoUsuario, valorSaque) {

    // V || F || V => V
    // verificando o erro do usuário, valores negativos, valores que não são multiplos de 5
    if(!valorSaque || valorSaque < 0 || valorSaque % 5 !== 0) {
        alert("Valor informado é inválido. Digite um número inteiro, positivo e multiplo de 5")
        return saldoUsuario
    }

    // verificar se ele tem saldo suficiente disponivel em conta 
    // temos que levar em consideração a taxa de 4.5
    const taxa = 4.5
    const totalSaque = valorSaque + taxa

    if(totalSaque > saldoUsuario) {
        alert("Você não possui saldo suficiente para esta transação. Tente novamente!")
        return saldoUsuario
    }

    const saldoAtualizado = saldoUsuario - totalSaque

    mostrarSaldo(saldoAtualizado)
    return saldoAtualizado
    
}

function depositar(valorDeposito, saldoUsuario) {
    
    if(!valorDeposito || valorDeposito < 0) {
        alert("Valor inválido para deposito. Deve ser um valor numérico positivo!")
        return saldoUsuario
    }


    const saldoAtualizado = saldoUsuario + valorDeposito

    mostrarSaldo(saldoAtualizado)

    return saldoAtualizado
    
}