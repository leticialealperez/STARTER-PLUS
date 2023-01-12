const listaCadastros = buscarDadosDoLocalStorage('cadastros') // [{}, {}, {}]
console.log(listaCadastros)

const tbody = document.getElementById('registros')

document.addEventListener('DOMContentLoaded', montarRegistrosNoHTML)

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
            <tr>
                <td>${index + 1}</td>
                <td>${valor.nome}</td>
                <td>${valor.endereco} - ${valor.cidade}, ${valor.estado}</td>
                <td>${valor.cargo}</td>
                <td>${valor.areasInteresse.toString()}</td>
                <td>
                    ${valor.descricao}
                </td>
                <td>
                    <button class="botao-default botao-apagar">
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

