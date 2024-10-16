/*Hacer un programa que sume todos los parámetros pasados como argumentos de entrada
en la llamada. El número de argumentos de entrada es desconocido.*/

var suma = 0;
function sumaNumeros (...numeros){
    for (var i = 0; i <= numeros.length; i += 1){
        suma = suma + i;
    }
    document.write(suma)
}
sumaNumeros(1,2,3,4);