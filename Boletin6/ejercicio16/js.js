window.addEventListener("load", iniciar);

function iniciar(){
    campoTexto(); 
}

function campoTexto(){
    let array = [];

    let div = document.createElement("div");
    let campoTexto = document.createElement("input");
    let submit = document.createElement("input");
    let p = document.createElement("p");

    campoTexto.setAttribute("type", "text");
    campoTexto.setAttribute("placeholder", "Escribe algo...");
    submit.setAttribute("type", "submit");
    submit.value = "Añadir";

    div.appendChild(campoTexto);
    div.appendChild(submit);
    document.body.appendChild(div);
    document.body.appendChild(p);

    submit.addEventListener("click", function(event){
        añadirArray(event, campoTexto, array, p);
    });
}

function añadirArray(event, campoTexto, array, p){
    event.preventDefault();

    let valor = campoTexto.value.trim();
    if (valor){
        array.push(valor);
        p.textContent += (p.textContent ? ", " : "") + valor;
        campoTexto.value = "";
    }else {
        alert("Escriba algo para poder añadirlo");
    }
}