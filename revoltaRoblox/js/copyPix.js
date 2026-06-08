const TextPix = document.getElementById("pix-payload").innerText;
    const button = document.getElementById("btn-copy");

    navigator.clipboard.writeText(TextPix).then(() => {
        button.innerHTML = '<i class="bi bi-copy"></i> Copiar Código';
        button.classList.add("Sucesso");

        setTimeout(() => {

            button.innerHTML = '<i class="bi bi-check-lg"></i> Código Copiado';
            button.classList.remove("Sucesso");
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar o texto!", err);
        alert("Não foi possível copiar automaticamente. Por favor, selecione e copie o código manualmente.");
    });