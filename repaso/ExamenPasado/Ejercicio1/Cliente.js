class Cliente{
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido; 
        this.dni = dni; 
        this.citasPendientes = [];
        this.historialCitas = []; 
    }

    agregarCita = (cita) =>{
        const ahora = new Date(); 
        if (cita.fecha_hora < ahora){
            console.log("No se pueden añadir citas anteriormente al dia")
            return; 
        }
        let mismoDia = this.citasPendientes.some(c => c.fecha_hora.toDateString() === cita.fecha_hora.toDateString());
        if (mismoDia){
            console.log("No se puede añadir una cita porque ya tienes otra el mismo dia"); 
            return; 
        }
        this.citasPendientes.push(cita);
        console.log("Cita añadida correctamente"); 
    }

    recordatorioCitas = () => {
        setInterval(() => {
            const ahora = new Date(); 
            const mañana = new Date(ahora);
            mañana.setDate(ahora.getDate() + 1);
    
            // 🔄 Mover citas pasadas al historial
            this.citasPendientes = this.citasPendientes.filter(c => {
                if (c.fecha_hora < ahora) {
                    this.historialCitas.push(c);
                    console.log("📌 Cita añadida al historial y eliminada de pendientes");
                    return false; // ❌ Se elimina de `citasPendientes`
                }
                return true; // ✅ Se mantiene en `citasPendientes`
            });
    
            // 🔔 Mostrar recordatorio en una nueva ventana hasta 3 veces
            this.citasPendientes.forEach(c => {
                if (c.fecha_hora.toDateString() === mañana.toDateString()) {
                    alert("Tienes una cita para mañana"); 
                }
            });
    
        }, 30000); // 🔄 Se ejecuta cada 30 segundos
    };
}