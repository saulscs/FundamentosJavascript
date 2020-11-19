import api from '../helpers/wp_api.js'     
import {ajax} from '../helpers/ajax.js'
import { PostCard } from './PostCard.js';

export function Router(){
    const d = document,
        w = window,
        $posts = d.getElementById("posts");

    let {hash} = location;
    console.log(hash);

    $posts.innerHTML = null;

    if(!hash || hash === "#/"){
        ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let html = "";
                // console.log(posts);
                posts.forEach((post) => (html += PostCard(post)));
                d.querySelector(".loader").style.display="none";
                $posts.innerHTML = html;
            }
        })
    } else if(hash.includes("#/search")){
        $posts.innerHTML = "<h2>Sección del buscador</h2>";
    } else if (hash === "#/contact"){
        $posts.innerHTML = "<h2>Sección de contacto</h2>";
    } else{
        $posts.innerHTML = "<h2>Aquí carga el contenido del post previamente seleccionado</h2>";
    }

    
}