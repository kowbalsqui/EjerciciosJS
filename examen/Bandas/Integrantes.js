class Integrante{
    constructor(nombre, dni, apellidos){
        this.nombre = nombre; 
        this.apellidos = apellidos; 
        this.dni = dni; 
    }

    mostrarIntegrante = () =>{
        console.log(`Nombre: ${this.nombre} ${this.apellidos} con DNI: ${this.dni}`);
    }
}