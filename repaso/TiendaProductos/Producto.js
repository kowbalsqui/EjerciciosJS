class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre; 
        this.precio = precio; 
        this.stock = stock; 
    }

    vender = (cantidad)=>{
        if (this.stock >= cantidad){
            this.stock -= cantidad;
            console.log(`Se vendieron ${cantidad} unidades de ${this.nombre}`);
            return true;
        }else{
            console.log("No hay suficiente stock para ese producto"); 
            return false; 
        }
    }

    aumentarStock = (cantidad) =>{
        this.stock += cantidad; 
        console.log(`Se aumento el stock de ${this.nombre} en ${cantidad} unidades`);
    }

    mostrarInfo = () =>{
        console.log(`Nombre: ${this.nombre} - Precio: ${this.precio} - Stock: ${this.stock}`);
    }
}