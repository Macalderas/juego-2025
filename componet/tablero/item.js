function itemCarta(contenido) {
    let cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    let card = document.createElement("div");
    card.className = "card";
    cardContainer.appendChild(card);

    let front = document.createElement("div");
    front.className = "card-face front";
    card.appendChild(front);

    let back = document.createElement("div");
    back.className = "card-face back";
    back.innerText = contenido;
    card.appendChild(back);

    cardContainer.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });

    return cardContainer;
}
export {itemCarta};