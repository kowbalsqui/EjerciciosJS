class Integrante {
    constructor(nombre, apellido, dni){
        this.nombre = nombre; 
        this.apellido = apellido; 
        this.dni = dni; 
    }

    mostrarInfoPersona = () =>{
        console.log(`El integrante ${this.nombre} ${this.apellido} tiene el DNI ${this.dni}`);
    }
}