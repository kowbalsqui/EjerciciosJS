window.addEventListener("load", inicializar);

function inicializar() {
    let boton = document.getElementById("btn").addEventListener("click", validar);
}

function validar(){
    let res = document.getElementById("respuesta");
    let nombre = document.getElementById("nombre").value;
    let nombreMayusculas = nombre.toUpperCase();
    if(nombre === ""){
        res.textContent = "Por favor, introduce tu nombre";
    }else if (nombreMayusculas != nombre) {
        res.textContent = "Repita en mayusculas porfavor:"
    } else {
        res.textContent = "";
        window.open("pagina-nueva.html", "_blank", "width=600,height=400")
    }
}