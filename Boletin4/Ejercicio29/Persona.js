class Persona {
    constructor(nombre, apellidos, dni, fecha_nacimiento){
        this.nombre = nombre; 
        this.apellidos = apellidos; 
        this.dni = dni; 
        this.fecha_nacimiento = fecha_nacimiento;
    }
    imprimirPersona (){
        console.log((`Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, DNI: ${this.dni}, fecha_nacimiento: ${this.fecha_nacimiento}`));
        } 
}