const form = document.getElementById('form-cadastro')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value
    const inputRepassword = document.getElementById('repassword').value

    // '' => false
    if(!inputEmail || !inputPassword || !inputRepassword || !inputEmail.includes('@') || inputPassword !== inputRepassword) {
        form.classList.add('was-validated')
        return
    }


    // ... continua com a lógica de cadastro
    
})