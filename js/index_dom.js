/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */
import hamburguerMenu from './dom/menu_hamburguesa.js';
import {digitalClock, alarm} from './dom/reloj.js';
import {shortcuts,moveBall} from './dom/teclado.js';


/*Constante global*/
const d = document;




d.addEventListener("DOMContentLoaded", e => {
    /*Menu Hamburguesa*/
    hamburguerMenu(".panel-btn", ".panel",".menu a");
    /*Reloj digital */
    digitalClock("#reloj","#activar-reloj", "#desactivar-reloj");
     /*Reloj digital */
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
});
  

d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});