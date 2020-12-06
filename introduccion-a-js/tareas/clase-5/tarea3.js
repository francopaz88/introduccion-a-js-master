//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCalcular = document.querySelector("#botonCalcular");
const $resultado = document.querySelector("#resultado");
let $horas = document.querySelectorAll(".horas");
let $minutos = document.querySelectorAll(".minutos");
let $segundos = document.querySelectorAll(".segundos");


$botonCalcular.onclick = function() {
    let sumaH = 0;
    let sumaM = 0;
    let sumaS = 0;

    for (let i = 0; i < $horas.length; i++) {
        sumaH = sumaH + Number($horas[i].value);
    }
    for (let i = 0; i < $minutos.length; i++) {
        sumaM = sumaM + Number($minutos[i].value);
    }
    for (let i = 0; i < $segundos.length; i++) {
        sumaS = sumaS + Number($segundos[i].value);
    }
    
    $resultado.innerHTML = "La duración total de las clases es: <br> Horas: " + sumaH + "<br>" + "Minutos: " + sumaM + "<br>" + "Segundos: " + sumaS; 

    return false;
}


