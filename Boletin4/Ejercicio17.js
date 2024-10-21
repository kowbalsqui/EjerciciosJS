/* Realizar un script que tome una serie de palabras ingresadas por el usuario (separadas por coma) y almacena esas palabras en un array. Posteriormente, 
manipule el array para mostrar en una nueva ventana los siguientes datos: 
- La primera palabra ingresada por el usuario 
- La última palabra ingresada por el usuario
- El número de palabras presentes en el array
- Todas las palabras ordenadas alfabéticamente 
*/

var texto = prompt('igresa las palabras separadas por coma: ');
var palabras = texto.split(', ');
alert('La primera palabra ingresa por el usuario es: ' + palabras[0]);
alert('La ultima palabra ingresada por el usuario es: ' + palabras[palabras.length -1]);
alert('El numero de palabras presentes en el array es: ' + palabras.length);
alert('La palabaras ordenadas alfabéticamente: ' + palabras.sort());