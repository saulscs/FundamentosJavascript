/* ********** Curso JavaScript: 129. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (1/4) - #jonmircha ********** */
/* ********** Curso JavaScript: 130. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (2/4) - #jonmircha ********** */
/* ********** Curso JavaScript: 131. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (3/4) - #jonmircha ********** */

import STRIPE_KEYS from './stripe-keys.js';

// console.log(STRIPE_KEYS);

const d = document,
    $tacos = d.getElementById("tacos"),
    $template = d.getElementById("taco-template").content,
    $fragment = d.createDocumentFragment(),
    fecthOptions = {
        headers: {
            Authorization:`Bearer ${STRIPE_KEYS.secret}`,
            mode: "cors",
            "Access-Control-Allow-Origin": "https://js.stripe.com",
            "Content-type": "application/json",
        },
    }

    let prices,products;

    const moneyFormat = (num) => `$${num.slice(0,-2)}.${num.slice(-2)}`;

    Promise.all([
        fetch("https://api.stripe.com/v1/products",fecthOptions),
        fetch("https://api.stripe.com/v1/prices",fecthOptions),

    ])
    .then(responses => Promise.all(responses.map((res) => res.json())))
    .then(json => {
        products = json[0].data;
        prices = json[1].data;

        prices.forEach((el) => {
            let productData = products.filter((product) => product.id === el.product);
            // console.log(productData,prices);
            $template.querySelector(".taco").setAttribute("data-price",el.id);
            $template.querySelector("img").src= productData[0].images[0];
            $template.querySelector("img").alt= productData[0].name;
            $template.querySelector("figcaption").innerHTML= `
                ${productData[0].name} 
                <br>  
                ${moneyFormat(el.unit_amount_decimal)} 
                ${el.currency}
            `

            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone);
        });
        $tacos.appendChild($fragment);
    })
    .catch(err => {
        // console.log(err);
        let message = err.statusText || "Ocurrio un error al conectarse al API de Stripe"
        $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`
    });

d.addEventListener("click", (e)=>{
    // console.log(e.target);
    if(e.target.matches(".taco *")){
        let price = e.target.parentElement.getAttribute("data-price");
        console.log(price);
        Stripe(STRIPE_KEYS.public)
            .redirectToCheckout({
                lineItems:[{price, quantity: 1}],
                mode:"payment",
                successUrl: "http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-success.html",
                cancelUrl: "http://127.0.0.1:5500/ajax-ejercicios/assets/stripe-success.html",
            })
            .then((res) => {
                console.log(res)
            if(res.error){
                $tacos.insertAdjacentHTML("afterend", res.error.message);
            }
        })
    }
})
/* ********** Curso JavaScript: 132. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (4/4) - #jonmircha ********** */
