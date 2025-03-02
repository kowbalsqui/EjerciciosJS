let cita1 = new Cita("Sala1", "2025-03-20T18:00");
let cita2 = new Cita("Sala2", "2025-01-01");
let cita3 = new Cita("Sala3", "2025-03-03");

let cliente1 = new Cliente ("Carlos", "Perea", "29514256Z");
console.log(cita1)
cliente1.agregarCita(cita1);
cliente1.agregarCita(cita2);
cliente1.agregarCita(cita3);

cliente1.citasPendientes.push(cita2); 

cliente1.recordatorioCitas();


