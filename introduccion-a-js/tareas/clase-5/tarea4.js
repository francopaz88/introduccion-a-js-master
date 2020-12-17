//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $valores = document.querySelectorAll(".valores");
let $promedio = document.querySelector("#promedio");
let $menor = document.querySelector("#menor");
let $mayor = document.querySelector("#mayor");
let $repetido = document.querySelector("#repetido");

function promedio(array){
    suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma = suma + Number(array[i].textContent);  
    }
    total = suma / array.length;
    return total;
}

promedio($valores);

$promedio.textContent = "El promedio es " + total.toFixed(2);

///////////////////////////////////////////////////////////////////

function NumeroMenor(array){
    menor = Number(array[0].innerText);
    for (let i = 0; i < array.length; i++) {
        if (menor > Number(array[i].innerText)) {
            menor = Number(array[i].innerText);            
        }
    }
    return menor;
}

NumeroMenor($valores);

$menor.textContent = "El número menor es " + menor;

///////////////////////////////////////////////////////////////////

function NumeroMayor(array){
    mayor = Number(array[0].textContent);
    for (let i = 0; i < array.length; i++) {
        if (mayor < Number(array[i].textContent)) {
            mayor = Number(array[i].textContent);
        }            
    }
    return mayor;
}

NumeroMayor($valores);

$mayor.textContent = "El número mayor es " + mayor;

///////////////////////////////////////////////////////////////////
/*
function numeroRepetido(array){
    contador = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (Number(array[i].textContent) == Number(array[j].textContent)) {
                console.log(array[i].textContent);                
                contador++;
            };
            
        };
        
    }
    console.log(contador);
}

numeroRepetido($valores);
*/
// funcion calcularNumeroMasFrecuente(array):
// numeroMasFrecuente;
// maximasRepeticiones = 0;
// por cada elemento del array:
//    numeroActual = elemento;
//    por cada otroElemento del array:
//      si otroElemento === numeroActual
//         repeticionesActuales++;
//   si repeticionesActuales > maximasRepeticiones
//     numeroMasFrecuente = numeroActual
//     maximasRepeticiones = repeticionesActuales
// devolver numeroMasFrecuente

function calcularNumeroFrecuente(array){
    numeroMasFrecuente = 0;
    let repeticionesActuales = 0;
    let maximasRepeticiones = 0;
    for (let i = 0; i < array.length; i++) {
        numeroActual = array[i].textContent;
        for (let j = 0; j < array.length; j++) {
            otroNumeroActual = array[j].textContent;
            if (otroNumeroActual === numeroActual) {
                repeticionesActuales++;
            }
        }
        if (repeticionesActuales > maximasRepeticiones) {
            numeroMasFrecuente = numeroActual;
            maximasRepeticiones = repeticionesActuales;
            repeticionesActuales = 0;
        }
        repeticionesActuales = 0;
        
    }
    return numeroMasFrecuente;
}

calcularNumeroFrecuente($valores);

$repetido.textContent = "El número más frecuente es " + numeroMasFrecuente;