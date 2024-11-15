/* Seleccionamos el primer formualario que aparezca (en mi caso solo tenemos ese, si hubiese otro
deberiamos de ponerle un id al formulario) */
const formulario = document.querySelector('form');

/* Creamos un mapa que tenga clave el nombre del campo y el valor que sera el valor del campo */
let objValue = Array.from(formulario.document.querySelectorAll('[id]')).reduce((obj, value) => {
    obj[value.id] = value.value;
    return obj;
})

let ventanaNueva = window.open('', '_blank', 'width=800,height=600');
