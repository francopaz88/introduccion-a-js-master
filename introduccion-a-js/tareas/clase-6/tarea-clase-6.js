/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
//document.body.appendChild($div);
//const $div = document.createElement("div");

const $siguiente = document.querySelector("#siguiente");
const $div = document.createElement("div");
const $formulario = document.querySelector("#formulario");
const $calcular = document.createElement("button");
let edades = [];
let $em = document.querySelector("em");

$siguiente.onclick = function(){
    let $cantidadIntegrantes = document.querySelector("#cantidadIntegrantes").value;    
    for (let i = 0; i < $cantidadIntegrantes; i++) {
        const $label = document.createElement("label");
        $label.textContent = "Integrante #" + [i+1];
        const $input = document.createElement("input");
        $input.type = "number";
        $input.className = "familiares";
        $formulario.appendChild($label);
        $formulario.appendChild($input);        
    }
    $calcular.textContent = "Calcular!";
    $formulario.appendChild($calcular);          
    return false;
}


function numeroMayor(array){
    mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (mayor < array[i]) {
            mayor = array[i];
        }
    }
    return mayor;
}


$calcular.onclick = function(){
    $familiares = document.querySelectorAll(".familiares");
    for (let i = 0; i < $familiares.length; i++) {
        edades.push(Number($familiares[i].value));      
    }
    numeroMayor(edades);
    $em.textContent = "El integrante mas viejo tiene " + mayor + " años."
    return false;
}




/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
