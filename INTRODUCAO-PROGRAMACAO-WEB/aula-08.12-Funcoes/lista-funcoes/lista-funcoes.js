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

    let impar = verificaImpar(numero)

    if(impar) {
        document.write(`É impar!`)
    } else {
        document.write(`É par!`)
    }
}

function verificaImpar(numero) {
    if(numero % 2 !== 0) {
        return true
    } else {
        return false
    }
}

/*

Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.

*/
function exercicio3() {
    let numero = prompt("Digite um número") 
    numero = verificaInteiroPositivo(numero)

    if(numero === 0) {
        alert("Operação cancelada por inconsistencia nos dados informados")
        return
    }

    // verificar se o numero informado é primo
    const primo = verificaPrimo(numero) // void => vazio => sem retorno

    if(primo) {
        document.write(`O numero ${numero} é primo!`)
    } else {
        document.write(`O numero ${numero} não é primo!`)
    }

}

function verificaInteiroPositivo(numeroString) {
    console.log(numeroString)
    const numeroInteiro = parseInt(numeroString) // float -> decimais  int -> parte inteira
    // 'abc' ou '' -> NaN -> false

    // verificando se foi digitado um valor válido !== '' ou 'abc' ou clique no cancelar
    if(!numeroInteiro) {
        alert("Valor inválido")
        return 0
    }

    // verificar se é positivo
    if(numeroInteiro <= 0) {
        alert("Precisar ser inteiro e positivo.")
        return 0
    }


    return numeroInteiro
}

function verificaPrimo(valor) {

    // 9 
    // 1 é divisor de todo e qualquer numero
    // o proprio valor é divisor dele mesmo 
    // só pode ser divisivel por 1 e por ele mesmo -> ter 2 divisores


    // 2, 3, 4, 5, 6, 7, 8
    if(valor === 0 || valor === 1) {
        return false
    }

    if(valor === 2) {
        return true
    }

    let divisores = 2;

    for(let contador = 2; contador < valor; contador++) {

        if(valor % contador === 0) {
            divisores++
        }
        
    }

    if(divisores > 2) {
        return false
    } 


    return true

}
