/* **********     Curso JavaScript: 88. DOM: Ejercicios Prácticos | Tema Dark / Light - #jonmircha     ********** */

const d = document,
    ls = localStorage;


// export default function darkTheme(btn, classDark){
//     const $themeBtn = d.querySelector(btn),
//         $selectors = d.querySelectorAll("[data-dark]");

//     console.log($selectors);
//     let moon = "🌙",    
//         sun = "🌞"
//     d.addEventListener("click", (e) => {
//         if(e.target.matches(btn)){
//             console.log($themeBtn.textContent);
//             if($themeBtn.textContent === moon){
//                 $selectors.forEach(el => el.classList.add(classDark));
//                 $themeBtn.textContent = sun;
//             } else {
//                 $selectors.forEach(el => el.classList.remove(classDark));
//                 $themeBtn.textContent = moon;
//             }
//         }
//     })
// }


/* **********     Curso JavaScript: 89. DOM: Ejercicios Prácticos | API localStorage - #jonmircha     ********** */

export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");

    //console.log($selectors);
    let moon = "🌙",    
        sun = "🌞"

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme", "light");
    }

    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme", "dark");
    }
    
    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
                darkMode();
            } else {
                lightMode();
            }
        }
    })
    d.addEventListener("DOMContentLoaded", (e) =>{
        if(ls.getItem("theme") === null) ls.setItem("theme","ligth");
        if(ls.getItem("theme") === "ligth" ) lightMode();
        if(ls.getItem("theme") === "dark" ) darkMode();
    })
}
