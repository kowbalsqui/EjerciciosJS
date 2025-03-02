class Empleado{
    constructor(nombre, sueldo, departamento){
        this.nombre = nombre; 
        this.sueldo = sueldo;
        this.deparatemnto = departamento;
    }

    aumentarSueldo(porcentaje){
        this.sueldo += this.sueldo * porcentaje / 100;
    }
}