window.addEventListener("load", iniciar);

function iniciar(){
    crearEnlace(); 
}

function crearEnlace(){
    let enlace = document.createElement("a");
    enlace.textContent = "Enlace de prueba a youtube";
    enlace.setAttribute("href", "www.youtube.com");

    document.body.appendChild(enlace);

    let div = document.createElement("div");
    let href = enlace.getAttribute("href");
    div.textContent = `EL enlace contiene una url hacia ${href}`;
    
    document.body.appendChild(div);
}