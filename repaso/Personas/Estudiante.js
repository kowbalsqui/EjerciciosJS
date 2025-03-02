class Estudiante extends Persona{
    constructor(nombre, edad, curso){
        super(nombre, edad); 
        this.curso = curso; 
    }

    estudiar = () =>{
        console.log(`Estoy estudiando el curso de ${this.curso}`);
    }
}