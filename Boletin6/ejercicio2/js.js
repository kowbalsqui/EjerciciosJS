window.addEventListener('load', inicializar);

function inicializar(){
    const p = document.createElement('p');
    const em = document.createElement('em');
    const emT = document.createTextNode('contenido');
    const pT = document.createTextNode('Este es el ')

    em.appendChild(emT);
    p.appendChild(pT);
    p.appendChild(em);
    p.appendChild(document.createTextNode(' de mi parrafo'));

    const elemento = document.getElementById('texto');
    elemento.appendChild(p);
}