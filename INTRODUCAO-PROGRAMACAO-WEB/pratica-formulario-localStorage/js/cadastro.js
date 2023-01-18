const listaUsuarios = JSON.parse(localStorage.getItem('usuarios') ?? '[]');

const formularioCadastro = document.getElementById('formulario-cadastro')

formularioCadastro.addEventListener('submit', (event) => {
    event.preventDefault();


    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const repeteSenha = document.getElementById('repassword').value;

    if(senha !== repeteSenha) {
        
    }

    const usuarioExistente = listaUsuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

    if(!usuarioExistente) {
        alert("Ops... Verifique email ou senha!")
        return
    }

    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioExistente))

    window.location.href = './cadastro.html'
})