class Alumno extends Persona {
    constructor(nombre, apellidos, dni, fecha_nacimiento, curso) {
        super(nombre, apellidos, dni, fecha_nacimiento);
        this.curso = curso;
        this.notas = new Map ();
    }

    imprimirPersona (){
    super.imprimirPersona ();
    let notasArray = Array.from(this.notas.entries());
    let notasTexto = notasArray.map(([materia, nota]) => `${materia}: ${nota}`).join(', ');
    console.log(`Curso: ${this.curso}, Notas: ${notasTexto}`);
    }
    
    devuelveNotaMedia() {
        let valores = Array.from(this.notas.values()); // Convierte el iterador en un array
        let suma = valores.reduce((acum, valor) => acum + valor, 0); // Suma los valores
        let media = suma / valores.length;
        
        console.log(`La nota media es de ${media}`);
        return media;
    }
    
    

        aniadirNota (materia, nota)  {
            this.notas.set(materia, nota);
        }

    /* ARRAY CON UN FILTER, TRANSFORMO EL MAPA EN UNA ARRAY Y BUSCO CON UN FILTER LA NOTA MAS ALTA CON SU MATERIA. */
    /* [[clave, valor], [clave, valor], [clave, valor]]*/

    /*buscaMejorNotaMateria = () =>{
        /* Primero encotramos la mejor nota 
        let mejorNota =  Math.max(...Array.from(this.notas.values()));
        /* Segundo buscamos la materia que tiene esa mejor nota 
        let MateriaConMejorNota = this.notas.filter(n => this.nota.nota === mejorNota);
        document.write(`la mejor nota es ${mejorNota} de las materias: `)
        MateriaConMejorNota.forEach(materia => {
            document.write(materia.materia);
        });

    }*/

        obtenerMateriaMejorNota() {
            let mejorNota = Math.max(...Array.from(this.notas.values()));
            let materiaConMejorNota = Array.from(this.notas.entries())
                .filter(([materia, nota]) => nota === mejorNota)
                .map(([materia, nota]) => materia);
            
            console.log(`la mejor nota es ${mejorNota} de las materias: ${materiaConMejorNota}`)
    
            return materiaConMejorNota;
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
let alumno1 = new Alumno("Carlos", "Perea", "222Z", "20-01-2005", "2DAW");
alumno1.aniadirNota("DWE", 9);
alumno1.aniadirNota("DIW", 9);
alumno1.aniadirNota("DAW", 7);

/*alumno1.imprimirPersona();
alumno1.devuelveNotaMedia();
alumno1.obtenerMateriaMejorNota(); */