
// Onde está salvo nossa lista de correntistas preenchida? 
let listaCorrentistas = JSON.parse(localStorage.getItem('cadastros'))


// capturar o formulario lá do HTML
const formularioCadastro = document.getElementById('form_cadastro')

// adicionar um observador de eventoslog
// o evento é quando ocorrer o submit do formulario
formularioCadastro.addEventListener('submit', (evento) => {
    evento.preventDefault()
    

    //capturar o que foi digitado nos campos pelo usuario
    const nomeInputHTML = document.getElementById('nome').value 
    const numeroContaInputHTML = document.getElementById('numero-conta').value 
    
    // antes de cadastrar o novo correntista verificar se o número da conta já existe
    // ou seja, se já possui um correntista com o mesmo número de conta
    const respostaSome = listaCorrentistas.some((item) => {
       return item.numeroConta === numeroContaInputHTML
    })

    
    if(respostaSome === true) {
        alert("Esta conta já existe!")
        return
    }


    // aqui embaixo 
    // 1 - criar o objeto do novo correntista
    
        const novoCorrentista = {
            nome: nomeInputHTML,
            numeroConta: numeroContaInputHTML,
            transacoes: []
        }

    // 2 - adiciona-lo na lista de correntistas
    listaCorrentistas.push(novoCorrentista)

    alert('Correntista cadastrado com sucesso!')

    // 1 - O que será gravado no localStorage? ListaCorrentistas
    // 2 - Esse dado é do tipo primitivo? (string, number, boolean) Não. É um Array
    // 3 - O que o localStorage armazena? Somente String
    // 4 - Como converter o dado para salvar no localStorage? JSON.stringify

    localStorage.setItem('cadastros', JSON.stringify(listaCorrentistas))

})


