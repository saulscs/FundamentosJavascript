/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */
import hamburguerMenu from './dom/menu_hamburguesa.js';
import {digitalClock, alarm} from './dom/reloj.js';
import {shortcuts,moveBall} from './dom/teclado.js';
import countDown from './dom/cuenta_regresiva.js';
import scrollTopButtom from './dom/boton_scroll.js';

/*Constante global*/
const d = document;




d.addEventListener("DOMContentLoaded", e => {
    /*Menu Hamburguesa*/
    hamburguerMenu(".panel-btn", ".panel",".menu a");
    /*Reloj digital */
    digitalClock("#reloj","#activar-reloj", "#desactivar-reloj");
     /*Reloj digital */
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    /*Cuenta regresiva */
    countDown("countdown", "May 23,2021", "Feliz cumpleaños");
    /*Botton de scroll */
    scrollTopButtom(".scroll-top-btn");
});
  

d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});