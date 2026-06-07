const formulario = document.getElementById("form-cadastro");

formulario.addEventListener("submit", function(event){

    // Exibe as mensagens nativas do navegador
    if (!formulario.reportValidity()) {
        return;
    }

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;

    const genero = document.querySelector(
        'input[name="genero"]:checked'
    ).value;

    let usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(
        usuario => usuario.email === email
    );

    if (existe) {
        alert("Este e-mail já está cadastrado.");
        return;
    }

    usuarios.push({
        nome,
        sobrenome,
        cpf,
        email,
        telefone,
        genero,
        senha
    });

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
});