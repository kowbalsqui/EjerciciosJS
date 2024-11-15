/* Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. 
Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.*/

let guardaDatos = [['carlos', 'perea', '222z', '91-12-2005'], ['alvaro', 'conde', '333c', '20-04-2000']];
let datos = "";
let opc = 0;

imprimirPersona = (persona) =>{
    console.log(`Nombre: ${persona[0]}`);
    console.log(`Apellidos: ${persona[1]}`);
    console.log(`DNI: ${persona[2]}`);
    console.log(`Fecha de nacimiento: ${persona[3]}`);
}

calculaEdad = (fecha) =>{
    let añoPersona = parseInt(fecha.split("-")[2]);
    let añoActual = new Date().getFullYear();
    let edad = añoActual - añoPersona;
    return edad;
}

mayorEdad = () => {
    // Crear la nueva ventana
    let nuevaVentana = window.open("", "_blank", "width=400,height=400");

    // Verificar si algún usuario es menor de 18 años
    for (let i = 0; i < guardaDatos.length; i++) {
        if (calculaEdad(guardaDatos[i][3]) >= 18) {
            nuevaVentana.document.write(`
                <p>Nombre: ${guardaDatos[i][0]}</p>
                <p>Apellidos: ${guardaDatos[i][1]}</p>
                <p>DNI: ${guardaDatos[i][2]}</p>
                <p>Fecha de nacimiento: ${guardaDatos[i][3]}</p>
                <br>
            `);
        }
    }

    // Cerrar el documento para que se procese
    nuevaVentana.document.close();
}

menorEdad = () =>{
     // Crear la nueva ventana
     let nuevaVentana = window.open("", "_blank", "width=400,height=400");

     // Verificar si algún usuario es menor de 18 años
     for (let i = 0; i < guardaDatos.length; i++) {
         if (calculaEdad(guardaDatos[i][3]) < 18) {
            let añosRestantes = 18 - calculaEdad(guardaDatos[i][3]);
            nuevaVentana.document.write(`
                 <p>Le queda ${añosRestantes} años para ser mayor de edad</p>
                 <br>
             `);
         }
     }
 
     // Cerrar el documento para que se procese
     nuevaVentana.document.close();
}

modificaDatos = (array) =>{
    let opc = 0;
    let dni = prompt("Ingresa el dni del usuario");
    let persona = array.find(persona => persona[2] === dni);
    if (persona){
        opc = parseInt(prompt("1. Modificar nombre:\n 2. Modificar apellidos:\n 3. Modificar DNI:\n 4. Salir:"));
        switch(opc){
            case 1:
                let nombreNuevo = prompt("Ingresa el nuevo nombre del usuario");
                persona.nombre = nombreNuevo; 
                console.log(`El nombre se ha cambiado a ${nombreNuevo}`);
                break;
            case 2:
                let apellidoNuevo = prompt("Ingresa el nuevo apellido");
                persona.apellido = apellidoNuevo; 
                break;
            case 3: 
                let dniNuevo = prompt("Ingresa el nuevo dni: ");
                persona.dni = dniNuevo;
                break;
            case 4:
                console.log("Saliendo del programa");
                break;
        }
    }else {
        console.log(`El usuario con dni ${dni} no existe, ingresa otro valido`);
    }
}

eliminaPersona = (array, nombre) =>{
    array.forEach(element => {
        if(element[0] === nombre){
            delete array[element];
        }else {
            console.log(`No se encuentra ningun usuario con nombre ${nombre}`);
        }
    });
} 


/*do{
     datos = prompt("Ingrese su nombre, apellidos, DNI y fecha de nacimiento separados por comas: ")
    if (datos){
        let persona = datos.split(", ");
        guardaDatos.push(persona);
    }
}while(datos !== "")*/

    /*opc = parseInt(prompt("1. Buscar por nombre:\n 2. Buscar por apellidos\n 3. Buscar por DNI:\n 4. Buscar por edad."));
    switch(opc){
        case 1:
            let nombre = prompt("Ingresa el nombre; ");
            let personaNombre = guardaDatos.filter(persona => persona[0] === nombre);
            if (personaNombre){
                personaNombre.forEach(persona =>{
                    imprimirPersona(persona);
                })
            }else{
                console.log("No hemos podido encontrar informacion de ese usuario");
            }
            break;
        case 2:
            let apellido = prompt("Ingresa el apellido");
            let persona = guardaDatos.filter(persona => persona[1] === apellido);
            if (persona){
                persona.forEach(persona =>{
                    imprimirPersona(persona);
                })
            }else{
                console.log("No hemos podido encontrar a la persona que busca");
            }
            break;
        case 3:
            let dni = prompt("Ingresa el dni del usuario");
            let personaDni = guardaDatos.filter(persona => persona[2] === dni);
            if (personaDni){
                personaDni.forEach(persona =>{
                    imprimirPersona(persona);
                })
            }else{
                console.log("No se ha encontrado informacion sobre ese usuario");
            }
            break;
        case 4:
            let edad = parseInt(prompt("Ingresa la edad del usuario"));
            let personaEdad = guardaDatos.filter(persona => calculaEdad(persona[3]) === edad);
            if (personaEdad){
                personaEdad.forEach(persona =>{
                    imprimirPersona(persona);
                })
            }else{
                console.log("No se ha encontrado un usuario con dicha edad en el sistema");
            }
            break;  
    }*/


modificaDatos(guardaDatos);
/*console.log("Lita de personas:"); 
for (let i = 0; i < guardaDatos.length; i++){
    console.log(`Nombre: ${guardaDatos[i][0]}`);
    console.log(`Apellidos: ${guardaDatos[i][1]}`);
    console.log(`DNI: ${guardaDatos[i][2]}`);
    console.log(`Fecha de nacimiento: ${guardaDatos[i][3]}`);
}*/