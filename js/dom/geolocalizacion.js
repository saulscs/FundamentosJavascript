/* **********     Curso JavaScript: 95. DOM: Ejercicios Prácticos | Detección de la Geolocalización - #jonmircha     ********** */

const d = document,
      n = navigator;


export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 500,
        maximumAge: 0
    }

    const succes = (position) => {
        let coords = position.coords;
        // console.log(position)
        $id.innerHTML = `<p>Tu posicion es:</p>
            <ul>
            <li>Latitud ${coords.latitude}</li>
            <li>Longitude ${coords.longitude}</li>
            <li>Precisión ${coords.accuracy} metros</li>
            </ul>
            <a href="https://google.com/maps/@${coords.latitude},${coords.longitude},15z" target=_"blank" rel="noopener">Ver en google maps</a>
        `
    };

    const error = (err) => {
        $id.innerHTML = `<p><mark>Error${err.code}: ${err.message}</mark></p>`
        // console.log(`Error ${err.code}: ${err.message}`)
    };

    n.geolocation.getCurrentPosition(succes,error,options)
}