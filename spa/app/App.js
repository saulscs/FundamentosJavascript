import {Header} from './components/Header.js'
import {Loader} from './components/Loader.js'
import { Posts } from './components/Post.js';
import {Router} from './components/Router.js'


export function App(){
   
    let $root = document.getElementById("root");
    $root.appendChild(Header());
    $root.appendChild(Posts());
    $root.appendChild(Loader());

    Router();
}