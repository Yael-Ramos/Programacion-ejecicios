function convertorTemperatura(){
    let grados = Number(document.getElementById("centigrados").value);

    if(isNaN(grados)) {
        document.getElementById("resultado").innerText = "Por favor, ingrese una temperatura valida."
        
        return;
    }

    /*Proceso de conversion*/
    let Farenheit = ((grados * (9/5)) + 32);

    document.getElementById("resultado").innerText =
    "La temperatura ingresada fue:" + grados + "°c\n" +
    "La temperatura convertida es:" + Farenheit.toFixed(1) + "°F";
    
}