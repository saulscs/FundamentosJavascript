/* **********     Curso JavaScript: 90. DOM: Ejercicios Prácticos | Responsive con JavaScript - #jonmircha     ********** */


const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
    let breakPoint = w.matchMedia(mq);

    const reponsive = (e) => {
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        } else{
            d.getElementById(id).innerHTML = mobileContent;
        }   
        // console.log("MQ",breakPoint,e.matches)
    }
    breakPoint.addListener(reponsive);
    reponsive(breakPoint);
}