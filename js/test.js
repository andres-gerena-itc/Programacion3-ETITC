var itemOne = document.getElementById("nombre")
var message = itemOne.textContent;
var today = new Date();
let hora = today.getHours();
let mes = today.getMonth();

if(hora > 18){
    itemOne.textContent = message+" / Buenas tardes BRO";
}
else if (hora > 9){
    itemOne.textContent = message+" / Ya Desayunó?";
}
else if (hora > 6){
    itemOne.textContent = message+" / Don Madrugador";
}
else if (hora > 0){
    itemOne.textContent = message+" / Eche a dormir";
}



// itemOne.textContent = "Niccoll Figueredo"