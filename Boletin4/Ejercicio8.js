/*Realizar la función esPalindromo(cadena) de manera recursiva.*/

var palabra = prompt("Dime una palabra: ");

function esPalindromo(palabra) {
    for (var i = 0; i < palabra.length / 2; i++) {
        if (palabra[i] !== palabra[palabra.length - 1 - i]) {
            alert("falso");
            return false;  // Si encuentra una diferencia, no es palíndromo
        }
    }
    alert("correcto");
    return true;  // Si todas las comparaciones son iguales, es palíndromo.
}

esPalindromo(palabra);