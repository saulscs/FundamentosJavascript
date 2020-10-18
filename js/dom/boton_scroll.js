/* **********     Curso JavaScript: 87. DOM: Ejercicios Prácticos | Botón de Scroll - #jonmircha     ********** */

const d = document,
      w = window;

export default function scrollTopButtom(btn){
    const $scrollBtn = d.querySelector(btn); //seleccionar el elemento

   
    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset

        if(scrollTop > 600){
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
        // console.log(w.pageYOffset,d.documentElement.scrollTop);

    }); 
    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top: 0,
                left: 0,
            })
        }
    });
}