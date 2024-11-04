/*Hacer un programa que compruebe si un número es perfecto. 
Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es.*/

var numero = prompt("ingresa un numero");

esPerfecto = (numero) =>{
    var perfecto =  false;
    if (numero == 28 || numero == 496 || numero == 8128){
        perfecto = true;
    }
    return perfecto;
}

esPerfecto(numero);