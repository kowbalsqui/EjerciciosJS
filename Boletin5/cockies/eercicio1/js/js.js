window.addEventListener("load", inicializar);

function inicializar(){
    cafe();  // Llama a la función que saluda y crea la cookie

    //Function para crear una cookie.
    function crearCockie (nombre ,valor, diasExp){
        const fecha = new Date();
        fecha.setTime(fecha.getTime() + (diasExp * 24 * 60 * 60 * 1000));  // Sumar los días de expiración
        const expiracion = "expira = " + fecha.toUTCString(); 
        document.cookie =  nombre + "=" + valor + ";" + expiracion + ";path=/";
    }

    //Function para obtener el valor de una cookie.

    function obtenerValorCookie (){
        return document.cookie
        .split(';')
        .find((cookie) => cookie.startsWith("name="))
        ?.split("=")[1];
    }

    //Funcion que saluda si tieines cookie y si no te la crea

    function cafe (){
        const nombre = obtenerValorCookie();
        if (nombre){
            document.getElementById('usuario').textContent = `Bienvenido de nuevo ${nombre}`
        }else{
            let nombreUser = prompt("Ingresa su nombre");
            crearCockie("name", `${nombreUser}`, 30);  // Crear cookie con nombre y 30 días de expiración
        }
    }

    const boton = document.getElementById('boton');
    boton.addEventListener('click', ()=>{
        cafe();
    });
}
