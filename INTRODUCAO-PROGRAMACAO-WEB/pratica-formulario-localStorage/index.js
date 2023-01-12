// COISAS QUE PRECISAMOS SEMPRE LEMBRAR:

// 1 - formulário - botão de envio de formulário sempre será do tipo "submit" e deve estar sempre entre a abertura e fechamento da tag <form>

// 2 - é o elemento do formulário que será submetido ao clique do botão

// 3 - evento de "submit" sempre irá reestartar a página, é preciso prevenir o comportamento padrão com "preventDefault()" antes de toda a lógica

const listaCadastros = buscarDadosDoLocalStorage('cadastros')
console.log(listaCadastros)

const formularioHTML = document.getElementById('formulario-cadastro');


document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = localStorage.getItem('usuarioLogado')

    if(usuarioLogado) {
        window.location.href = './cadastros.html'
    }
})


// addEventListener - quando o submit acontecer executa a função passada
formularioHTML.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = document.getElementById('nome').value
    const endereco = document.getElementById('endereco').value
    const cidade = document.getElementById('cidade').value
    const estado = document.getElementById('estado').value

    const cargo = document.querySelector('input[name="cargo"]:checked').value

    const areasHTML = document.querySelectorAll('input[name="area-interesse"]:checked')

    const descricao = document.getElementById('descricao').value

    const listaAreas = []

    // transformar em ['Análises', 'Computação', 'História']
    for(const area of areasHTML) {
        listaAreas.push(area.value)  
    }

    if(listaAreas.length === 0) {
        alert("Você precisa selecionar ao menos uma área de interesse.")
        return
    }

    const novoCadastro = {
        nome: nome,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        cargo: cargo,
        areasInteresse: listaAreas,
        descricao: descricao,
    }


    // VERIFICAR SE JÁ EXISTE UM USUARIO COM EMAIL IGUAL AO QUE FOI DIGITADO NO CAMPO INPUT

    listaCadastros.push(novoCadastro)
    guardarNoLocalStorage('cadastros', listaCadastros)

    // limpar os campos do formulario
    formularioHTML.reset()

})



function guardarNoLocalStorage(chave, valor) {
    const valorJSON = JSON.stringify(valor)

    localStorage.setItem(chave, valorJSON)

}

function buscarDadosDoLocalStorage(chave) {

    const dadoJSON = localStorage.getItem(chave)

    if(dadoJSON) {
        const listaDados = JSON.parse(dadoJSON)
        return listaDados
    } else {
        return []
    }
}





