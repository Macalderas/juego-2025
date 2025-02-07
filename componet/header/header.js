let bloque1 = document.createElement("div");
bloque1.className = "bloque_icono_naruto";

let bloquePrincipal = document.createElement("div");
bloquePrincipal.className = "bloques_principal_naruto";
bloquePrincipal.appendChild(bloque1);

let icono = document.createElement("img");
icono.setAttribute("src", "https://i.pinimg.com/736x/47/c0/a8/47c0a8554843b0ea23d714e4305e6e4e.jpg");
icono.setAttribute("alt", "mi logo Naruto");

bloque1.appendChild(icono);

let titulo = document.createElement("h1");
titulo.textContent = "Rompecabezas";
titulo.className = "titulo_naruto";
bloquePrincipal.appendChild(titulo);

let contenedorBotones = document.createElement("div");
contenedorBotones.className = "bloques_botones_naruto";
bloquePrincipal.appendChild(contenedorBotones);

for (let i = 1; i <= 3; i++) {
    let button = document.createElement("button");
    button.className = "nivel-boton-naruto";
    button.textContent = `Nivel ${i}`;
    contenedorBotones.appendChild(button);
}

export { bloquePrincipal };