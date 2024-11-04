/*Realizar un programa que calcule el número de cifras de un número. Deberá implementarse una función numCifras(numero) que devuelva el 
número de cifras del mismo. Utiliza el operador spread.
*/ 

var numero = prompt("Introduce un numero: ");

let numCifras = (numero) => {
    var cifras = [...numero];
    document.write(cifras.length)
}

numCifras(numero);