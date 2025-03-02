class Reserva{
    constructor(habitacion, fecha_entrada, fecha_salida){
        this.habitacion = habitacion; 
        this.fecha_entrada = new Date(fecha_entrada);
        this.fecha_salida = new Date(fecha_salida);
    }
}