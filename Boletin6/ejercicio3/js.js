window.addEventListener('load', inicializar);

function inicializar() {
    listaa();
}

function listaa() {
    let lista = document.getElementsByTagName('ul')[0];
    let items = lista.childNodes;
    for (let j = 0; j < items.length; j++) {
        if (j == 0) {
            let li = document.createElement('li');
            li.textContent = 'Primera posicion añadida por el DOM';
            lista.insertBefore(li, items[j]);
        }
        if (j == (items.length / 2)) {
            let li = document.createElement('li');
            li.textContent = 'Elemento agregado en la mitad';
            lista.insertBefore(li, items[j]);
        }
        // if (j == items.length -1){
        //     let li = document.createElement('li');
        //     li.textContent = 'ulltima posición añadida por el DOM';
        //     lista.appendChild(li);
        // }
    }
}

