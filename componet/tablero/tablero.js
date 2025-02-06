import { mezclaCartas } from "./data.js";
function item(contenido){
    let div = document.createElement('div');
    div.className = "carta-item";
    div.innerText = contenido;
    return div;
}
function cargar_cartas() {
    
    let div = document.createElement('div');
    div.className = "tablero-div";
    mezclaCartas().forEach((letra) => {
        div.appendChild(item(letra));
    });
    return div;
};
export { cargar_cartas };