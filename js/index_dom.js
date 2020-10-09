/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */
import hamburguerMenu from './dom/menu_hamburguesa.js';
import {digitalClock, alarm} from './dom/reloj.js';

/*Menu Hamburguesa*/
const d = document;



/*Menu Hamburguesa*/
d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".panel-btn", ".panel",".menu a");
    digitalClock("#reloj","#activar-reloj", "#desactivar-reloj");
});
  