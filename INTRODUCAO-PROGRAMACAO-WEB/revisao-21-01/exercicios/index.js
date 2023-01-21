/*

10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

*/

function exercicio10(){
    let altura = Number(prompt("Digite a altura da parede"))
    let largura = Number(prompt("Digite a largura da parede"))

    let area = altura * largura

    let tinta = area / 2

    alert(`A quantidade de litros de tinta vai ser: ${tinta}l.`)
}


/*

12) Crie um programa que leia o preço de um produto, calcule e mostre o
seu PREÇO PROMOCIONAL, com 5% de desconto.

*/
function exercicio12() {
    let preco = Number(prompt('Escreva o preço do produto'))

    let desconto = (preco * 5) / 100

    let precoFinal = preco - desconto

    alert(`O preço final é ${precoFinal}`)
}




/*

13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre
o seu novo salário, com 15% de aumento.

*/
function exercicio13() {
    let salario = Number(prompt("Digite o salário atual:"))
    let aumento = (salario * 15) / 100
    let novoSalario = salario + aumento
    alert(`O novo salário vai ser: R$${novoSalario}`)
}


/*

14) A locadora de carros precisa da sua ajuda para cobrar seus serviços.
Escreva um programa que pergunte a quantidade de Km percorridos por um carro
alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço
total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

*/
function exercicio14() {
    let kmPercorridos = Number(prompt('Digite a quantidade de km percorridos'))
    let diasAlugado = Number(prompt('Digite quantos dia o carro foi alugado'))

    let totalAluguel = diasAlugado * 90
    let totalKm = kmPercorridos * 0.20

    let totalGeral = totalKm + totalAluguel

    alert (`O preço total a pagar é ${totalGeral}`)
}



/*

16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de
um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos
ele já fumou. 
Considere que um fumante perde 10 min de vida a cada cigarro.
Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

*/


function exercicio16() {
    let qtdCigarros = Number(prompt("Digite quantos cigarros por dia você fuma:"))
    let anos = Number(prompt("Há quantos anos você fuma?"))
    let totalDias = anos * 365
    let totalCigarros = qtdCigarros * totalDias
    let minutosPerdidos = totalCigarros * 10
    let horasPerdidas = minutosPerdidos / 60
    let diasPerdidos = horasPerdidas / 24


    alert(`Você perdeu ${diasPerdidos.toFixed(2)} dias de vida. Pare de fumar!`)
}




/*

23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um programa que
leia nome, sexo e o valor das compras do cliente e calcule o preço com
desconto. Sabendo que:
- Homens ganham 5% de desconto
- Mulheres ganham 13% de desconto
*/

function exercicio23() {
    let nome = prompt("Digite o nome do cliente:")
    let genero = prompt("Digite 'M' para masculino e 'F' para feminino")
    let valorCompra = Number(prompt("Digite o valor da compra:"))

    if(genero === 'M'){
        let desconto = (valorCompra * 5) / 100
        let valorFinal = valorCompra - desconto
        alert(`O valor da compra com desconto vai ser de: R$${valorFinal.toFixed(2)}`)
        
    }else if(genero === 'F') {
        let desconto = (valorCompra * 13) / 100
        let valorFinal = valorCompra - desconto
        alert(`O valor da compra com desconto vai ser de: R$${valorFinal.toFixed(2)}`)
        
    }else {
        alert('Gênero inválido! Escolha M ou F')
    }
}

/*

24) Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
viagens até 200Km e R$0.45 para viagens mais longas.

*/
function exercicio24() {
    let distancia = parseInt(prompt('Digite a distância que deseja percorrer'))

    if(distancia > 0 && distancia <= 200){
        let valorDistancia= distancia * 0.50

        alert(`O valor a ser cobrado é ${valorDistancia}`)

    }else if(distancia > 200){
        let valorDistancia = distancia * 0.45

        alert (`O valor a ser cobrado é ${valorDistancia}`)
    }else{

        alert(`O valor deve ser positivo para realizar o cálculo`)
    }
}



/*

25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. 
Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.

*/

function exercicio25() {
    let a = Number(prompt('Digite o valor do lado A'))
    let b = Number(prompt('Digite o valor do lado B'))
    let c = Number(prompt('Digite o valor do lado C'))

    if(a < b + c && b < a + c && c < a + b) {
        alert('É um triângulo')
    } else {
        alert('Não é um triângulo')
    }
}


/*

28) Faça um programa que leia a largura e o comprimento de um terreno
retangular, calculando e mostrando a sua área em m². O programa também
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
- Acima de 500m² = TERRENO VIP

*/

function exercicio28() {
    let larguraTerreno = Number (prompt('Digite a largura do terreno'))
    let comprimentoTerreno = Number(prompt('Digite o comprimento do terreno'))
    let tamanhoTerreno = larguraTerreno*comprimentoTerreno

    if(tamanhoTerreno < 100){
        alert('Terreno Popula')
        
    }else if(tamanhoTerreno <= 500 ){
        alert('Terreno Master')

    }else{
        alert('Terreno VIP')
    }
}



/*

31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

0 - Pedra
1 - Papel
2 - Tesoura

*/

function exercicio31(){
    let opcaoUsuario = Number(prompt("Digite uma opção:\n0- Pedra\n1- Papel\n2- Tesoura"))

    switch(opcaoUsuario) {
        case 0:
            alert("Jogador escolheu Pedra")
        break;

        case 1: 
            alert("Jogador escolheu Papel")
        break

        case 2:
            alert("Jogador escolheu Tesoura")
        break

        default:
            alert("Opção escolhida pelo usuário é inválida")
    }

    let opcaoComputador = parseInt((Math.random() * 3)) // converter o resultado para inteira 0.145784688 * 4

    switch(opcaoComputador) {
        case 0:
            alert("Computador escolheu Pedra")
        break;

        case 1: 
            alert("Computador escolheu Papel")
        break

        case 2:
            alert("Computador escolheu Tesoura")
        break
    }

    if(opcaoUsuario === opcaoComputador) {
        alert("Empate!")
    } else {

        // Usuario 0 -> só ganha se o computador escolher 2
        // usuario 1 -> só ganha se o computador escolher 0
        // usuario 2 -> só ganha se o computador escolher 1

        if((opcaoUsuario === 0 && opcaoComputador === 2) || (opcaoUsuario === 1 && opcaoComputador === 0) || (opcaoUsuario === 2 && opcaoComputador === 1) ) {
            alert('Você ganhou!')
        }else {
            alert('O computador ganhou!')
        } 

    }
}


/*

32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 0 e 5
o jogador vai tentar descobrir qual foi o valor sorteado

*/

function exercicio32(){
    let opcaoComputador = parseInt((Math.random() * 6)) // converter o resultado para inteira 0.145784688 * 4
    let opcaoUsuario = parseInt(prompt('Digite um número entre 0 e 5 e descubra qual foi o número que o cmputador sorteou'))

    alert(`Computador: ${opcaoComputador}`)
    alert(`Usuário: ${opcaoUsuario}`)

    if(opcaoComputador === opcaoUsuario){
        alert('Você acertou o número sorteado')
    }else{
        alert('Você errou o número sorteado')
    }
}





