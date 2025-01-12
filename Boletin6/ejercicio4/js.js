window.addEventListener("load", iniciar);

function iniciar() {
    obten_fortuna();
}

function obten_fortuna(){
    var hoy = new Date();
    let dichos = new Array(
        "Carpe Diem",
        "El silencio es oro, pero la cinta iaslante es plata",
        "Una manzana al día, mantiene al doctor en la lejania",
        "A cada uno lo suyo",
        "Si a la primera no lo consigues, intentalo de nuevo",
        "No te conformes con la mediocridad, pelea por el exito",
        "Vive y deja vivir"
    );
    var n = dichos.length; 
    let numero = Math.floor(Math.random() * n);
    let divPadre = document.createElement("div");
    divPadre.setAttribute("class", "padre");
    let h2primero = document.createElement("h2");
    h2primero.textContent = "Hoy es: " + hoy;
    let h2segundo = document.createElement("h2");
    h2segundo.textContent = "Hoy la suerte dice: ";
    let h2tercero = document.createElement("h2");
    h2tercero.textContent = dichos[numero]; 
    divPadre.appendChild(h2primero);
    divPadre.appendChild(h2segundo);
    divPadre.appendChild(h2tercero);

    document.body.appendChild(divPadre);
}

