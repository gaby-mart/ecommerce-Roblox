const trilha = document.querySelector('.carrosel-track');

let pressionado = false;
let inicioX;
let scrollInicial;

trilha.addEventListener('mousedown', (e) => {
    pressionado = true;

    inicioX = e.pageX;
    scrollInicial = trilha.scrollLeft;

    trilha.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    pressionado = false;
    trilha.style.cursor = 'grab';
});

trilha.addEventListener('mousemove', (e) => {

    if (!pressionado) return;

    e.preventDefault();

    const distancia = e.pageX - inicioX;

    trilha.scrollLeft = scrollInicial - distancia;
});