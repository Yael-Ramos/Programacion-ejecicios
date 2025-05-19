function ClasificadorDeNumeros(){

    let numero = prompt("INTRODUCE UN NUMERO");

    numero = Number(numero);

    if(numero > 0) {

        console.log("EL NUMERO ES POSITIVO");
    }
    else if (numero < 0) {

        console.log("EL NUMERO ES NEGATIVO");
    }
    else {
        console.log("EL NUMERO ES CERO");
    }
    if (numero !== 0){

        if (numero %2 ===0) {
        console.log("EL NUMERO ES PAR")
        }
        else {
            console.log("EL NUMERO ES IMPAR");
        }
    }
}

ClasificadorDeNumeros();