/*Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada 
de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.*/

var guardaDatos = []; 

do {
    var datos = prompt("Ingrese su nombre, apellidos, DNI y fecha de nacimiento separados por comas: ");
    
    if (datos) {
        var persona = datos.split(", ");  
        guardaDatos.push(persona);  
    }
    
} while (datos !== ""); 

document.write("Lista de personas:");
for (var i = 0; i < guardaDatos.length; i++) {
    document.write("Nombre: " + guardaDatos[i][0] + "<br>");
    document.write("Apellidos: " + guardaDatos[i][1] + "<br>");
    document.write("DNI: " + guardaDatos[i][2] + "<br>");
    document.write("Fecha de nacimiento: " + guardaDatos[i][3]);
}
