class Banda {
    constructor (nombre, anio, telefono, estilo){
        this.nombre = nombre;
        this.anio = anio;
        this.telefono = telefono;
        this.estilo = estilo;
        this.integrantes = [];
    }

    mostrarBanda = () =>{
        console.log(`Nombre: ${this.nombre}, Año de creación: ${this.anio}, Teléfono: ${this.telefono}, Estilo: ${this.estilo}`);
    }

    agregarIntegrante = (integrante) =>{
        if (integrante instanceof Integrante){
            for (let i = 0; i < this.integrantes.length;){
                if(this.integrantes[2] === null){
                    this.integrantes.push(integrante);
                    console.log(`Integrante: ${this.integrantes} añadido a la banda`);
                }else if(this.integrantes[2] != integrante.dni){
                    this.integrantes.push(integrante);
                    console.log(`Integrante: ${this.integrantes} añadido a la banda`);
                }
            }
        } else {
            console.log("El integrante introducido no es un integrante");
        }
    }
    static buscarBandaNombre = (nombre) =>{
        let banda = listaBandas.find(banda => banda.nombre === nombre);
        if(banda){
            banda.mostrarBanda();
        }else{
            console.log("Banda no encontrada");
        }
    }
    
    static ordenaBandaAnio = () =>{
        let listaordenadas = listaBandas.sort((a, b) => b.anio - a.anio);
        console.log(listaordenadas);
    }
}


