/*Diseñar un programa que compruebe si un texto contiene sólo caracteres de nuestro alfabeto. 
Deberá implementarse una función esAlfabetoEspaniol(texto) que devuelva true si lo es.*/

var texto = prompt("introduce un texto");
 
esAlfabetoEspaniol = (texto) => {
    var esAlfabeto = /^[a-zA-Z]/
    return esAlfabeto.test(texto);
}

esAlfabetoEspaniol(texto);