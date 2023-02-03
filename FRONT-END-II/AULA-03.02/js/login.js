const form = document.getElementById('form-login')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value

    // '' => false
    if(!inputEmail || !inputPassword || !inputEmail.includes('@')) {
        form.classList.add('was-validated')
        return
    }


    // ... continua com a lógica de login
    
})