/* **********     Curso JavaScript: 97. DOM: Ejercicios Prácticos | Sorteo Digital - #jonmircha     ********** */

const d = document;


export default function draw(btn, selector){
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
            radom = Math.floor(Math.random()* $players.length),
            winner = $players[radom];
        
            console.log($players,radom,winner)
        return `El ganador es ${winner.textContent}`
    }

    d.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result)
            console.log(result)
        }
    })

    
}

/*Funcion que podemos usar en Youtube o Facebook  

const getWinnerComments = (selector) => {
    const $players = document.querySelectorAll(selector),
        radom = Math.floor(Math.random()* $players.length),
        winner = $players[radom];
    
        console.log($players,radom,winner)
    return `El ganador es ${winner.textContent}`
}

getWinnerComments("Hacer scrapping en la pagina para ver las clases");

*/