/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

/*Se agrupan todas las funciones y las devuelves en un objeto */

export const aritmetica = {
  sumar,
  restar
};


