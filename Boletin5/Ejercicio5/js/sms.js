window.addEventListener("load", inizializar);


function inizializar() {
    const campoTexto = document.getElementById("mensaje");
    const contador = document.getElementById("contador");
    const aviso = document.getElementById("aviso");
    const regex = /^[a-zA-Z0-9.,:;!?()¿¡\-_\s]+$/;

    
    campoTexto.addEventListener("input", () => {
        if (campoTexto === ""){
            document.getElementById("buttom").disabled = true;
        }else{
            document.getElementById("buttom").removeAttribute("disabled");
            const maxLength = campoTexto.maxLength; // Máximo permitido
            const currentLength = campoTexto.value.length; // Actual
            const remaining = maxLength - currentLength; // Restantes
            if(!regex.test(campoTexto.value)){
                document.getElementById("buttom").disabled = true;
                aviso.textContent = "Hay un caracter no permitido";
            }else {
                contador.textContent = `${remaining} caracteres disponibles`;
                aviso.textContent = "";
            }
        }
    });
};

