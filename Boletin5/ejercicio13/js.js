window.addEventListener("load", inicializar)

function inicializar(){
    campoEnMinusculas();
}

function campoEnMinusculas(){
    let campoTexto = document.getElementById("nombre");
    campoTexto.addEventListener("blur",function(){
        campoTexto.value = String(campoTexto.value).toLowerCase();

    });
}