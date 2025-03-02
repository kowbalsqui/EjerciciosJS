let intergrante1 = new Integrante("Juan", "Perez", "1212121Z");
let intergrante2 = new Integrante("Luis", "Garcia", "1212121Z");
let intergrante3 = new Integrante("Ana", "Lopez", "12124321Z");

let banda1 = new Banda("Los Panchos", 1990, 666666666, "Rock");
let banda2 = new Banda("Los Chicos", 1995, 666666666, "Pop");
let banda3 = new Banda("Los negros", 2005, 333333333, "Pop");

banda1.añadirIntegrante(intergrante1);
banda1.añadirIntegrante(intergrante2); 
banda1.añadirIntegrante(intergrante3);

// banda1.mostrarBanda();
// banda1.mostrarIntegrantes();

let listaBandas = [banda1, banda2, banda3];
// Banda.imprimirListadoBanda(listaBandas);
Banda.buscarBandaPorNombre(listaBandas, "Los Chicos");
Banda.ordenarPorAñosFormacion(listaBandas);