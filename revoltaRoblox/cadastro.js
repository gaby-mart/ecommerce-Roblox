const formulario = document.getElementById("form-cadastro")

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    if(nome.length<3){
        alert("O campo nome deve ter pelo menor 3 caracteres.")
        return
    }

    const regexEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;

    if(!regexEmail.test(email)){
        alert("Digite um endereço de email válido.")
    }

    if(senha.length<8){
        alert("As senha deve possuir no mínimo 8 caracteres.")
        return;
    }else if(!regexSenha.test(senha)){
            alert(
            "A senha deve conter:\n\n" +
            "• No mínimo 8 caracteres\n" +
            "• Pelo menos 1 letra maiúscula\n" +
            "• Pelo menos 1 letra minúscula\n" +
            "• Pelo menos 1 número\n" +
            "• Pelo menos 1 caractere especial"
        );
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(usuario => usuario.email == email);

    if(existe){
        alert("Este e-mail já está cadastrado!");
        return;
    }

    usuarios.push({
        nome,
        email,
        senha
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!")

    window.localtion.href = "login.html"
})