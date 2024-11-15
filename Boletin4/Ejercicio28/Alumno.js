class Alumno extends Persona {
    constructor(nombre, apellidos, dni, fecha_nacimiento, curso) {
        super(nombre, apellidos, dni, fecha_nacimiento);
        this.curso = curso;
        this.notas = new Map ();
    }

    imprimirPersona (){
    super.imprimirPersona ();
<<<<<<< HEAD
    alert(`Curso: ${this.curso}, Notas: ${this.notas}`);
    }
    
    devuelveNotaMedia = (...notas) =>{
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
=======
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
>>>>>>> 70a61029d21a757b4b9c6df2ff1e0dadcd3c15fa

    /* ARRAY CON UN FILTER, TRANSFORMO EL MAPA EN UNA ARRAY Y BUSCO CON UN FILTER LA NOTA MAS ALTA CON SU MATERIA. */
    /* [[clave, valor], [clave, valor], [clave, valor]]*/

<<<<<<< HEAD
    buscaMejorNotaMateria = () =>{
        /* Primero encotramos la mejor nota */
        let mejorNota = Math.max(...this.notas.map(nota => nota.nota));
        /* Segundo buscamos la materia que tiene esa mejor nota */
        let MateriaConMejorNota = this.notas.filter(nota => nota.nota === mejorNota);
        document.write(`la mejor nota es ${MateriaConMejorNota} de las materias: `)
=======
    /*buscaMejorNotaMateria = () =>{
        /* Primero encotramos la mejor nota 
        let mejorNota =  Math.max(...Array.from(this.notas.values()));
        /* Segundo buscamos la materia que tiene esa mejor nota 
        let MateriaConMejorNota = this.notas.filter(n => this.nota.nota === mejorNota);
        document.write(`la mejor nota es ${mejorNota} de las materias: `)
>>>>>>> 70a61029d21a757b4b9c6df2ff1e0dadcd3c15fa
        MateriaConMejorNota.forEach(materia => {
            document.write(materia.materia);
        });

<<<<<<< HEAD
    }

=======
    }*/

        obtenerMateriaMejorNota() {
            let mejorNota = Math.max(...Array.from(this.notas.values()));
            let materiaConMejorNota = Array.from(this.notas.entries())
                .filter(([materia, nota]) => nota === mejorNota)
                .map(([materia, nota]) => materia);
            
            console.log(`la mejor nota es ${mejorNota} de las materias: ${materiaConMejorNota}`)
    
            return materiaConMejorNota;
        }
>>>>>>> 70a61029d21a757b4b9c6df2ff1e0dadcd3c15fa
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

<<<<<<< HEAD
var alumno1 = new Alumno("Carlos", "Perea", "222Z", "2DAW");
alumno1.añadirNota("DWE", 8);
alumno1.añadirNota("DIW", 9);
alumno1.añadirNota("DAW", 7);

alumno1.imprimirPersona();
alumno1.devuelveNotaMedia();
alumno1.buscaMejorNotaMateria();
=======
var alumno1 = new Alumno("Carlos", "Perea", "222Z", "20-01-2005", "2DAW");
alumno1.aniadirNota("DWE", 9);
alumno1.aniadirNota("DIW", 9);
alumno1.aniadirNota("DAW", 7);

alumno1.imprimirPersona();
alumno1.devuelveNotaMedia();
alumno1.obtenerMateriaMejorNota();
>>>>>>> 70a61029d21a757b4b9c6df2ff1e0dadcd3c15fa
