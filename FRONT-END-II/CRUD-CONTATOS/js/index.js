let indiceAtualizacao = -1 // inicia com um valor inválido para indices de lista pois não esta ainda no modo atualização
document.addEventListener('DOMContentLoaded', mostrarContatos)

const listaContatos = buscarDadosStorage('contatos')
const modalCadastro = new bootstrap.Modal('#modal-criar')
const modalExcluir = new bootstrap.Modal('#modal-excluir')
const modalAtualizar = new bootstrap.Modal('#modal-atualizar')

const toastDiv = document.getElementById('toast-app')
const toastBS = new bootstrap.Toast(toastDiv)


const formCadastro = document.getElementById('form-cadastro')
const formAtualizar = document.getElementById('form-atualizar')

formCadastro.addEventListener('submit', (ev) => {
    ev.preventDefault();

    if(!formCadastro.checkValidity()) {
        formCadastro.classList.add('was-validated')
        return
    }

    // ta tudo válido
    const nome = document.getElementById('nome').value
    const telefone = document.getElementById('telefone').value

    const novoContato = {
        id: gerarId(),
        nome: nome,
        telefone: telefone
    }

    const existe = listaContatos.some((contato) => contato.telefone === novoContato.telefone)

    if(existe) {
        modalCadastro.hide()
        mostrarAlerta('danger', 'Contato não adicionado. Já existe na sua lista!')
        return
    }

    listaContatos.push(novoContato)
    salvarDadosStorage('contatos', listaContatos)
    modalCadastro.hide()

    formCadastro.classList.remove('was-validated')
    formCadastro.reset()
    mostrarContatos()
    mostrarAlerta('success', 'Contato cadastrado com sucesso!')

})

formAtualizar.addEventListener('submit', (ev) => {
    ev.preventDefault()

    if(!formAtualizar.checkValidity()) {
        formAtualizar.classList.add('was-validated')
        return
    }

    const nomeAtualizado = document.getElementById('nome-atualizar').value
    const telefoneAtualizado = document.getElementById('telefone-atualizar').value

    // daqui pra baixo a lógica de atualizar

    // lista
    listaContatos[indiceAtualizacao].nome = nomeAtualizado
    listaContatos[indiceAtualizacao].telefone = telefoneAtualizado


    // atualizar storage
    salvarDadosStorage('contatos', listaContatos)

    // atualizar html
    mostrarContatos()

    modalAtualizar.hide()
    formAtualizar.classList.remove('was-validated')
    formAtualizar.reset()
    mostrarAlerta('success', 'Contato atualizado com sucesso!')
    indiceAtualizacao = -1

})

function mostrarContatos() {
    const tbody = document.getElementById('lista-contatos')

    tbody.innerHTML = ''

    listaContatos.forEach((contato, indice) => {
        tbody.innerHTML += `
            <tr id="${contato.id}">
                <td>${indice + 1}</td>
                <td>${contato.nome}</td>
                <td>${contato.telefone}</td>
                <td>
                    <button class="btn btn-success m-1" aria-label="Editar" onclick="mostrarModalAtualizar(${indice})">
                        <i class="bi bi-pencil-square"></i>
                    </button>

                    <button class="btn btn-danger m-1" aria-label="Apagar" onclick="mostrarModalExcluir(${indice}, ${contato.id})">
                        <i class="bi bi-trash3"></i>
                    </button>
                </td>
            </tr>
        `
    })
}

function mostrarModalExcluir(indiceContato, idContato) {
    console.log(idContato)
    modalExcluir.show()
    const botaoExcluir = document.getElementById('btn-delete')

    botaoExcluir.setAttribute('onclick', `apagarContato(${indiceContato}, ${idContato})`)

}

function apagarContato(indiceContato, idContato) {

    // listaContatos = array local - atualizar/excluir
    // splice() -> só funciona pra array e precisa de 2 informações: indice e quantos registros serão excluidos
    listaContatos.splice(indiceContato, 1)


    // contatos no localStorage - atualizar/excluir
    salvarDadosStorage('contatos', listaContatos)


    // linhas na tabela - atualizar/excluir HTML
    const trExcluir = document.getElementById(idContato)
    trExcluir.remove()


    modalExcluir.hide()
    mostrarAlerta('success', 'Contato excluido com sucesso!')
     
}

function mostrarModalAtualizar(indiceContato) {
    console.log(indiceContato)
    const contatoAtualizar = listaContatos[indiceContato]

    modalAtualizar.show()
    const nomeAtualizar = document.getElementById('nome-atualizar')
    const telefoneAtualizar = document.getElementById('telefone-atualizar')

    nomeAtualizar.value = contatoAtualizar.nome
    telefoneAtualizar.value = contatoAtualizar.telefone

    indiceAtualizacao = indiceContato
}




// função para gerar um número aleatório
function gerarId() {
    return new Date().getTime()
}

// salvar no localStorage - setItem
function salvarDadosStorage(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor))
}


// buscar as informações salvas no localStorage - getItem
function buscarDadosStorage(chave) {
   const resultado = localStorage.getItem(chave)
    
   return JSON.parse(resultado) ?? []
}


// mostrar um alerta/toast toda vez que for executada alguma operação
// independentemente de sucesso ou falha
function mostrarAlerta(tipo, mensagem) {

    toastDiv.classList.add(`text-bg-${tipo}`)

    const espacoMensagem = document.getElementById('espaco-mensagem')
    espacoMensagem.innerHTML = mensagem

    toastBS.show()

    setTimeout(() => {
        toastBS.hide()

        toastDiv.classList.remove(`text-bg-${tipo}`)
    }, 5000)

}










