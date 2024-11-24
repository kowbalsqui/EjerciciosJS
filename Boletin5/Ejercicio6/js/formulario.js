window.addEventListener("load", inicializar);

function inicializar() {
    const nombre = document.getElementById("name").value;
    const res = document.getElementById("respuesta");
    if (nombre != nombre.toUpperCase()) {
        res.textContent = "Repita en mayusculas porfavor:"
    } else {
        window.open("pagina-nueva.html", "_blank", "width=600,height=400")
    }
}
