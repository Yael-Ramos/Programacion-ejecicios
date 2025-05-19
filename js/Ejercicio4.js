function comparador(){

    let NumeroUno = Number(prompt("INGRESA EL PRIMER NUMERO"));

    let NumeroDos = prompt("INGRESA EL SEGUNDO NUMERO");

    console.log("Valor 1:", NumeroUno, "(tipo:", typeof NumeroUno + ")");
    console.log("Valor 2:", NumeroDos, "(tipo:", typeof NumeroDos + ")");


    if ( NumeroUno == NumeroDos){

        console.log("LOS VALORES SON IGUALES CON ==" );

    } else {
        console.log("LOS VALORES NO SON IGUALES CON ==");
    }
     
    if (NumeroUno === NumeroDos){

        console.log("LOS VALORES SON IGUALES CON ===");

    } else {
        console.log("LOS VALORES NO SON IGUALES CON ===");
    }
}

comparador();