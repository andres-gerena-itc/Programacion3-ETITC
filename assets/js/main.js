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
    const urlActual = window.location.href;
    alert(`Esta es la URL: ${urlActual}`);
}




/*Simulación de envio formulario*/

function envioFormulario() {

    // Alerta de envio
    alert("!SE HA ENVIADO EL FORMULARIO A ANDRÉS¡");

    // Limpia formulario
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    nombre.value = "";
    email.value = "";
}



// Generando un while sencillo

let contador = 2020;

while(contador <= 2024){
    const elementoBloque = document.getElementById("experiencia")
    elementoBloque.innerHTML += contador +" ";
    contador++;
}