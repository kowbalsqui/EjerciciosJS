class Banda{
    constructor(nombre, año_formacion, telefono, estilo){
        this.nombre = nombre; 
        this.año_formacion = año_formacion; 
        this.telefono = telefono; 
        this.estilo = estilo; 
        this.integrantes = [];
    }

    mostrarIntegrantes = () =>{
        this.integrantes.forEach(integrante =>{
            console.log(integrante.nombre + " " + integrante.apellidos + " " + integrante.dni); 
        });
    }

    mostrarBanda = () =>{
        console.log(`La Banda ${this.nombre} se formo en el año ${this.año_formacion} y su estilo es ${this.estilo}, para mas informacion llamar al telefono ${this.telefono}`);
    }

    añadirIntegrante = (integrante) =>{
        let existe = this.integrantes.some(integranteBanda => integranteBanda.dni === integrante.dni);
        if (existe){
            console.log("No se puede añadir un integrante con el mismo dni");
        }else {
            this.integrantes.push(integrante); 
        }
    }

    static imprimirListadoBanda = (lista) =>{
        lista.forEach(banda =>{
            banda.mostrarBanda();
            banda.mostrarIntegrantes();
            console.log("---------------------------------------------------");
        });
    }

    static buscarBandaPorNombre = (lista, nombre) =>{
        let banda = lista.find(banda => banda.nombre === nombre); 
        if(banda){
            banda.mostrarBanda();
            return; 
        }else {
            console.log("No se ha encontrado la banda"); 
        } 
    }

    static ordenarPorAñosFormacion = (lista) =>{
        let lista2 = lista.sort((a,b) => a.año_formacion - b.año_formacion); 
        Banda.imprimirListadoBanda(lista2); 
    }
}