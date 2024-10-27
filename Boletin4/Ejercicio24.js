/*Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo array después de eliminar los elementos repetidos.*/
var array = prompt("Ingresa los arrays con su contenido");
(array)=>{
    var lista = new Set([...array]);
    alert(lista);
    return lista;
}