// COISAS QUE PRECISAMOS SEMPRE LEMBRAR:

// 1 - formulário - botão de envio de formulário sempre será do tipo "submit" e deve estar sempre entre a abertura e fechamento da tag <form>

// 2 - é o elemento do formulário que será submetido ao clique do botão

// 3 - evento de "submit" sempre irá reestartar a página, é preciso prevenir o comportamento padrão com "preventDefault()" antes de toda a lógica

const listaCadastros = []

const formularioHTML = document.getElementById('formulario-cadastro');

const tbody = document.getElementById('registros')

// addEventListener

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

    for(const area of areasHTML) {
        listaAreas.push(area.value)  
    }

    // ['Análises', 'Computação', 'História']

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

    listaCadastros.push(novoCadastro)

    // limpar os campos do formulario
    formularioHTML.reset()

    montarRegistrosNoHTML()
})

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
                    <button>Apagar</button>
                </td>
            </tr>
        `
    })

}

