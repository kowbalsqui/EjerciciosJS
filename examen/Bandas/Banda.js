class Banda{
    constructor(nombre, año, telefono, estilo){
        this.nombre = nombre; 
        this.año = new Date(año);
        this.integrantes = []; 
        this.telefono = telefono; 
        this.estilo = estilo;
    }

    mostrarBanda = () =>{
        console.log(`Banda: ${this.nombre} creada en: ${this.año.getFullYear()} con estilo: ${this.estilo} con integrantes: ${this.integrantes.map(i => i.nombre)}`);
    }

    agregarIntegrante = (integrante) => {
        let existe = this.integrantes.some(i => i.dni === integrante.dni);
        if (existe) {
            console.log("Ya existe un integrante con ese DNI");
        } else {
            this.integrantes.push(integrante);
            console.log("Integrante agregado correctamente");
        }
    }

    static buscarBandaPorNombre = (listaBandas, nombre) =>{
        let banda = listaBandas.find(b => b.nombre === nombre); 
        banda.mostrarBanda();
        return banda;
    }

    static ordenaPorAño = (listaBandas) =>{
        let banda = listaBandas.sort((a, b) => a.año - b.año);
        banda.forEach(a => {
            a.mostrarBanda();
        }) 
        return banda; 
    }
}