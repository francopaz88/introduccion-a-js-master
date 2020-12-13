//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCalcular = document.querySelector("#botonCalcular");
const $resultado = document.querySelector("#resultado");
let $clase1 = document.querySelector("#clase1");
let $clase2 = document.querySelector("#clase2");
let $clase3 = document.querySelector("#clase3");
let $clase4 = document.querySelector("#clase4");
let $clase5 = document.querySelector("#clase5");


$botonCalcular.onclick = function() {
    console.log($clase1.value);
    let $clase1Arreglo = $clase1.value.split(":");
    console.log($clase1Arreglo);
    return false;
}


