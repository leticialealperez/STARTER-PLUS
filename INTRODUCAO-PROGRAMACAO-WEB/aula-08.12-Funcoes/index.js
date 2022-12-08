
// argumento - soma(15, 10) - são os dados passados para as funções no momento da chamada da função


// parametro - são os dados que serão recebidos na definição da função


soma(15, 10) // 15 argumento -> num1 parametro, 10 argumento -> num2 parametro
soma(20, 30)


// retorno - resposta da função/rotina após realizar os comandos necessários



// nao possui retorno e não possui parametros
// function boasvindas() {
//     document.write('Bem vindo ao site!')
// }


// nao possui retorno mas possui parametros
// function soma(num1, num2) {
//     document.write(`${num1 + num2}`)
// }

// escopo GLOBAL
// let numero = 10;

// possuem retorno e não possuem parametro
function verificarPar() {

    if(numero % 2 === 0) {

        // escopo LOCAL
        let teste = 'Teste'

        if(true) {
            console.log(teste)

        }

        return true
    } else {
        
        return false
    }

}



// possui parametros e possuem retornos
function calcular(num1, num2) {
    return num1 + num2
}

let algumaCoisa = prompt('Informe alguma coisa: ')

let soma = calcular(15, 10)
let soma2 = calcular(100, 50)