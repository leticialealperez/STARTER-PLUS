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


// variavel global que armazerará todos os usuários cadastrados no sistema
let listaUsuarios = []


// captura do elemento de formulário do documento html que está rodando esse arquivo JS
const formularioCadastroHTML = window.document.getElementById('formulario-cadastro')
// console.log(formularioCadastroHTML)


// observador - dispara a função passada após a virgula sempre que ocorrer o "envio" (submit) do formulário
formularioCadastroHTML.addEventListener('submit', (ev) => {
    // previne o comportamento padrão do submit - remove o refresh
    ev.preventDefault()

    // captura do elemento na DOM
    const inputEmail = window.document.getElementById('email')
    
    // adiciona um observador, para verificar quando damos foco no input (cursor piscando no input)
    // quando isso acontecer, o javascript executará a função passada após a virgula
    // ocultará o feedback de erro mostrado ao usuário
    inputEmail.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
    })
    // console.log(inputEmail.value)


    // captura do elemento na DOM
    const inputPassword = window.document.getElementById('password')

    // adiciona um observador, para verificar quando damos foco no input (cursor piscando no input)
    // quando isso acontecer, o javascript executará a função passada após a virgula
    // ocultará o feedback de erro mostrado ao usuário
    inputPassword.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
    })
    // console.log(inputPassword.value)


    // captura do elemento na DOM
    const inputRepassword = window.document.getElementById('repassword')

    // adiciona um observador, para verificar quando damos foco no input (cursor piscando no input)
    // quando isso acontecer, o javascript executará a função passada após a virgula
    // ocultará o feedback de erro mostrado ao usuário
    inputRepassword.addEventListener('focus', () => {
        feedbackHTML.innerHTML = ''
    })
    // console.log(inputRepassword.value)


    // captura do elemento na DOM onde aparecerá o feedback de erro ao usuário
    const feedbackHTML = window.document.getElementById('feedback')


    // verificar se o que o usuario digitou em password é igual ao que ele digitou em repassword
    if(inputPassword.value !== inputRepassword.value) {
        
        // mostra o conteúdo de erro ao usuário
        feedbackHTML.innerHTML = 'As senhas não conferem! 🥲'

        return
    }


    // verificar se o usuario já está cadastrado
    const existe = listaUsuarios.some((valor) => valor.email === inputEmail.value)

    // se o valor na variavel existe for "true" não deixa cadastrar e mostra o motivo
    if(existe) {

        // mostra o conteúdo de erro ao usuário
        feedbackHTML.innerHTML = 'Este e-mail já foi cadastrado. Tenta outro aí! 😅'

        return
    }


    // caso o usuário não exista (valor em "existe" for "false") dá continuidade a lógica de cadastro
    // criar o objeto do novoUsuario
    const novoUsuario = {
        email: inputEmail.value,
        password: inputPassword.value,
        recados: []
    }


    // adicionar novoUsuario na lista de Usuarios
    listaUsuarios.push(novoUsuario)

    console.log(listaUsuarios)


    // limpar os campos de input após cadastro do novo usuário
    inputEmail.value = ''
    inputPassword.value = ''
    inputRepassword.value = ''
})