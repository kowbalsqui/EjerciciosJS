/*Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”).
 Añade la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados
Muestra el contenido de la estructura
Devuelve las abreviaturas de todos los módulos guardados
Devuelve el nombre completo de todos los módulos
Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos
*/

const modulos = new Map([["DWE", "Desarrollo Web Entorno Servidor"], ["DIW", "Desarrollo de Interfaces Web"], ["DAW", "Despliegue de Aplicaciones Web"], ["DWC", "Desarrollo Web Entorno Cliente"]]);
/*document.write(modulos.size+"<br>")+ "<br>";
document.write(...modulos)+"<br>";
let claves = modulos.keys();
for (let k of claves) {
    document.write(k+"<br>")
}
let valor = modulos.values();
for (let v of valor){
    document.write(v+"<br>")
}
document.write(modulos.has("DAW"));
modulos.delete("DAW");
const mapaOrdenado = new Map([...modulos].sort());
document.write(...mapaOrdenado);*/