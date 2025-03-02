class Integrante {
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    mostrarIntegrantes = () =>{
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, DNI: ${this.dni}`);
    }
}