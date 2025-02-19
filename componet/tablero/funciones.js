 function mostrarCarta(carta) {
    carta.classList.add("flipped");
}
function mesclarCartas(cartas) {
    return cartas.sort(() => Math.random() - 0.5);
}

export {mostrarCarta, mesclarCartas};