window.addEventListener("load", inciar);

const json = [
    {
        url_escudo_eq1: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq1: "Real Madrid",
        resultado_eq1: "3",
        url_escudo_eq2: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq2: "Barcelona",
        resultado_eq2: "1"
    },
    {
        url_escudo_eq1: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq1: "Atlético de Madrid",
        resultado_eq1: "2",
        url_escudo_eq2: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq2: "Sevilla FC",
        resultado_eq2: "2"
    },
    {
        url_escudo_eq1: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq1: "Valencia CF",
        resultado_eq1: "1",
        url_escudo_eq2: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq2: "Real Betis",
        resultado_eq2: "0"
    },
    {
        url_escudo_eq1: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq1: "Villarreal CF",
        resultado_eq1: "4",
        url_escudo_eq2: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq2: "Athletic Club",
        resultado_eq2: "2"
    }

];

function inciar(){
    EsquemayConten();
}

function EsquemayConten() {
    let partidos = document.createElement("div");
    partidos.setAttribute("id", "partidosAjax");

    for (let i = 0; i < json.length; i++) {
        let equipos = document.createElement("div");
        equipos.setAttribute("class", "equipos");
        equipos.setAttribute("style","display: inline-grid");

        let div1 = document.createElement("div");
        div1.setAttribute("class", "escudo");
        let img1 = document.createElement("img");
        img1.setAttribute("src", json[i].url_escudo_eq1);
        img1.setAttribute("alt", json[i].nombre_eq1);
        div1.addEventListener("mouseover", desplegar);
        div1.appendChild(img1);
        equipos.appendChild(div1);

        let div2 = document.createElement("div");
        div2.setAttribute("class", "equipo");
        div2.textContent = json[i].nombre_eq1;
        equipos.appendChild(div2);

        let div3 = document.createElement("div");
        div3.setAttribute("class", "resultado");
        div3.textContent = json[i].resultado_eq1;
        div3.addEventListener("mouseenter", aumentar)
        div3.addEventListener("mouseleave", normal)
        equipos.appendChild(div3);

        let div6 = document.createElement("div");
        div6.setAttribute("class", "resultado");
        div6.textContent = json[i].resultado_eq2;
        div6.addEventListener("mouseenter", aumentar)
        div6.addEventListener("mouseleave", normal)
        equipos.appendChild(div6);

        let div5 = document.createElement("div");
        div5.setAttribute("class", "equipo");
        div5.textContent = json[i].nombre_eq2;
        equipos.appendChild(div5);

        let div4 = document.createElement("div");
        div4.setAttribute("class", "escudo");
        let img2 = document.createElement("img");
        img2.setAttribute("src", json[i].url_escudo_eq2);
        img2.setAttribute("alt", json[i].nombre_eq2);
        div4.addEventListener("mouseover", desplegar);
        div4.appendChild(img2);
        equipos.appendChild(div4);

        let ul = document.createElement("ul");
        ul.setAttribute("style","display:none")
        
        let li1 = document.createElement("li")
        let a1 = document.createElement("a"); 
        a1.setAttribute("href", "/" + json[i].nombre_eq1 + json[i].nombre_eq2 + "/"); 
        a1.textContent = "Crónicas";

        li1.appendChild(a1);
        ul.appendChild(li1);

        let li2 = document.createElement("li");
        let a2 = document.createElement("a");
        a2.setAttribute("href", "/"+ json[i].nombre_eq1+json[i].nombre_eq2 +"/asilovivimos.html");
        a2.textContent = "Así lo vivimos";

        li2.appendChild(a2);
        ul.appendChild(li2);

        partidos.appendChild(equipos);
        equipos.appendChild(ul);
        
    }
    document.body.appendChild(partidos);
}

function desplegar(e){
    let padre = e.currentTarget
    padre.parentNode.lastChild.setAttribute("style", "display:block");

    setInterval (() => {
        padre.parentNode.lastChild.setAttribute("style", "display:none");
    },  3000);
}

function aumentar(e){
    let resultado = e.currentTarget;
    resultado.setAttribute("style", "font-size:200%")
}

function normal(e){
    let resultado = e.currentTarget;
    resultado.setAttribute("style", "font-size:100%")
}
