class Aula{
    constructor(nombre){
        this.nombre = nombre; 
        this.alumnos = [];
    }

    agregarAlumno = (alumno) =>{
        if(alumno instanceof Alumno){
            this.alumnos.push(alumno);
        }else{
            console.log("Solo podemos agregar a la lista los alumnos");
        }
    }

    buscarAlumnoDNI = (dni) =>{
        let alumno = this.alumnos.find(alumnos => alumnos.dni === dni);
        if (alumno){
            console.log(`El dni ${dni} coincide con el alumno ${alumno.nombre} con dni ${alumno.dni}`);
        }else{
            console.log(`No se encontro ningun alumno con dni ${dni}`);
        }
    }

    ordenarNotas = (nombre) =>{
        let alumno = this.alumnos.find(alumno => alumno.nombre === nombre); 
        if (alumno){
            let notasOrdenadas = Array.from(alumno.notas.entries()).sort((a,b) => b[1] - a[1]);
            console.log(`Las notas del alumno ${alumno.nombre} son:`);
            notasOrdenadas.forEach(([materia, nota]) => {
                console.log(`${materia} : ${nota}`);
            });
        }else{
            console.log(`El alumno ${nombre} no se ha encontrado en este aula, revise el alumno de nuevo`);
        }
    }

    imprimirAula = () =>{
        let nombreAlumnos = this.alumnos.map(alumnos => alumnos.nombre);
        console.log(`EL aula ${this.nombre} tiene a los alumnos ${nombreAlumnos.join(', ')}`);
    }

    ordenaAlumnosApellidos = () =>{
        let alumnosOrdenados = this.alumnos.sort((a,b) => b.apellidos[1] - a.apellidos[1]);
        alumnosOrdenados.forEach(alumno => {
            alumno.imprimirPersona(); 
        })
    }
}

let aula001 = new Aula ("001");
aula001.agregarAlumno(alumno1);
aula001.ordenaAlumnosApellidos();
aula001.ordenarNotas("Carlos");
aula001.buscarAlumnoDNI("222Z");
aula001.imprimirAula(); 