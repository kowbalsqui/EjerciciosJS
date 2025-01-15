window.addEventListener("load", inciar);

function inciar(){
    div(); 
}

function div(){
    let div = document.createElement("div");
    let cor = document.createElement("p");

    div.style.width = "100px";       // Ancho del div
    div.style.height = "100px";      // Altura del div
    div.style.backgroundColor = "blue"; // Color de fondo (puedes cambiarlo)
    div.style.borderRadius = "50%"; // Hace el div redondo
    div.style.position = "relative";

    cor.style.position = "fixed"; // Mantén el texto fijo en la pantalla
    cor.style.bottom = "10px";
    cor.style.left = "10px";
    cor.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    cor.style.color = "white";
    cor.style.padding = "5px";
    cor.style.borderRadius = "5px";

    document.addEventListener("mousemove", function(e){
        div.style.left = e.pageX + "px"
        div.style.top = e.pageY + "px"
        cor.textContent = `X:${e.pageX} , Y:${e.pageY}`
    });

    document.body.appendChild(div);
    document.body.appendChild(cor)
}