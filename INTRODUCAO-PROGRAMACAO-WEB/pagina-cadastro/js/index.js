// // busca um elemento na DOM
// // getElementById()

// const inputEmail = window.document.getElementById('email') 
// O que será armazenado na variavel inputEmail? 
// Um elemento HTML
// O que é um elemento HTML? Elemento é o conjunto de tag + atributos + conteúdo
// EX:  <input type="email" name="email" id="email" placeholder="E-mail"> 

// // <input>

// // quando o botão é do tipo button -> onclick
// // quando o botão é do tipo submit -> onsubmit
let listaUsuarios = []


const formularioCadastroHTML = window.document.getElementById('formulario-cadastro')

// console.log(formularioCadastroHTML)


// observador - 
formularioCadastroHTML.addEventListener('submit', (ev) => {
    // previne o comportamento padrão do submit - remove o refresh
    ev.preventDefault()

    const inputEmail = window.document.getElementById('email')
    inputEmail.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
    })
    console.log(inputEmail.value)


    const inputPassword = window.document.getElementById('password')
    inputPassword.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
    })
    console.log(inputPassword.value)


    const inputRepassword = window.document.getElementById('repassword')
    inputRepassword.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
    })
    console.log(inputRepassword.value)


    const feedbackHTML = window.document.getElementById('feedback')


    // verificar se o que o usuario digitou em password é igual ao que ele digitou em repassword
    if(inputPassword.value !== inputRepassword.value) {
        
        feedbackHTML.innerHTML = 'As senhas não conferem! 🥲'

        return
    }


    // verificar se o usuario já está cadastrado
    const existe = listaUsuarios.some((valor) => valor.email === inputEmail.value)

    if(existe) {
        feedbackHTML.innerHTML = 'Este e-mail já foi cadastrado. Tenta outro aí! 😅'

        return
    }


    // criar o objeto do novoUsuario
    const novoUsuario = {
        email: inputEmail.value,
        password: inputPassword.value,
        recados: []
    }


    // adicionar novoUsuario na lista de Usuarios
    listaUsuarios.push(novoUsuario)

    console.log(listaUsuarios)



    inputEmail.value = ''
    inputPassword.value = ''
    inputRepassword.value = ''
})