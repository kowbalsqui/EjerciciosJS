/*Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona)*/

class Persona{
    consructor(nombre, apellidos, dni, edad){
        this.nombre = nombre; 
        this.apellidos = apellidos; 
        this.dni = dni; 
        this.edad = edad;
    }

    buscaApellido = (apellidos) => {
        return this.apellidos === apellidos;
    }
}
