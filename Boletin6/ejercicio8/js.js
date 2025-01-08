window.addEventListener('load', inicializar);

[
    {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
    {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
]

function inicializar(){
    const div = document.createElement("div");
    div.setAttribute("id", "todos-los-viajes");
    const body = document.getElementsByTagName("Body");
    body.appendChild(div);
}   