/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $agregar = document.querySelector("#agregar");
const $quitar = document.querySelector("#quitar");
const $calcular = document.querySelector("#calcular");
const $container = document.createElement("div");
let $resultado = document.createElement("em");
let salarios = [];
document.body.appendChild($container);
const $reiniciar = document.createElement("button");
$reiniciar.textContent = "Reiniciar";

function agregarCampos(){
    const $label = document.createElement("label")
    $container.appendChild($label);
    $label.textContent = "Ingrese salario anual:"
    $label.className = "etiqueta"
    const $input = document.createElement("input")
    $input.type = "number";
    $container.appendChild($input);
}

function quitarCampos(){
    const $label = document.querySelectorAll("label");
    $label[$label.length -1].remove();
    const $input = document.querySelectorAll("input");
    $input[$input.length -1].remove(); 
}

function calcularMayorSalario(array){
    mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        };        
    }
    return mayor;
}

function calcularMenorSalario(array){
    menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        };        
    }
    return menor;
}

function calcularSalarioAnualPromedio(array){
    promedioAnual = 0;
    suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];        
    }
    promedioAnual = suma / array.length;
    return promedioAnual;
}

function calcularSalarioMensualPromedio(numero){
    promedioMensual = numero / 12
    return promedioMensual;
}


$agregar.onclick = function(){
    agregarCampos();
}

$quitar.onclick = function(){
    quitarCampos();
}

$calcular.onclick = function(){
    const $input = document.querySelectorAll("input");
    for (let i = 0; i < $input.length; i++) {
        salarios.push(Number($input[i].value));
        
    }

    calcularMayorSalario(salarios);
    calcularMenorSalario(salarios);
    calcularSalarioAnualPromedio(salarios);
    calcularSalarioMensualPromedio(calcularSalarioAnualPromedio(salarios));
    document.body.appendChild($resultado);
    $resultado.textContent = "El mayor salario es $"+ mayor + ", el menor salario es $" + menor + ", el salario promedio es $" + promedioAnual.toFixed(2) + " y el promedio mensual es $" + promedioMensual.toFixed(2);
    document.body.appendChild($reiniciar);
}

$reiniciar.onclick = function(){
    location.reload();
}