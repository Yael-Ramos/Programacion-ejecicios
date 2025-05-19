/*UNa calculadora de edad*/
function calculadordeedad(){
    let nacimiento = prompt("¿EN QUE AÑO NACISTE?");
    nacimiento= Number(nacimiento);
    let EDAD = (2025 - nacimiento);
    console.log("TU EDAD ES:" + EDAD + "años");
    if(EDAD>=18){
        console.log("YA ERES MAYOR DE EDAD");
    }
    else
    {
        console.log("AUN NO ERES MAYOR DE EDAD");       
    }
}


calculadordeedad();