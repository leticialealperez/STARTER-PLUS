const listaUsuarios = JSON.parse(localStorage.getItem('usuarios') ?? '[]');


const formularioLogin = document.getElementById('formulario-login')

formularioLogin.addEventListener('submit', (event) => {
    event.preventDefault();


    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;


    const usuarioExistente = listaUsuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

    if(!usuarioExistente) {
        alert("Ops... Verifique email ou senha!")
        return
    }

    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioExistente))

    window.location.href = './cadastro.html'
})