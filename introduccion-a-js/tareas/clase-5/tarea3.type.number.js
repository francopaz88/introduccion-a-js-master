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

function sumarTiempo(array){
    suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma = suma + Number(array[i].value);        
    }
    return suma;
}

function conviertoEnSegundos(horas, minutos, segundos){
    return totalSegundos = horas * 3600 + minutos * 60 + segundos;
}

function resultado(tiempo){
    horas = Math.floor(tiempo / 3600);
    minutos = Math.floor(tiempo / 60 ) % 60;
    segundos = tiempo % 60;
    return resultadoFinal = [horas, minutos, segundos];
}

$botonCalcular.onclick = function(){    
    resultado(conviertoEnSegundos(sumarTiempo($horas),sumarTiempo($minutos),sumarTiempo($segundos)));
    $resultado.innerHTML = "La duración total de las clases es: <br> Horas: " + resultadoFinal[0] + "<br>" + "Minutos: " + resultadoFinal[1]  + "<br>" + "Segundos: " + resultadoFinal[2]; 

    return false;
}


