class Estudiante{
    constructor(nombre, curso){
        this.nombre = nombre; 
        this.curso = curso; 
        this.notas = new Map();
    }

    agregarNotas = (asignatura, nota) =>{
        this.notas.set(asignatura, nota);
    }

    mostrarNotas = () =>{
        console.log(`Notas de ${this.nombre}`);
        this.notas.forEach((nota, asignatura) =>{
            console.log(`${asignatura}: ${nota}`);
        });
    }
}