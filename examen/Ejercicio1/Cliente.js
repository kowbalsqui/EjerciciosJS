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

    // recordatorio = () =>{
    //     setInterval(() =>{
    //         const ahora = new Date();
    //         this.citasPendientes.forEach(c =>{
    //             if (c.fecha_hora < ahora){
    //                 this.historialCitas.push(c);
    //                 alert("Recuerda que tienes una cita cambiada al historial")
    //                 this.citasPendientes = this.citasPendientes.filter(cita => cita !== c);
    //                 console.log("Cita eliminadad y cambiada al historial")
    //             }else 
    //                 alert("No tienes ninguna cita en el historial"); 
    //                 console.log("No tienes ninguna cita en el historial");
    //         })
    //     },60000);
    // }















    recordatorio = () => {
        setInterval(() => {
            const ahora = new Date();
            const mañana = new Date(ahora);
            mañana.setDate(ahora.getDate() + 1);
    
            // 🔹 Mover citas pasadas al historial
            let citasPasadas = this.citasPendientes.filter(c => c.fecha_hora < ahora);
            this.historialCitas.push(...citasPasadas);
            this.citasPendientes = this.citasPendientes.filter(c => c.fecha_hora >= ahora);
    
            if (citasPasadas.length > 0) {
                console.log("📌 Citas movidas al historial:", citasPasadas);
            } else {
                console.log("✅ No tienes ninguna cita atrasada o pasada.");
            }
    
            // 🔔 Mostrar alerta si hay citas para mañana
            let citasMañana = this.citasPendientes.filter(c => c.fecha_hora.toDateString() === mañana.toDateString());
    
            if (citasMañana.length > 0) {
                alert("📅 Tienes una cita mañana.");
            } else {
                console.log("✅ No tienes citas programadas para mañana.");
            }
        }, 30000); // 🔄 Ejecutar cada 30 segundos
    };
    
}

