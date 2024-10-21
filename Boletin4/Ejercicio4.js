/* Realizar una función que pase una cantidad de Mbyte, Kbytes y bytes a bytes. Probadla en una página.*/

var cantidad = prompt("Introduce una cantidad");
var type = prompt("Introduce el tipo de medida (Mbyte, Kbyte, byte)");
function convertBytes(cantidad, type) {
    switch (type) {
        case 'Mbyte':
            return cantidad * 1024 * 1024;
        case 'Kbyte':
            return cantidad * 1024;
        case 'byte':
            return cantidad;
        default:
            return 'Invalid type';
    }
}

convertBytes(cantidad, type);