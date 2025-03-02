carlos = new Integrante("Carlos","1234Z", "Perea"); 
rab = new Integrante("Rab","2345D", "Delgado");


let cave = new Banda("Cave", new Date("1999-01-01"), "123456789", "Rock");

let acdc = new Banda("ACDC", "1998-01-20", "345353535", "Rock");

cave.mostrarBanda();

cave.agregarIntegrante(carlos);
acdc.agregarIntegrante(rab);-

cave.mostrarBanda();

listaBandas = [];

listaBandas.push(cave);
listaBandas.push(acdc);

Banda.buscarBandaPorNombre(listaBandas, "Cave");
Banda.ordenaPorAño(listaBandas);