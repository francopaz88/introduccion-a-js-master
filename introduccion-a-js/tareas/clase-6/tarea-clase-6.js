/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $siguiente = document.querySelector("#siguiente");
const $formulario = document.querySelector("#formulario");
const $calcular = document.createElement("button");
let edades = [];
const $empezarDeNuevo = document.createElement("button");
let $resultado = document.querySelector("em");
const $wrapper = document.createElement("div");
$formulario.appendChild($wrapper);

function removerCampos(){
    const $label = document.querySelectorAll("label");
    const $input = document.querySelectorAll(".familiares");
    for (let i = 0; i < $label.length; i++) {
        $label[i].remove();        
    }
    for (let i = 0; i < $input.length; i++) {
        $input[i].remove();        
    }
}

$siguiente.onclick = function(){
    removerCampos();
    let $cantidadIntegrantes = document.querySelector("#cantidadIntegrantes").value;    
    for (let i = 0; i < $cantidadIntegrantes; i++) {
        const $label = document.createElement("label");
        $label.textContent = "Integrante #" + [i+1];
        const $input = document.createElement("input");
        $input.type = "number";
        $input.className = "familiares";
        $wrapper.appendChild($label);
        $wrapper.appendChild($input);        
    }
    $calcular.textContent = "Calcular!";
    $formulario.appendChild($calcular);
    $empezarDeNuevo.textContent = "Empezar de nuevo!";
    $formulario.appendChild($empezarDeNuevo);

    return false;
}

function calcularNumeroMayor(array){
    mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (mayor < array[i]) {
            mayor = array[i];
        }
    }
    return mayor;
}

function calcularNumeroMenor(array){
    menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (menor > array[i]) {
            menor = array[i];
        }
    }
    return menor;
}

function calcularPromedio(array){
    promedio = 0;
    for (let i = 0; i < array.length; i++) {
        promedio = promedio + array[i];
    }
    promedio = promedio / array.length;
    return promedio;
}


$calcular.onclick = function(){
    $familiares = document.querySelectorAll(".familiares");
    for (let i = 0; i < $familiares.length; i++) {
        edades.push(Number($familiares[i].value));      
    }
    calcularNumeroMayor(edades);
    calcularNumeroMenor(edades);
    calcularPromedio(edades);
    $resultado.textContent = "El integrante mas viejo tiene " + mayor + " años, el mas joven " + menor + " años y la edad promedio son " + promedio.toFixed(1) + " años."
    return false;
}

$empezarDeNuevo.onclick = function(){
    location.reload();
}
