var botonCalcular = document.getElementById('calcular');
botonCalcular.addEventListener('click', mostrarDetalles)

function mostrarDetalles() {
//Toma los valores de los input
var paseViernes = document.getElementById('pase_dia').value;
var paseTodos = document.getElementById('pase_completo').value;
var paseVierSab = document.getElementById('pase_dosdias').value;

//Almaceno el string con los valores de los input a poner en Resumen
var x = `<p>${paseViernes} boletos pase por dia</p>
        <p>${paseTodos} boletos pase todos los días</p>
        <p>${paseVierSab} boletos pase sábado y domingo</p> `;

//Le paso el string previamente almancenado
document.getElementById('lista-productos').innerHTML = x

//Muestra el total a pagar.
document.getElementById('suma-total').textContent = `${(paseViernes *30) + (paseTodos *50) + (paseVierSab *45) }`;
}


