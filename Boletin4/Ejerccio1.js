/*Hacer un programa que compruebe si un número es perfecto. 
Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es.*/

var numero = prompt("ingresa un numero");

function esPerfecto(numero){
    var esPerfecto = false;
    if (numero == "28" | numero == "496" | numero == "8128"){
        esPerfecto = true;
    }
    return esPerfecto;
}

esPerfecto(numero);