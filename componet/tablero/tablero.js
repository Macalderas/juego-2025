import { mezclaCartas } from "../tablero/data.js"
import { itemCarta} from "../tablero/item.js";


function cargarTablero() {
    let div = document.createElement('div');
    div.className = "tablero-div";
    mezclaCartas().forEach((letra) => {
        div.appendChild(itemCarta(letra));
    });
    return div;
}
export {cargarTablero}