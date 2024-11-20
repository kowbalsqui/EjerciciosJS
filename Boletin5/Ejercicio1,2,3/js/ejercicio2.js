/* Seleccionamos el primer formualario que aparezca (en mi caso solo tenemos ese, si hubiese otro
deberiamos de ponerle un id al formulario) */
const formulario = document.querySelector('form');

const nombre = document.getElementById('nombre');

let datos = `
<p><strong>Nombre:</strong> ${nombre}</p>
`;

