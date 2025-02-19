import { cargarFooter } from "./componet/footer/footer.js";
import { cargarHeader  } from "./componet/header/header.js";
import { cargarProceso } from "./componet/progreso/progreso.js";
import {  cargarTablero   } from "./componet/tablero/tablero.js";


function cargarDOM(){
    let DOM = document.querySelector("#root");

    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    let div_header = document.createElement('div');
    div_header.className = "header";
    div_header.appendChild(cargarHeader());
    contenedor.appendChild(div_header);

    let div_tablero = document.createElement('div');
    div_tablero.className = "tablero";
    contenedor.appendChild(div_tablero);
    div_tablero.appendChild(cargarTablero());
    

    let div_progreso = document.createElement('div');
    div_progreso.className = "progreso";
    div_progreso.appendChild(cargarProceso());
    contenedor.appendChild(div_progreso);


    let div_footer = document.createElement('div');
    div_footer.className = "footer";
    div_footer.appendChild(cargarFooter());
    contenedor.appendChild(div_footer);

    DOM.appendChild(contenedor);

    let todasCartas = document.querySelectorAll('.carta-item');
    todasCartas.forEach(cadaCarta => {
        
        

        })

}

cargarDOM();

    




   
 