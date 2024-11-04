class Alumno extends Persona {
    constructor(nombre, apellidos, dni, fecha_nacimiento, curso) {
        super(nombre, apellidos, dni, fecha_nacimiento);
        this.curso = curso;
        this.notas = new Map ();
    }

    imprimirPersona = () =>{
    super.imprimirPersona ();
    alert(`Curso: ${this.curso}, Notas: ${this.notas}`);
    }
    
    devuelveNotaMedia = (notas) =>{
        let valores = notas.values();
        let suma = 0;
        let contador = 0;
        for (let v of valores){
            suma = suma + v;
            contador ++; 
        }
        let media = suma / contador;
        document.write(`La nota media del alumno ${this.nombre} es de ${media}`)
        return media;
    }

    añadirNota = (materia, nota) => {
        this.notas.set(materia, nota);
    }

    /* ARRAY CON UN FILTER, TRANSFORMO EL MAPA EN UNA ARRAY Y BUSCO CON UN FILTER LA NOTA MAS ALTA CON SU MATERIA. */
    /* [[clave, valor], [clave, valor], [clave, valor]]*/

    buscaMejorNotaMateria = () =>{
        /* Primero encotramos la mejor nota */
        let mejorNota = Math.max(...this.notas.map(nota => nota.nota));
        /* Segundo buscamos la materia que tiene esa mejor nota */
        let MateriaConMejorNota = this.notas.filter(nota => nota.nota === mejorNota);
        document.write(`la mejor nota es ${MateriaConMejorNota} de las materias: `)
        MateriaConMejorNota.forEach(materia => {
            document.write(materia.materia);
        });

    }

    /*mejorNotaMateria = () => {
        let mejorNota = 0;
        let materiaMejorNota = "";
        for (let [materia, nota] of this.notas.entries()){
            if (nota > mejorNota){
                mejorNota = nota;
                materiaMejorNota = materia;
            }
        }
        return materiaMejorNota;
    }*/
}

var alumno1 = new Alumnos("Carlos", "Perea", "222Z", "2DAW");
alumno1.añadirNota("DWE", 8);
alumno1.añadirNota("DIW", 9);
alumno1.añadirNota("DAW", 7);

alumno1.imprimirPersona();
alumno1.devuelveNotaMedia();
alumno1.buscaMejorNotaMateria();