window.addEventListener('load', inicializar);

const json = [
    {src:"https://imgs.search.brave.com/mV1luj-rNLJWiepPpMj3SQOQ8t1wh9X9MvLdGxrfvU4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93ZWxs/YWdnaW8uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE1LzA5/L2xhLWltcG9ydGFu/Y2lhLWRlLWxhcy1p/bWFnZW5lcy1lbi1l/bC1kaXNlJUMzJUIx/by13ZWIxLmpwZw", desc: "descripcion1", specs: ["spec11", "spec12"]},
    {src:"https://imgs.search.brave.com/MxD7turrp5z_tnqJ3xiLNOn7LQTfvab5CRL3a02kAU0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtYmxvZy5ob3N0/Z2F0b3IubXgvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDgv/MzJfSW1hZ2Vuc1dl/Yl9CTE9HX0VTUC53/ZWJw", desc: "descripcion2", specs: ["spec21", "spec22"]},
]

function inicializar(){
    const div = document.createElement("div");
    div.setAttribute("id", "todos-los-viajes");
    const h1 = document.createElement("h1");
    const h1t = document.createTextNode("Subtitulo")
    h1.appendChild(h1t);
    div.appendChild(h1);
    for (let i = 0; i < json.length; i ++){
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const img = document.createElement("img");
        const p = document.createElement("p");
        img.setAttribute("src", json[i].src);
        const pt = json[i].desc;
        const ul2 = document.createElement("ul");
        ul2.setAttribute("class", "specs");
        for (let j = 0; j < json[i].specs.length; j++){
            const li2 = document.createElement("li");
            const li2t = [j];
            li2.append(li2t);
            ul2.appendChild(li2);
        }
        
        p.append(pt);
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(ul2);
        ul.appendChild(li);
        div.appendChild(ul);
    }
    const body = document.getElementsByTagName("Body")[0];
    body.appendChild(div);
}   