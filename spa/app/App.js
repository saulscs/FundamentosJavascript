
import {Header} from './components/Header.js'
import {Loader} from './components/Loader.js'


export function App(){
   const d = document,
    $root = d.getElementById("root");
    $root.appendChild(Header());
    $root.appendChild(Loader());
}