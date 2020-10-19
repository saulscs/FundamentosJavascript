/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */
import hamburguerMenu from './dom/menu_hamburguesa.js';
import {digitalClock, alarm} from './dom/reloj.js';
import {shortcuts,moveBall} from './dom/teclado.js';
import countDown from './dom/cuenta_regresiva.js';
import scrollTopButtom from './dom/boton_scroll.js';
import darkTheme from './dom/tema_oscuro.js'
import responsiveMedia from './dom/objeto_responsive.js';
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
    /*Responsive with JS */
    responsiveMedia(
        "youtube", 
        "(min-width:1024px)", 
        `<a href="https://youtu.be/6IwUl-4pAzc" target=_blank>Ver video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps", 
        "(min-width:1024px)", 
        `<a href="https://goo.gl/maps/7YxDmHqaPStvJWUR6" target=_blank>Ver mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4847583249825!2d-99.15444495003861!3d19.434655745587776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d3638dad3b%3A0x6695d485fb157d56!2sSmart%20Fit%20Reforma%2027!5e0!3m2!1ses!2smx!4v1603071556409!5m2!1ses!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    );
});
  

d.addEventListener("keydown", e => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn","dark-mode");  //No se puede ejecutar el mismo evento dentro de uno similar por eso lo sacamos de DOMContentLoaded