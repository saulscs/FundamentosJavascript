/* **********     Curso JavaScript: 86. DOM: Ejercicios Prácticos | Cuenta Regresiva(countdown) - #jonmircha     ********** */


const d = document;


export default function countDown(id,limitDate,finalMessage){
    const $countdown = d.getElementById(id);
    const countdownDate = new Date(limitDate).getTime();

    let coundDownTempo = setInterval(()=>{ 
       let now = new Date().getTime();
       let limitTime = countdownDate - now,
            days = Math.floor(limitTime/(1000 * 60 * 60 * 24)),
            hours = ( "0" + Math.floor(limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ).slice(-2),
            minutes = ( "0" + Math.floor(limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 ) ).slice(-2),
            seconds = ( "0" + Math.floor(limitTime % (1000 * 60 * 60)) / (1000) ).slice(-2);


        $countdown.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos</h3>`

    //    console.log(countdownDate, now,limitTime);

       if(limitTime < 0){
           clearInterval(coundDownTempo);
           $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
       }
    }, 1000)

    
}   