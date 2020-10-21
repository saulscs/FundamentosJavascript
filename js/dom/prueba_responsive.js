/* **********     Curso JavaScript: 91. DOM: Ejercicios Prácticos | Responsive Tester - #jonmircha     ********** */


const d = document;

export default function responsive(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", (e)=>{
        if(e.target === $form){
            e.preventDefault();
            tester = window.open(
                $form.direccion.value, 
                "tester", 
                `innerHeight = ${$form.alto.value}, 
                innerWith= ${$form.ancho.value}`
            )
        }
    })

    d.addEventListener("click", (e)=>{
        if(e.target === $form.cerrar){
            tester.close();
        }
    })
}