// EXEMPLO CONDICIONAL SIMPLES
// if(numeroAtual > 0) {
//     // SIM - aqui só executa se a resposta para a condição ou comparação for SIM/true
//     // é positivo

// } 

// else {
//     // NAO - aqui só executa se a resposta para a condição ou comparação for NAO/false
//     // é negativo
// } 


// LISTA 2 - EXERCICIO 1

/*

  Crie uma variável JavaScript e coloque nela o valor de sua idade.
  Mostre no html usando o document.write() o dado contido na
  variável junto da frase "Minha idade é x anos", sendo "x" o valor
  armazenado na sua variável.

*/

// let idade = Number(window.prompt('Digite sua idade: '));

// // !F -> V

// if( !idade ) {
//   document.write(`Idade inválida!`)
// } else {
//   document.write(`Minha idade é ${idade} anos`)
// }




// LISTA 2 - EXERCICIO 2

/*

  Crie três variáveis JavaScript, em duas delas atribua os valores que
  você quiser e na outra atribua o valor da soma das duas primeiras
  variáveis. Apresente valor da soma no documento html junto da
  frase "A resultado da soma de x e y é z", sendo x o valor armazenado
  na primeira variável, y o valor armazenado segunda variável e z o
  valor armazenado na terceira variável

*/

// let x = window.prompt('Digite a variável X');

// if(x !== null) {
//   x = Number(x.replace('.', '').replace(',', '.'))
// }

// if(!x) {
//     document.write(`Número inválido`);
// } else {
//     let y = window.prompt('Digite a variável Y');

//     if(y !== null) {
//       y = Number(y.replace('.', '').replace(',', '.')) 
//     }

//     if(!y) {
//         document.write(`Número inválido`);
//     } else {
//         let z = x / y
//         document.write(`O resultado da divisão ${x} e ${y} é ${z}.`);
//     }
// }


// LISTA 2 - EXERCICIO 3

/*

  Crie três variáveis, na primeira variável coloque o total de uma
  compra, por exemplo 149.90. Na segunda variável coloque a
  quantidade de parcelas, por exemplo 2. Na terceira variável coloque
  o valor da parcela. Apresente no documento html as seguintes
  informações:
  "O valor total da compra foi R$_,_"
  "Forma de pagamento: _x de R$_,_"

*/

// let totalCompra = prompt('Digite o total da compra: ')

// if(totalCompra !== null) {
//     totalCompra = Number(totalCompra.replace('.', '').replace(',', '.'))  // 1.149,90 -> 1149.90
// }

// if(!totalCompra) {
//     document.write('Valor inválido')

// } else {

//     let quantidadeParcelas = prompt('Digite a quantidade de parcelas aqui: ')

//     if(quantidadeParcelas !== null) {
//         quantidadeParcelas = parseInt(quantidadeParcelas.replace('.', '').replace(',', '.')) // 1.5 -> 1
//     }

//     if(!quantidadeParcelas) {
//         document.write('Valor inválido')

//     } else {

//         let valorParcela = totalCompra / quantidadeParcelas

//         document.write(`O valor total da compra foi R$${totalCompra} <br>`)
//         document.write(`Forma de pagamento: ${quantidadeParcelas} de R$${valorParcela}`)
//     }
// }

let totalCompra = prompt('Digite o total da compra: ')

if(totalCompra !== null) {
    totalCompra = Number(totalCompra.replace('.', '').replace(',', '.'))
}

if(!totalCompra) {
    document.write('Valor inválido');
} else {
    let quantiParc = prompt('Digite a quantidade de parcelas: ');

    if (quantiParc !== null) {
        quantiParc = parseInt(quantiParc.replace('.', '').replace(',', '.'))
    }

    if (!quantiParc) {
        document.write('Valor inválido')
    } else {
        let valorParc = totalCompra / quantiParc

        document.write(`O Valor total da compra foi ${totalCompra.toFixed(2)}`)
        document.write(`Forma de pagamento foi em ${quantiParc} vezes, Cada parcela será no valor de R$${valorParc.toFixed(2)}`)
    }
}


// LISTA 2 - EXERCICIO 4

/*

  Crie duas variáveis. Na primeira coloque um total de minutos e
  defina um valor para ela (por exemplo, minutos = 120). Na segunda
  coloque o total em segundos destes minutos armazenados na primeira variável. 
  Apresente no documento html a seguinte
  informação: "_ minutos equivale à _ segundos!"

*/






// LISTA 2 - EXERCICIO 5

/*

  Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
  segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
  Calcule a média das notas e armazene na quinta variável criada.
  Apresente no documento html a seguinte informação:
  "O aluno _____ ficou com média _,_"

*/
