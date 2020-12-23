/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $agregar = document.querySelector("#agregar");
const $quitar = document.querySelector("#quitar");
const $container = document.createElement("div");
document.body.appendChild($container);

function unoMas(){
    const $label = document.createElement("label")
    $container.appendChild($label);
    $label.textContent = "Ingrese salario:"
    $label.className = "etiqueta"
    const $input = document.createElement("input")
    $input.type = "number";
    $container.appendChild($input);
}

$agregar.onclick = function(){
    unoMas();
}

function unoMenos(){
}

    

$quitar.onclick = function(){
    let x = document.querySelectorAll(".etiqueta");
    let arr = Array.prototype.slice.call(x);
    console.log(arr);
    arr.slice(-1,1);
    console.log(arr);
}
    