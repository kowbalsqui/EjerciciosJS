class Cliente{
    constructor (nombre, apellidos, dni, reservas){
        this.nombre = nombre; 
        this.apellidos = apellidos; 
        this.dni = dni; 
        this.reservas = [];
    }

    agregarReserva = (reserva) =>{
        const ahora = new Date();
        if (reserva.fecha_entrada < ahora){
            console.log("No se puede hacer una reserva con fecha de entrada en el pasado");
            return; 
        }
        let mismaFecha = this.reservas.some(r => {
            return (
                (reserva.fecha_entrada >= r.fecha_entrada && reserva.fecha_entrada < r.fecha_salida) || // Entrada dentro de una reserva existente
                (reserva.fecha_salida > r.fecha_entrada && reserva.fecha_salida <= r.fecha_salida) || // Salida dentro de una reserva existente
                (reserva.fecha_entrada <= r.fecha_entrada && reserva.fecha_salida >= r.fecha_salida)  // La nueva reserva cubre toda la existente
            );
        });
        if (mismaFecha){
            console.log("Ya tienes una reserva para esas fechas");
            return; 
        }
        this.reservas.push(reserva);
        console.log("Reserva realizada correctamente");
    }

    recordatorio = () =>{
        setInterval(() =>{
            const mañana = new Date();
            mañana.setDate(mañana.getDate() + 1);
            this.reservas.forEach(r => {
                if (r.fecha_entrada.toDateString() === mañana.toDateString()){
                    console.log("Recuerda que tienes una reserva mañana");
                    alert("Recuerda que tienes una reserva mañana");
                } 
            });
        }, 60000);
    }
}