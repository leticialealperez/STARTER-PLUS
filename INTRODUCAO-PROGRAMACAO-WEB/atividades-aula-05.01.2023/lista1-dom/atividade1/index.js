function botao(){
    // 1 - capturar o elemento que será modificado lá do html
    // GET - busca
    let paragrafo = document.getElementById('paragrafo')


    let nome = prompt("Digite seu nome:")
    // mudar o conteúdo de TEXTO deste paragrafo
    // "E aí NOME_DIGITADO_PELO_USUARIO! Você está deixando o seu site dinâmico."
    paragrafo.innerHTML = `<span>E aí ${nome}! Você está deixando o seu site dinâmico.</span>`
}