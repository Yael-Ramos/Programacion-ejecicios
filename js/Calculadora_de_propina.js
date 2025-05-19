function CalcularPropina(){

    let cuenta = Number(document.getElementById("cuenta").value);
    let propinaTexto = document.getElementById("propina").value;
    let propina = Number(propinaTexto.replace('%', '').trim());

    /*Prevencion de errores con entradas de datos*/

    if(isNaN(cuenta) || isNaN(propina) || cuenta<=0 || propina < 0){
        document.getElementById("resultado").innerText =
        "Por favor, ingresa una cuenta mayor a 0 y un porcentaje válido.";
        return;
    }

    /*Calculo de propina */

    let propinaCalculada = (cuenta * (propina/100));
    let total = cuenta + propinaCalculada;

    /*Impresión de texto */

    document.getElementById("resultado").innerText = 
    "Propina: $" + propinaCalculada.toFixed(2) +
    " | Total a pagar: $" + total.toFixed(2);
}
