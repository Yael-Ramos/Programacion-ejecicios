/* 1 er erjecicios
Realizar funcion que permita hacer las cuatro operaciones aritmeticas sumar, restar, dicidir y multipicar
esta debe recibir 3 parametros, 2 de ellos deben ser los valores (a) y (b) y uno el nombre de la operacion en minusculas
si el parametro de la operacion madar un mensaje personalizado*/

function ejercicioUno (a = 0, b = 0, operation="suma"){
switch(operation){
    case "suma":
        return console.log(a + b);
    case "resta":
        return console.log(a - b);
    case "multiplicacion":
        return console.log(a * b);
    case "division":
        return console,log(a / b);
    default:
        console.error('La operacion ${operation} no es valida');

}
}
//EJCUCUION DE FUNCIONES
ejercicioUno();