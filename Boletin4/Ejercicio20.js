/*Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona 
por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda?*/
function buscarPorNombre(nombre){
    for (var i = 0; i < guardaDatos.length; i++){
        if (guardaDatos[i][0] === nombre){
            alert(guardaDatos[i])
        }
    }
}

function buscarPorApellido(apellido){
    for (var i = 0; i < guardaDatos.length; i++){
        if (guardaDatos[i][1] === apellido){
            alert(guardaDatos[i])
        }
    }
}

function calculaEdad(edad){
    var hoy = new Date();
    var año = edad.split('-')[2];
    var años = hoy.getFullYear() - año; 
    return años; 

}

function buscarPorEdad(edad){
    for (var i = 0; i < guardaDatos.length; i++){
        if (edad == calculaEdad(guardaDatos[i][3])){
            alert(guardaDatos[i])
        }
    }
}

var guardaDatos = [['carlos', 'perea', '222z', '91-12-2005'], ['alvaro', 'conde', '333c', '20-04-2000']];
var opc = 0;
/*do{
    var datos = prompt("Ingrese su nombre, apellidos, DNI y fecha de nacimiento separados por comas: ");
    
    if (datos) {
        var persona = datos.split(", ");  
        guardaDatos.push(persona);  
    }
    
} while (datos !== ""); */
do{
    opc = parseInt(prompt("1. Igresar un nuevo usuario a la lista:\n 2. Buscar por nombre:\n 3. Buscar por apellidos\n 4. Buscar por Edad:\n 5. Salir del programa."))
    switch(opc){
        case 1:
            var datos = prompt("ingresa nombre, apellido, dni, fecha de nacimiento separado por comas: ")
            if (datos) {
                var persona = datos.split(", ");  
                guardaDatos.push(persona);  
            }
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
            var edad = prompt("Ingrese la edad a buscar: ");
            buscarPorEdad(edad);
            break;
        case 5:
            alert("Saliendo del programa");
            break;
        default:
            alert("Opción incorrecta");
    }
}while (opc !== 5)