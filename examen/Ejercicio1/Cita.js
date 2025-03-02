class Cita {
    constructor(sala, fecha_hora){
        this.sala = sala;
        this.fecha_hora = new Date(fecha_hora);
    }

    imprimirCita = () =>{
        console.log(`Sala: ${this.sala}, Fecha y Hora: ${this.fecha_hora.toDateString()}`);
    }
}