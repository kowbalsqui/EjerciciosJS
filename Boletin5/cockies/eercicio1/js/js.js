window.addEventListener("load", inicializar);

function inicializar() {
    let nombreUsuario, numeroHabitacion;

    cargarDatosUsuario();
    mostrarSaludo();

    const formulario = document.getElementById("formulario-cafe");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar recargar la página
        guardarPreferencias();
    });

    // Función para crear una cookie
    function crearCookie(nombre, valor, diasExp) {
        const fecha = new Date();
        fecha.setTime(fecha.getTime() + diasExp * 24 * 60 * 60 * 1000);
        document.cookie = `${nombre}=${valor};expires=${fecha.toUTCString()};path=/`;
    }

    // Función para obtener una cookie
    function obtenerCookie(nombre) {
        return document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith(`${nombre}=`))
            ?.split("=")[1];
    }

    // Función para cargar datos del usuario desde cookies o pedirlos con prompt
    function cargarDatosUsuario() {
        nombreUsuario = obtenerCookie("nombre");
        numeroHabitacion = obtenerCookie("habitacion");

        if (!nombreUsuario) {
            nombreUsuario = prompt("Ingresa tu nombre:");
            crearCookie("nombre", nombreUsuario, 30);
        }

        if (!numeroHabitacion) {
            numeroHabitacion = prompt("Ingresa tu número de habitación:");
            crearCookie("habitacion", numeroHabitacion, 30);
        }
    }

    // Función para mostrar el saludo y preferencias guardadas
    function mostrarSaludo() {
        const cafeFavorito = obtenerCookie("cafe");

        if (nombreUsuario && numeroHabitacion && cafeFavorito) {
            document.getElementById(
                "usuario"
            ).textContent = `¡Bienvenido de nuevo, ${nombreUsuario}! Tu café favorito (${cafeFavorito}) será enviado a tu habitación (${numeroHabitacion}).`;
        } else if (nombreUsuario && numeroHabitacion) {
            document.getElementById(
                "usuario"
            ).textContent = `¡Hola, ${nombreUsuario}! Por favor, selecciona tu café favorito.`;
        }
    }

    // Función para guardar preferencias de café en cookies
    function guardarPreferencias() {
        const cafeSeleccionado = document.querySelector(
            'input[name="cafe"]:checked'
        );

        if (cafeSeleccionado) {
            crearCookie("cafe", cafeSeleccionado.value, 30);
            alert(
                `¡Gracias, ${nombreUsuario}! Tu café (${cafeSeleccionado.value}) será enviado a la habitación ${numeroHabitacion}.`
            );
            mostrarSaludo();
        } else {
            alert("Por favor, selecciona un café antes de enviar.");
        }
    }
}
