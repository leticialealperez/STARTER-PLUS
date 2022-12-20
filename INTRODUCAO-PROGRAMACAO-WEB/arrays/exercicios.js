function exercicio3(){
    let numerosPerfeito = [] // 4

    for(let contador = 1; numerosPerfeito.length < 4; contador++){
        let retorno = verificaPerfeito(contador)

        if(retorno === true){
            numerosPerfeito.push(contador)
            console.log(`FOR - ${contador}`)
        }
    }

    console.log(numerosPerfeito)
}

function verificaPerfeito(numero){
    // a soma dos divisores deve ser igual ao numero verificado - 6

    let somaDivisores = 0

    for(let contador = 1; contador < numero; contador++){

        if(numero % contador === 0){
            somaDivisores += contador
        }

        

    }

    // 0 + 1 + 2 + 3 = 6

    if(somaDivisores === numero){
        return true
    } else {
        return false
    }
}