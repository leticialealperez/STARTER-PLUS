const listaContatos = [];

const formCadastro = document.getElementById('form-cadastro');

formCadastro.addEventListener('submit', (ev) => {
    ev.preventDefault();

    formCadastro.classList.add('was-validated')

    if(!formCadastro.checkValidity()) {
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

    listaContatos.push(novoContato)
    console.log(listaContatos)

})


// função para gerar um número aleatório
function gerarId() {
    return new Date().getTime()
}

