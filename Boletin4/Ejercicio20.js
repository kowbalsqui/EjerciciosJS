/*Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona 
por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda?*/

function imprimirDatos (){
    for (var i = 0; i < guardaDatos.length; i++) {
        document.write("Nombre: " + guardaDatos[i][0] + "<br>");
        document.write("Apellidos: " + guardaDatos[i][1] + "<br>");
        document.write("DNI: " + guardaDatos[i][2] + "<br>");
        document.write("Fecha de nacimiento: " + guardaDatos[i][3] + "<br>");
        document.write("<br>");
    }
}

function buscarPorNombre(nombre){
    for (var i = 0; i < guardaDatos.length; i++){
        if (guardaDatos[i][0] === nombre){
            document.write("Nombre: " + guardaDatos[i][0] + "<br>");
            document.write("Apellidos: " + guardaDatos[i][1] + "<br>");
            document.write("DNI: " + guardaDatos[i][2] + "<br>");
            document.write("Fecha de nacimiento: " + guardaDatos[i][3] + "<br>");
        }
    }
}

var guardaDatos = [];
var opc = 0;
var datos = prompt("ingresa nombre, apellido, dni, fecha de nacimiento separado por comas: ")
do{
    opc = parseInt(prompt("1. Igresar un nuevo usuario a la lista:\n 2. Buscar por nombre:\n 3. Buscar por apellidos\n 4. Buscar por DNI:\n 5. Salir del programa."))
    switch(opc){
        case 1:
            
            break;
        case 2:
            var nombre = prompt("Ingrese el nombre a buscar: ");
            buscarPorNombre(nombre);
            break;
        case 3:
            var apellido = prompt("Ingrese el apellido a buscar: ");
            buscarPorApellido(apellido);
            break;
        case 4:
            var dni = prompt("Ingrese el DNI a buscar: ");
            buscarPorDNI(dni);
            break;
        case 5:
            alert("Saliendo del programa");
            break;
        default:
            alert("Opción incorrecta");
    }
}while (opc !== 5)