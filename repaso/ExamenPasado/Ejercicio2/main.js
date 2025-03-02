let integrante1 = new Integrante("Carlos", "Perea", "2222Z"); 
let integrante2 = new Integrante ("Manuel", "Jurado", "3333Z");
let integrante3 = new Integrante ("Manolo", "Puertas", "3333Z"); 

let banda1 = new Banda ("Cave", "1999-02-24", 112233, "Rock");
let banda2 = new Banda ("ACDC", "2005-12-01", 114477, "Rock"); 

banda1.agregarIntegrantes(integrante1); 

banda2.agregarIntegrantes(integrante2);
banda2.agregarIntegrantes(integrante3);

// banda1.mostrarInfoBanda(); 
// banda2.mostrarInfoBanda(); 

let listaBandas = [banda1, banda2]; 

// Banda.imprimirListadoBandas(listaBandas);

// Banda.buscarBandaNombre(listaBandas, "ACDC"); 

Banda.ordenaBandaAño(listaBandas); 

