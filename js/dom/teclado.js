/* **********     Curso JavaScript: 84 - 85. DOM: Ejercicios | Eventos del Teclado (movimientos y colisiones) - #jonmircha     ********** */

const d = document;

export function shortcuts(e){
    // console.log(e.keyCode);
    // console.log(e.type);
    // console.log(e.key)
    // console.log(e.altKey);

    if(e.key === "a" && e.metaKey){
        alert("Alerta de teclado")
    }

    if(e.key === "c" && e.metaKey){
        confirm("Confirmacion con el teclado")
    }

    if(e.key === "p" && e.metaKey){
        prompt("Haz lanzado un aviso con el teclado")
    }
}

let x = 0;
let y = 0;


export  function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
          $stage = d.querySelector(stage),
          limitsBall = $ball.getBoundingClientRect(),
          limitsStage = $stage.getBoundingClientRect();
        // console.log(e.keyCode);
        // console.log(e.key);
        // console.log(limitsBall,limitsStage);

    

    switch(e.keyCode){
        case 37:
            // move("left");
            if(limitsBall.left > limitsStage.left){
                e.preventDefault();
                x--;
            } 
            break;
        case 38:
            
            // move("up");
            if(limitsBall.top > limitsStage.top){
                e.preventDefault();
                y--;
            } 
            break;
        case 39:
           
            // move("right");
            if(limitsBall.right < limitsStage.right){
                e.preventDefault();
                x++;
            } 
            break;
        case 40:
           
            // move("down");
            if(limitsBall.bottom < limitsStage.bottom){
                e.preventDefault();
                y++;
            } 
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

