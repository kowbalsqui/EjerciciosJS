let cita1 = new Cita("Pediatria", "2025-06-30");
let cita2 = new Cita("Traumatologia", "2021-06-30");
let cita3 = new Cita("Cardiologia", "2025-02-28");

let cliente1 = new Cliente("Juan", "Perez", "12345678A");
cliente1.agregarCita(cita1);
cliente1.agregarCita(cita2);   
cliente1.agregarCita(cita3);

cliente1.citasPendientes.push(cita2); 

cliente1.recordatorioCitas();