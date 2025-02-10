document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário antes da validação

    let isValid = true;

    // Validação do Nome
    let name = document.getElementById("name").value.trim();
    let nameError = document.getElementById("nameError");
    if (name === "") {
        nameError.textContent = "O nome é obrigatório.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validação do E-mail
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar e-mail
    if (email === "") {
        emailError.textContent = "O e-mail é obrigatório.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Insira um e-mail válido.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validação da Mensagem
    let message = document.getElementById("message").value.trim();
    let messageError = document.getElementById("messageError");
    if (message === "") {
        messageError.textContent = "A mensagem não pode estar vazia.";
        isValid = false;
    } else {
        messageError.textContent = "";
    }

    // Se tudo estiver correto, envia o formulário
    if (isValid) {
        alert("Formulário enviado com sucesso!");
        document.getElementById("contactForm").reset();
    }
});
