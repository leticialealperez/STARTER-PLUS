/*

-- REPETIÇÕES POR NUMEROS DEFINIDOS
      - FOR


for(1 ; 2 ; 3)

1 = DECLARAÇÃO e inicialização DA VARIAVEL DE CONTROLE
2 = Teste lógico pra saber se continua repetindo
3 = a forma de modificar o valor da variavel de controle

+ -

numero++

numero += 2
numero = numero + 2


numero--
numero = numero - 1
numero -= 2


++numero -> adiciona e segue a leitura da linha
numero++ -> adiciona ao final da leitura de toda a linha
--numero
numero--
*/

// for(let controle = 0; controle <= 10; numero++) {

//     //...
//     //...
//     //...
//     // 1a -> controle é 1
//     // 2a -> controle é 2
//     // 3a -> controle é 3
//     //10a -> controle é 10
// }


//..
//...


/*    

    -- REPETIÇÕES POR NUMERO INDEFINIDOS
      - WHILE
      - DO WHILE 
      
*/

// while - verifica e só se o resultado da verificação for TRUE ele executa/repete



// while(true) {

// }




// do while - primeiro executa e depois valida se vai repetir

// do {
//     //..

//     //..
// } while(false)

//..
//...


/*

Pedro tem 1,50m de altura e cresce 2 centímetros por ano, 
enquanto Lucas tem 1,10m de altura e cresce 3 centímetros por ano.

Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
    a. Lucas e Pedro tenham o mesmo tamanho;
    b. Lucas seja maior que Pedro

*/
// etapa1
let pedro = 150; // 1.50m -> 150cm
let lucas = 110;

let ano = 0;

while(pedro >= lucas) {
    pedro += 2;
    lucas += 3;

    ano++

    // console.log(`PEDRO: ${pedro}`);
    // console.log(`LUCAS: ${lucas}`);
    // console.log(`Quantidade ano: ${ano}`)

    if(pedro === lucas) {
        console.log(`Passados ${ano} anos o Lucas atingiu a altura do Pedro`)
    }

    if(lucas > pedro) {
        console.log(`Passados ${ano} anos o Lucas ficou maior que o Pedro`)
    }

}



