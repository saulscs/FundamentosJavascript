/* **********     Curso JavaScript: 101. DOM: Ejercicios Prácticos | Validación de Formularios con HTML5 - #jonmircha     ********** */
/* **********     Curso JavaScript: 102. DOM: Ejercicios Prácticos | Validación de Formularios - #jonmircha     ********** */

const d = document;

export default function contactFormValidations(){
    const $form = d.querySelector(".contact-form");
    const $inputs = d.querySelectorAll(".contact-form [required]");

    // console.log($inputs)
    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span);
    })

    d.addEventListener("keyup", (e) =>{
        if(e.target.matches(".contact-form [required]")){
            let $input = e.target,
            pattern = $input.pattern ||  $input.dataset.pattern;
            // console.log($input,pattern);
            if(pattern && $input.value !==""){
                console.log("El input tiene patron");
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) 
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }

            if(!pattern){
                return $input.value === ""
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")
            }
            
        }
    })
    /* **********     Curso JavaScript: 103. DOM: Ejercicios Prácticos | Envío de Formularios - #jonmircha     ********** */
    d.addEventListener("submit", (e)=>{
         e.preventDefault();
        alert("Enviando");
        const $loader = d.querySelector(".contact-form-loader"),
            $reponse = d.querySelector(".contact-form-response");
        
        $loader.classList.remove("none");

        setTimeout(()=>{
            $loader.classList.add("none");
            $reponse.classList.remove("none");
            $form.reset();

            setTimeout(()=>$reponse.classList.add("none"),2000)
        },2000)
    })
}

