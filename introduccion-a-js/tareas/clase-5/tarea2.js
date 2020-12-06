//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */
const $botonCalcular = document.querySelector("#botonCalcular");
const $mensajeFinal = document.querySelector("#mensajeFinal");
let $nombre = document.querySelector("#nombre");
let $segundoNombre = document.querySelector("#segundoNombre");
let $apellido = document.querySelector("#apellido");
let $edad = document.querySelector("#edad");
const $bienvenida = document.querySelector("#bienvenida");


$botonCalcular.onclick = function(){
  $nombre = $nombre.value;
  $segundoNombre = $segundoNombre.value;
  $apellido = $apellido.value;
  $edad = $edad.value;
  $mensajeFinal.innerHTML = "Mi nombre es " + $nombre + " " + $segundoNombre + " " + $apellido + " y tengo " + $edad + " años.";
  $bienvenida.innerHTML = "Bienvenido " + $nombre + "!";  
  return false;
}


