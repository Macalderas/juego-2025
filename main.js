import { bloquePrincipal } from "./componet/header/header.js";
import { cargar_cartas } from "./componet/tablero/tablero.js";
let DOM = document.querySelector("#root");

let contenedor = document.createElement('div');
contenedor.className = "contenedor";

let div_header = document.createElement('div');
div_header.className = "header";
div_header.appendChild(bloquePrincipal);
contenedor.appendChild(div_header);

let div_footer = document.createElement('div');
div_footer.className = "footer";
contenedor.appendChild(div_footer);

let div_tablero = document.createElement('div');
div_tablero.className = "tablero";
contenedor.appendChild(div_tablero);
div_tablero.appendChild(cargar_cartas());

let div_progreso = document.createElement('div');
div_progreso.className = "progreso";
contenedor.appendChild(div_progreso);


DOM.appendChild(contenedor);