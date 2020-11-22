import api from '../helpers/wp_api.js'     
import {ajax} from '../helpers/ajax.js'
import { PostCard } from './PostCard.js';

export async function Router(){
    const d = document,
        w = window,
        $main = d.getElementById("main");

    let {hash} = location;
    console.log(hash);

    $main.innerHTML = null;

    if(!hash || hash === "#/"){
     await  ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let html = "";
                // console.log(posts);
                posts.forEach((post) => (html += PostCard(post)));
                $main.innerHTML = html;
            }
        })
    } else if(hash.includes("#/search")){
        $main.innerHTML = "<h2>Sección del buscador</h2>";
        
    } else if (hash === "#/contact"){
        $main.innerHTML = "<h2>Sección de contacto</h2>";
       
    } else{
        $main.innerHTML = "<h2>Aquí carga el contenido del post previamente seleccionado</h2>";
       
    }

    d.querySelector(".loader").style.display="none";
}