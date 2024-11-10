class Piloto {
    constructor (nombre, escuderia, time){
        this.nombre = nombre; 
        this.escuderia = escuderia; 
        this.time = time; 
    }

    imprmirPiloto = () =>{
        console.log(`El piloto ${this.nombre} de la escuderia ${this.escuderia} tiene una marca de tiempo de ${this.time} ms`);
    }

    static ordenaTiempo = (arrayPilotos) =>{
        let pilotosOrdenados = arrayPilotos.sort((a,b) => a.time - b.time);
        pilotosOrdenados.forEach(piloto =>{
            piloto.imprmirPiloto(); 
        })
    }

    static ordenaNombrePiloto = (array) =>{
        let pilotosOrdenado = array.sort((a,b) => a.nombre.localeCompare(b.nombre));
        pilotosOrdenado.forEach(piloto => {
            piloto.imprmirPiloto();
        })
    }
}

let arrayPilotos = new Array ();
let piloto001 = new Piloto ("Carlos", "Mercedes", 234);
let piloto002 = new Piloto ("Nerea", "Porche", 179);
let piloto003 = new Piloto ("Aaron", "RedBull", 130);
arrayPilotos.push(piloto001, piloto002, piloto003);

Piloto.ordenaTiempo(arrayPilotos);
Piloto.ordenaNombrePiloto(arrayPilotos);