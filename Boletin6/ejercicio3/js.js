window.addEventListener('load', inicializar);

function inicializar() {
    listaa();
}

function listaa() {
    let lista = document.getElementsByTagName('ul')[0];
    let items = Array.from(lista.children); // Usamos .children para evitar nodos de texto.

    // Insertar en la primera posición
    let liPrimero = document.createElement('li');
    liPrimero.textContent = 'Primera posición añadida por el DOM';
    lista.insertBefore(liPrimero, items[0]);

    // Insertar en la mitad
    let mitadIndex = Math.floor(items.length / 2);
    let liMitad = document.createElement('li');
    liMitad.textContent = 'Elemento agregado en la mitad';
    lista.insertBefore(liMitad, items[mitadIndex]);

    // Insertar al final
    let liUltimo = document.createElement('li');
    liUltimo.textContent = 'Última posición añadida por el DOM';
    lista.appendChild(liUltimo);
}

