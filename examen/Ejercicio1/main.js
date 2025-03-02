/* Creacion de las citas */

let cita1 = new Cita("Odontologia", new Date(2025, 2, 1));
let cita2 = new Cita("Pediatria", new Date(2024, 0, 1));
let cita3 = new Cita("Traumatologia", new Date(2025, 2, 2));

cita1.imprimirCita();
cita2.imprimirCita();
cita3.imprimirCita();

/* Creacion de clientes */

let cliente1 = new Cliente("Juan", "Perez", "12345678z");


/* Agregacion de citas al cliente */

cliente1.agregarCita(cita1);
cliente1.agregarCita(cita2);
cliente1.agregarCita(cita3);

console.log(cliente1.citasPendientes);

cliente1.recordatorio();

console.log(cliente1.historialCitas);
