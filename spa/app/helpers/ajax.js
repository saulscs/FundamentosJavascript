export function ajax(props){
    let {url,cbSuccess} = props;

    fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject)
    .then(json => cbSuccess(json))
    .catch(err => {
        let message = err.statusText || !"Ocurrio un error al acceder a la API";
        document.getElementById("posts").innerHTML = 
        `<div class="message">
            <p>Error ${err.status}: ${message}</p>
        </div>`;
        document.querySelector(".loader").getElementsByClassName.display ="none"
        console.log(err);
    });
}



//En caso de de ser un crud, especificamos los verbos y las cabeceras