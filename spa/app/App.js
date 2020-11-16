import api from './helpers/wp_api.js'
import {ajax} from './helpers/ajax.js'

export function App(){
    document.getElementById("root").innerHTML = `<h1>HI</h1>`;
    // console.log(api);
    ajax({
        url: api.POSTS,
        cbSuccess: (posts) => {
            console.log(posts);
        }
    })
}