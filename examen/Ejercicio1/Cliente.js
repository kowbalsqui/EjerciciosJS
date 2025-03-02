class Cliente{
    constructor(nombre, apellidos, dni){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.citasPendientes = [];
        this.historialCitas = []; 
    }

    agregarCita = (cita) =>{
        const ahora = new Date();
        if (cita.fecha_hora < ahora){
            console.log( "No se puede agendar una cita en el pasado");
            return;
        }
        const mismaFecha = this.citasPendientes.some(c => 
            c.fecha_hora.toDateString() === cita.fecha_hora.toDateString()
        );
        
        if (mismaFecha){
            console.log( "Ya tienes una cita agendada para ese día");
            return;
        }
        this.citasPendientes.push(cita);
        console.log("Cita agendada correctamente");
    }

    recordatorio = () =>{
        setInterval(() =>{
            const ahora = new Date();
            this.citasPendientes.forEach(c =>{
                if (c.fecha_hora < ahora){
                    this.historialCitas.push(c);
                    alert("Recuerda que tienes una cita cambiada al historial")
                    this.citasPendientes = this.citasPendientes.filter(cita => cita !== c);
                    console.log("Cita eliminadad y cambiada al historial")
                }else 
                    alert("No tienes ninguna cita en el historial"); 
                    console.log("No tienes ninguna cita en el historial");
            })
        },60000);
    }
}

