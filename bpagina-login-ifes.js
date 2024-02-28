function validarFormulario() {
    let name = document.getElementById('iname').value;
    let email = document.getElementById('iemail').value;
    let password = document.getElementById('ipassword').value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    let isValid = true;

    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    if (name !== 'user1') {
        nameError.textContent = "Por favor, insira o nome correto (user1).";
        isValid = false;
    }

    if (email !== 'user1@gmail.com') {
        emailError.textContent = "Por favor, insira o e-mail correto (user1@gmail.com).";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "E-mail inválido.";
        isValid = false;
    }

    if (password !== '123ABC') {
        passwordError.textContent = "Por favor, insira a senha correta (123ABC).";
        isValid = false;
    }

    if (isValid) {
        window.location.href = 'teste.html';
        return false;
    }

    return isValid;
}

function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
