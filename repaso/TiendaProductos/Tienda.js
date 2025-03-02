class Tienda{
    constructor(nombre){
        this.nombre = nombre; 
        this.productos = []; 
    }

    agregarProducto = (producto) =>{
        let existe = this.productos.some(p => {
            return p.nombre === producto.nombre;
        });

        if (existe){
            console.log("El producto ya existe en la tienda"); 
        }else{
            this.productos.push(producto); 
            console.log(`Se ha agregado el producto ${producto.nombre} a la tienda`);
        }
    }

    venderProducto = (nombre, cantidad) =>{
        let existeProducto = this.productos.find(p => p.nombre === nombre);

        if (!existeProducto){
            console.log("El producto no existe en la tienda");
        }else{
            existeProducto.vender(cantidad);
        }
    }

    listarProductos = () =>{
        console.log(`Los producctos de la tienda ${this.nombre} son: `);
        this.productos.forEach(p =>{
            p.mostrarInfo();
        });
    }
}