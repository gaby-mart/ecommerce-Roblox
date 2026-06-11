function trocarImagem(imagem){

    const principal = document.getElementById("imagemPrincipal");

    principal.src = imagem.src;

    document
        .querySelectorAll(".miniatura")
        .forEach(img => img.classList.remove("ativa"));

    imagem.classList.add("ativa");
}