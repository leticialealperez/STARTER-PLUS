// EVENTOS -> toda e qualquer lógica que precisa acontecer com base no que o usuário vai fazer na aplicação

const div = document.getElementById('container') as HTMLDivElement;

div.addEventListener('click', clicarNaDiv)

function clicarNaDiv() {
    // O QUE? Vai executar esta funcao 

    // QUANDO ? Quando o usuario clicar na div
    div.innerHTML = 'Clicou!'
}


div.addEventListener('mouseenter', () => {
    div.setAttribute('style', 'background-color: red;')
})

div.addEventListener('mouseleave', () => {
    div.setAttribute('style', 'background-color: blue;')


    setTimeout(() => {
        div.removeAttribute('style')
    }, 2000)
})

document.addEventListener('mouseleave', () => {
    // alert('Fique aqui!')
})

const input = document.getElementById('texto') as HTMLInputElement;

input.addEventListener('change', () => {
    div.innerHTML = 'O valor do input mudou -> ONCHANGE'

})

input.addEventListener('focusout', () => {
    setTimeout(() => {
        div.innerHTML = 'O valor do input mudou -> FOCUSOUT'
    }, 2000)

    setTimeout(() => {
        div.innerHTML = ''
    }, 3000)
})