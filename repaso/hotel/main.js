Huelva = new Reserva(1, new Date(2025, 2, 1), new Date(2025, 2, 10));
Sevilla = new Reserva(3, new Date(2025, 2, 4), new Date(2025, 2, 6));
Almeria = new Reserva (187, new Date(2025, 1, 26), new Date(2025, 1, 28));

Carlos = new Cliente("Carlos", "García", "12345678A");
Carlos.agregarReserva(Huelva);
console.log(Carlos.reservas);
Carlos.agregarReserva(Sevilla);
console.log(Carlos.reservas);
Carlos.agregarReserva(Almeria);
console.log(Carlos.reservas);
Carlos.recordatorio();