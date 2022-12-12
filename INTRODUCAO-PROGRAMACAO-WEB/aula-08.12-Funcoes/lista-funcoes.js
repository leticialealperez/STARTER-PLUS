/*

1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2).

*/

function exercicio1() {
    let nota1 = prompt("Digite a nota 1: ")
    nota1 = verificaInputNumerico(nota1)


    let nota2 = prompt("Digite a nota 2: ")
    nota2 = verificaInputNumerico(nota2)


    let nota3 = prompt("Digite nota 3: ")
    nota3 = verificaInputNumerico(nota3)

    let tipoMedia = prompt("Digite o tipo da média a ser calculada: ('A' -> aritmetica, 'P' -> ponderada)")

    let media = calculaMedia(nota1, nota2, nota3, tipoMedia.toUpperCase())
    // .toUpperCase() -> transforma qualquer string em MAIUSCULA

    document.write(`A média é ${media.toFixed(2)}`)
}

function verificaInputNumerico(valor) {
    if(valor === null) {
        alert("Operacao cancelou")
        return 0
    }

    valor = Number(valor.replace('.', '').replace(',', '.'))

    if(!valor) {
        alert("Valor inválido")
        return 0
    }

    return valor
}

function calculaMedia(primeiraNota, segundaNota, terceiraNota, tipo) {

    switch(tipo) {
        case 'A':
            let mediaAritmetica = (primeiraNota + segundaNota + terceiraNota) / 3
            return mediaAritmetica

        case 'P':
            let mediaPonderada = ((primeiraNota * 5) + (segundaNota * 3) + (terceiraNota * 2)) / 10
            return mediaPonderada

        default: 
            alert("Tipo de média inválida")
        break
    }
}


function exercicio2() {
    let numero = prompt("Digite um numero: ")

    numero = verificaInputNumerico(numero)

    let impar = verificaPar(numero)

    if(impar) {
        document.write(`É impar!`)
    } else {
        document.write(`É par!`)
    }
}

function verificaPar(numero) {
    if(numero % 2 !== 0) {
        return true
    } else {
        return false
    }
}