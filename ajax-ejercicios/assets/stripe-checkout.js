/* ********** Curso JavaScript: 129. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (1/4) - #jonmircha ********** */
/* ********** Curso JavaScript: 130. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (2/4) - #jonmircha ********** */

import STRIPE_KEYS from './stripe-keys.js';

console.log(STRIPE_KEYS);

const d = document,
    $tacos = d.getElementById("tacos"),
    $template = d.getElementById("taco-template").content,
    $fragment = d.createDocumentFragment();

fetch("https://api.stripe.com/v1/products",{
    headers: {
        Authorization:`Bearer ${STRIPE_KEYS.secret}`,
        mode: "cors",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
        "Content-type": "application/json",
    },
})
.then((res) => {
    console.log(res);
    return res.json();
})
.then((json) => {
    console.log(json)
});

fetch("https://api.stripe.com/v1/prices",{
    headers: {
        Authorization:`Bearer ${STRIPE_KEYS.secret}`,
        mode: "cors",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
        "Content-type": "application/json",
    },
})
.then((res) => {
    console.log(res);
    return res.json();
})
.then((json) => {
    console.log(json)
});

/* ********** Curso JavaScript: 131. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (3/4) - #jonmircha ********** */
/* ********** Curso JavaScript: 132. Ejercicios AJAX - APIs: Pagos Online con Fetch y Stripe (4/4) - #jonmircha ********** */
