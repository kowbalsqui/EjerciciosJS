//Ejercicio 1:

/*let ventana;
function abrirVentana(){
    ventana = window.open("", "_blank", "height=400,width=800");
    for (propiedad in window.navigator){
        document.write(propiedad + "<br>");
    }
}
abrirVentana();*/

//Ejercicio 2:

let ventana;
function abrirVentana(){
    ventana = windows.open("https://www.youtube.com", "_blank", "height=400,width=800");
        ventana.document.write("ventana.windows.navigator.platform ");
        ventana.document.write("<br>");
        ventana.document.write(ventana.windows.navigator.userAgent );
        ventana.document.write("<br>");
}
abrirVentana();