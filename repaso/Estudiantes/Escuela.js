class Escuela{
    constructor(nombre){
        this.nombre = nombre; 
        this.estudiantes = [];
    }

    matricularEstudiante = (estudiante) =>{
        let existe = this.estudiantes.some(e => e.nombre === estudiante.nombre);
        if (existe){
            console.log(`${estudiante.nombre} ya está matriculado en ${this.nombre}`);
        }else{
            this.estudiantes.push(estudiante);
            console.log(`${estudiante.nombre} ha sido matriculado en ${this.nombre}`);
        }
    }

    lsitarEstudiantes = () =>{
        console.log(`Estudiantes matriculados en ${this.nombre}`);
        this.estudiantes.forEach(e =>{
            console.log(e.nombre);
        });
    }

    mostrarMejorEstudiante = () =>{
        let mejorEstudiante = this.estudiantes.reduce((mejor, actual) =>{
            let promedioMejor = [...mejor.notas.values()].reduce((a, b) => a + b) / mejor.notas.size;
            let promedioActual = [...actual.notas.values()].reduce((a, b) => a + b) / actual.notas.size;
            return promedioMejor > promedioActual ? mejor : actual;
        });
        console.log(`El mejor estudiante de ${this.nombre} es ${mejorEstudiante.nombre}`);
    }
}