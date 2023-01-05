/*

Crie uma página que tenha o título "Contador de Cliques". Na página deve ter 2 botões, um deles deve estar escrito INCREMENTAR e o outro deve estar escrito ZERAR CONTADOR, logo abaixo dos botões deve ter um parágrafo contendo a seguinte frase "O contador está com 0 cliques".


*/
let clicar = 0 

// 2 - captutar o elemento que será modificado
let novoParagrafo = document.getElementById('paragrafo')

function clique() {
    // 1 - incrementar a variavel
    clicar++
    
    // 3 - modificar o conteúdo
    novoParagrafo.innerText = `O contador está em ${clicar} cliques`

}

function zerar() {
    clicar = 0
    novoParagrafo.innerText = `O contador está em ${clicar} cliques`
}