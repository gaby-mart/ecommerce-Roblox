const cards = document.getElementById("cardsMore");

const btnAnterior = document.getElementById("btnAnterior");
const btnProximo = document.getElementById("btnProximo");

let posicao = 0;
const distancia = 220;

btnProximo.addEventListener("click", () => {

    const limite =
        cards.scrollWidth -
        cards.parentElement.clientWidth;

    if(Math.abs(posicao) < limite){
        posicao -= distancia;
    }

    cards.style.transform = `translateX(${posicao}px)`;
});

btnAnterior.addEventListener("click", () => {

    posicao += distancia;

    if(posicao > 0){
        posicao = 0;
    }

    cards.style.transform = `translateX(${posicao}px)`;
});