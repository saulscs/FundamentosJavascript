/* **********     Curso JavaScript: 94. DOM: Ejercicios Prácticos | Detección de la WebCam - #jonmircha     ********** */


const d = document,
      n = navigator;

export default function WebCam(id){
    const $video = d.getElementById(id);
    // console.log(n.mediaDevices.getUserMedia);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video:true})
        .then((strem) => {
            // console.log(strem);
            $video.srcObject = strem;
            $video.play();
        })
        .catch((err) => {
            $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
            // console.log(`Salio el siguiente error ${err}`);
        });
    }
}