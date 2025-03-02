class Banda{
    constructor(nombre, año, telefono, estilo){
        this.nombre = nombre; 
        this.año = new Date(año); 
        this.telefono = telefono; 
        this.estilo = estilo; 
        this.integrantes = []; 
    }

    mostrarInfoBanda = () =>{
        let integrantesTexto = this.integrantes.map(i => i.mostrarInfoPersona()).join("\n");
        console.log(`La Banda ${this.nombre} formada en el año ${this.año.getFullYear()} con estilo ${this.estilo} y con los integrantes \n${integrantesTexto}`)
    }

    agregarIntegrantes = (integrante) =>{
        let existe = this.integrantes.some(int => int.dni === integrante.dni); 
        if (existe){
            console.log("No se puede añadir otro integrante con el mismo dni"); 
            return; 
        }else {
            this.integrantes.push(integrante); 
            console.log("Integrante añadido con exito"); 
        }
    }

    static imprimirListadoBandas = (lista) =>{
        lista.forEach(banda =>{
            banda.mostrarInfoBanda();
        });
    }

    static buscarBandaNombre = (lista, nombre) =>{
        let banda = lista.find(banda => banda.nombre === nombre); 
        if (banda){
            banda.mostrarInfoBanda(); 
        }else{
            console.log("No hay ninguna banda con ese nombre"); 
            return;
        }
        
    }

    static ordenaBandaAño = (lista) =>{
        let bandaOrdenada = lista.sort((a,b) => a.año - b.año); 
        bandaOrdenada.forEach(i => i.mostrarInfoBanda());
    }
}