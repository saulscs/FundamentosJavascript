import {Header} from './components/Header.js'
import {Loader} from './components/Loader.js'
import { Main } from './components/Main.js';
import {Router} from './components/Router.js'


export function App(){
   let $root = document.getElementById("root");

    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();
}