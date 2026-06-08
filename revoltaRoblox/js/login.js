const formulario = document.getElementById("form-login");

formulario.addEventListener("submit", function(event){

    // Exibe as validações nativas do navegador
    if (!formulario.reportValidity()) {
        return;
    }

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    let usuarios =
        JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(
        usuario => usuario.email === email
    );

    if (!usuario) {
        alert("Nenhuma conta foi encontrada para este e-mail.");
        return;
    }

    if (usuario.senha !== senha) {
        alert("Senha incorreta.");
        return;
    }

    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuario)
    );

    alert(`Bem-vindo(a), ${usuario.nome}!`);

    window.location.href = "index.html";
});