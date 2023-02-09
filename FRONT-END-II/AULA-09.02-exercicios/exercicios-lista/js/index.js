// exercicio 1------------------------------------------

const btnSim = document.getElementById('btn-sim')
const btnNao = document.getElementById('btn-nao')

// criar uma variavel para armazenar o modal do BS
const meuModal = new bootstrap.Modal('#modal-exercicio1')

// eventos JS - EVENTOS DOM
btnSim.addEventListener('click', () => {
    console.log('Exclusão dos dados confirmada')
    mostrarAlerta('Exclusão dos dados confirmada', 'success')
    meuModal.hide()
})


btnNao.addEventListener('click', () => {
    console.log('Exclusão dos dados NAO confirmada')
    mostrarAlerta('Exclusão dos dados NAO confirmada', 'danger')
    meuModal.hide()
})

// exercicio 2 --------------------------------------------

/*

2. Outro recurso importante é o Accordion. Vamos explorá-lo!
Construa um componente accordion conforme apresentado nos

exemplos disponíveis no link abaixo:
Accordion · Bootstrap v5.2 (getbootstrap.com)
a. Utilizando Javascript, crie 3 objetos que deve conter as
seguintes propriedades:
i. Código
ii. Nome
iii. Detalhamento
b. Crie uma lista com ao menos 3 objetos
c. Crie os itens do accordion dinamicamente com o Javascript
inserindo os dados de cada objeto da lista criada no
accordion-header e no accordion-body

*/

const objUm = {
    codigo: 1,
    nome: 'Curso Java',
    detalhamento: 'O curso mais top do Brasil 🚀'
}

const objDois = {
    codigo: 2,
    nome: 'Curso React JS',
    detalhamento: 'O curso mais top do Brasil também 🚀'
}

const objTres = {
    codigo: 3,
    nome: 'Curso Data Science',
    detalhamento: 'O curso mais top do Brasil também 🚀'
}

const listaCursos = [objUm, objDois, objTres]

const accordionHTML = document.getElementById('accordionExercicio2')

listaCursos.forEach( (value, index) => {

    accordionHTML.innerHTML += `
        <div class="accordion-item">
            <!-- HEADER DO ACCORDION -->
            <h2 class="accordion-header" id="item${index}-${value.codigo}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${value.codigo}" aria-controls="${value.codigo}">
                    ${value.nome} - Código #${value.codigo}
                </button>
            </h2>

            <!-- BODY DO ACCORDION -->
            <div id="${value.codigo}" class="accordion-collapse collapse" aria-labelledby="item${index}-${value.codigo}" data-bs-parent="#accordionExercicio2">
                <div class="accordion-body">
                    <p>${value.detalhamento}</p>
                </div>
            </div>
        </div>
    `
})


function mostrarAlerta(mensagem, tipo) {
    // tipo = error ou success
    // mensagem = texto que vai aparecer no alerta

    const espacoAlerta = document.getElementById('espacoAlerta')

    espacoAlerta.innerHTML = `
        <div>
            <div class="alert alert-${tipo} alert-dismissible" role="alert">
                <div>${mensagem}</div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar Alerta"></button>
            </div>
        </div>
    `
}