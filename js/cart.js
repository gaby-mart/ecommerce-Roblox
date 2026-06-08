const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));


if(usuarioLogado) {
    document.getElementById('nome-usuario').textContent = usuarioLogado.nome;
}