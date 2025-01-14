window.addEventListener("load", inicializar);

function inicializar() {
    enlace(); // Crear el enlace dinámicamente
}

// Función para crear el enlace
function enlace() {
    let enlace = document.createElement("a");
    enlace.textContent = "Mostrar/Ocultar tabla"; // Texto del enlace
    enlace.href = "#"; // Para que el enlace no redirija
    enlace.style.cursor = "pointer"; // Cambiar el cursor al pasar por el enlace
    document.body.appendChild(enlace); // Agregar el enlace al cuerpo del documento

    // Variable para almacenar el estado (si la tabla está visible o no)
    let tablaVisible = false;
    let tabla; // Variable para almacenar la tabla creada

    // Evento al hacer clic en el enlace
    enlace.addEventListener("click", (e) => {
        e.preventDefault(); // Evitar comportamiento predeterminado del enlace (redirigir)
        
        if (!tablaVisible) {
            // Si la tabla no está visible, crearla y mostrarla
            tabla = crearTabla();
            document.body.appendChild(tabla);
            tablaVisible = true; // Actualizar el estado
        } else {
            // Si la tabla ya está visible, eliminarla
            tabla.remove();
            tablaVisible = false; // Actualizar el estado
        }
    });
}

// Función para crear una tabla dinámica
function crearTabla() {
    let table = document.createElement("table");
    for (let i = 0; i < 20; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 20; j++) {
            let td = document.createElement("td");
            td.textContent = "Prueba con Bucle";
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    table.style.border = "1px solid black";
    table.style.marginTop = "20px"; // Espaciado para que no quede pegada al enlace
    return table;
}
