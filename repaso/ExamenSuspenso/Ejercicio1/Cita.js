class Cita{
    constructor(sala, fecha_hora){
        this.sala = sala; 
        this.fecha_hora = new Date(fecha_hora);
    }

    mostrarCita = () =>{
        return `Cita en la sala ${this.sala} con dia ${this.fecha_hora}`;
    }
}