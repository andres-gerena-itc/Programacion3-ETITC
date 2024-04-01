/*Modificar un texto dependiendo de la hora*/

var itemOne = document.getElementById("nombre")
var message = itemOne.textContent;
var today = new Date();
let hora = today.getHours();
let mes = today.getMonth();

if (hora >= 18) {
    itemOne.textContent = message + " / Buenas tardes";
}
else if (hora >= 9) {
    itemOne.textContent = message + " / Ya Desayunó?";
}
else if (hora >= 6) {
    itemOne.textContent = message + " / Don Madrugador";
}
else if (hora >= 0) {
    itemOne.textContent = message + " / Eche a dormir";
}




/*DOM Evento al dar clic en botón URL */

function url() {
    let urlActual = window.location.href;
    alert(`Esta es la URL: ${urlActual}`);
}




// Agregar evento submit al formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("¡El envío del formulario ha sido exitoso!");

    // Limpiar el texto del formulario
    let nombre = document.getElementById("name");
    let email = document.getElementById("email");
    let location = document.getElementById("location");
    nombre.value = "";
    email.value = "";
    location.value = "";
});




// Generando un while sencillo, este suma las fechas desde 2020

let contador = 2020;

while (contador <= 2024) {
    const elementoBloque = document.getElementById("experiencia")
    elementoBloque.innerHTML += contador + " ";
    contador++;
}


// Indicador fecha actual

let elementoFecha = document.getElementById("fecha");

function actualizarFecha() {
  let fechaActual = new Date();
  let opciones = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  elementoFecha.textContent = fechaActual.toLocaleDateString("es-ES", opciones);
}

setInterval(actualizarFecha, 1);


//Suma de 0 a n

function sumar() {
    const numero = parseInt(document.getElementById("numero").value);
    let suma = 0;
    for (let i = 0; i <= numero; i++) {
      suma += i;
    }
    document.getElementById("resultado").textContent = `La suma de 0 hasta ${numero} es: ${suma}`;
  }