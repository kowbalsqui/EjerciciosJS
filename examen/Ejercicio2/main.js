
let integrante1 = new Integrante("carlos", "perea", "111z");
let integrante2 = new Integrante("juan", "lopez", "222z");

let banda1 = new Banda("metallica", "1981", "555", "Metal");
let banda2 = new Banda("ACDC", "1999", "444", "Rock");

banda1.agregarIntegrante(integrante1);
banda2.agregarIntegrante(integrante2);

let listaBandas = [banda1, banda2];

console.log(listaBandas);
banda1.mostrarBanda();
