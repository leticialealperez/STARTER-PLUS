// window.localStorage - URL

// KEY - nome do registro no localStorage
// VALUE - valor do registro, ou o que será armazenado

// SET - criar/setar/atualizar - .setItem()
// localStorage.setItem('corFavorita', 'preto')


// GET - buscar/trazer - .getItem()
// localStorage.getItem('corFavorita')



// REMOVE - remover/excluir - .removeItem()
// localStorage.removeItem('corFavorita')


// CLEAR - limpar/remoever todos - .clear()
// localStorage.clear()



// JSON - estrutura de dados padrão de comunicação de aplicações WEB

// JSON para OBJ
// JSON.parse(objJSON) -> transforma um JSON em objeto ou array novamente

// OBJ para JSON
// JSON.stringify(objArray) -> transforma uma variavel em um JSON (string)

const listaCadastros = buscarDadosDoLocalStorage('cadastros')
console.log(listaCadastros)

const tbody = document.getElementById('registros')

// addEventListener - quando a página carregar executa a função passada
document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = localStorage.getItem('usuarioLogado')

    if(!usuarioLogado) {
        window.location.href = './login.html'
    } else {
        montarRegistrosNoHTML()
    } 
})

function buscarDadosDoLocalStorage(chave) {

    const dadoJSON = localStorage.getItem(chave)

    if(dadoJSON) {
        const listaDados = JSON.parse(dadoJSON)
        return listaDados
    } else {
        return []
    }
}

function montarRegistrosNoHTML() {
    tbody.innerHTML = ''

    listaCadastros.forEach((valor, index) => {
        tbody.innerHTML += `
            <tr id="${index}">
                <td>${index + 1}</td>
                <td>${valor.nome}</td>
                <td>${valor.endereco} - ${valor.cidade}, ${valor.estado}</td>
                <td>${valor.cargo}</td>
                <td>${valor.areasInteresse.toString()}</td>
                <td>
                    ${valor.descricao}
                </td>
                <td>
                    <button class="botao-default botao-apagar" onclick="apagarRegistro(${index})">
                        <i class="bi bi-trash-fill"></i>
                        Apagar
                    </button>
                    <button class="botao-default botao-editar">
                        <i class="bi bi-pencil-square"></i>
                        Editar
                    </button>
                </td>
            </tr>
        `
    })

}

function apagarRegistro(indice) {
    // remover da lista de registros - JS
    // SPLICE - retorna os items excluidos e modifica a lista original
    listaCadastros.splice(indice, 1)
    console.log(listaCadastros)


    // atualizar o localstorage - 
    guardarNoLocalStorage('cadastros', listaCadastros)


    // remover a linha do HTML
    // posicao === id
    const tr = document.getElementById(indice)
    tr.remove()

    window.location.reload()

}

function guardarNoLocalStorage(chave, valor) {
    const valorJSON = JSON.stringify(valor)

    localStorage.setItem(chave, valorJSON)

}


// function apagarRecado(indice) {
//     const trRemove = document.getElementById(indice);
//     trRemove.remove();
//     usuarioLogado.recados.splice(indice, 1);
//     guardarDadosLocalStorage('usuarioLogado', usuarioLogado);
// }


