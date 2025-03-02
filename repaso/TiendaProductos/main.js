let p1 = new Producto("Camisa", 100, 10);
let p2 = new Producto("Pantalon", 200, 5);
let p3 = new Producto("Calcetines", 50, 15);

let t1 = new Tienda("Tienda 1");

t1.agregarProducto(p1);
t1.agregarProducto(p2);
t1.agregarProducto(p3);

t1.listarProductos();

t1.venderProducto("Camisa", 5);
t1.venderProducto("Pantalon", 10);
t1.venderProducto("Calcetines", 20);

t1.listarProductos();