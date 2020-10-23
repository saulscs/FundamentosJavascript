/* **********     Curso JavaScript: 99. DOM: Ejercicios Prácticos | ScrollSpy con Intersection Observer - #jonmircha     ********** */

const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");


    const cb = (entries) => {
        
        entries.forEach((entry)=>{
            const id = entry.target.getAttribute("id");
            // console.log(id)
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
            }
        })
    }

    const observer = new IntersectionObserver(cb, {
        //rootMargin: "-250px"
        threshold: [0.5,0.75],
    });

    // console.log(observer)

    $sections.forEach(el => observer.observe(el));
}