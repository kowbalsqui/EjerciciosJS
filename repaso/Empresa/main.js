let empleado1 = new Empleado("Juan",1000,"Ventas");
let empleado2 = new Empleado("Ana",1200,"Ventas");
let empleado3 = new Empleado("Pedro", 1500,"Ventas");

let empresa1 = new Empresa("Textil");

empresa1.contratarEmpleado(empleado1);
empresa1.contratarEmpleado(empleado2);
empresa1.contratarEmpleado(empleado3);

empresa1.listarEmpleados();

empresa1.subirSueldo(10);