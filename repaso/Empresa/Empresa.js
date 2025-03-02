class Empresa{
    constructor(nombre){
        this.nombre = nombre; 
        this.empleados = []; 
    }

    contratarEmpleado(empleado){
        let existe = this.empleados.some(e =>
            e.nombre === empleado.nombre
        );

        if (existe){
            console.log("Empleado ya existe");
            return; 
        }else{
            this.empleados.push(empleado);
            console.log("Empleado constratado");
        }
    }

    listarEmpleados(){
        this.empleados.forEach(e =>{
            console.log(e.nombre + " en el departamento de " + e.departamento);
        });
    }

    subirSueldo(porcentaje){
        this.empleados.forEach(e =>{
            console.log(e.sueldo);
            e.aumentarSueldo(porcentaje);
            console.log(e.sueldo);
        })
        console.log("Sueldos actualizados");
    }
}