class Cliente {
    constructor(nombre, apellidos, dni ){
        this.nombre = nombre; 
        this.apellidos = apellidos;
        this.dni = dni; 
        this.citasPendientes = []; 
        this.historialCitas  = []; 
    }

    agregarCita = (cita) =>{
        const ahora = new Date(); 
        if (cita.fecha_hora < ahora){
            console.log("No se puede agendar una cita en el pasado");
            return;
        }
        const mismaFecha = this.citasPendientes.some(cit =>{
            cit.fecha_hora.toDateString() === cita.fecha_hora.toDateString();
        })
        
        if (mismaFecha){
            console.log("Ya tienes una cita agendada para ese día");
            return;
        }
        this.citasPendientes.push(cita);
        console.log("Cita agendada correctamente");
    }

    recordatorioCitas = () =>{
        setInterval(() =>{
            console.log("Estoy dentro jefe"); 
            const ahora = new Date();
            const mañana = new Date(ahora); // 📌 Copiamos `ahora`
            mañana.setDate(ahora.getDate() + 1); // 📌 Sumamos 1 día
            console.log(mañana);
            this.citasPendientes.forEach(c => {
                if (c.fecha_hora < ahora){
                    console.log("Elimindo cita antigua");
                    this.historialCitas.push(c);   
                    this.citasPendientes = this.citasPendientes.filter(cit => cit !== c); 
                }
            })
            console.log(this.historialCitas);
            this.citasPendientes.forEach(c =>{
                if (c.fecha_hora.toDateString() === mañana.toDateString()){
                    console.log("Recuerda que tienes una cita");
                    alert ("Tienes una cita para mañana"); 
                }
            });
        }, 6000);
    }
}