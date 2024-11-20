 // Función para verificar la respuesta
 function verificarRespuesta() {
    // Obtener el valor correcto de la respuesta
    const r2 = document.getElementById('res1b').value; // París es la respuesta correcta
    const b2 = document.getElementById('res2b').value; //Nilo es el rio más largo del mundo

    // Seleccionar el radio button marcado
    const respuestaSeleccionada = document.querySelector('input[name="pregunta1"]:checked');
    const respuestaSeleccionada2 = document.querySelector('input[name= "pregunta2"]:checked');

    // Verificar si hay una respuesta seleccionada
    if (respuestaSeleccionada) {
        const valor = respuestaSeleccionada.value; // Obtener el valor del radio seleccionado

        // Comparar la respuesta seleccionada con la respuesta correcta
        if (valor !== r2) {
            // Mostrar el mensaje si la respuesta es incorrecta
            document.getElementById('repsuesta1').innerHTML = 'La respuesta correcta es París.';
        } else {
            // Mostrar el mensaje si la respuesta es correcta
            document.getElementById('repsuesta1').innerHTML = '¡Correcto!';
        }
    }

    if (respuestaSeleccionada2){
        const valor = respuestaSeleccionada2.value; //Valor del radio de la segunda pregunta

        if (valor !== b2){
            document.getElementById('repsuesta2').innerHTML = 'La repsuesta correcta es el Nilo';
        }else {
            document.getElementById('repsuesta2').innerHTML = 'Correcto';
        }
    }
}

// Asegurarse de que el DOM esté completamente cargado antes de ejecutar el código
window.addEventListener('load', function () {
    // Seleccionar todos los radio buttons
    const radioButtons = document.querySelectorAll('input[name="pregunta1"]');
    const radioButtons2 = document.querySelectorAll('input[name="pregunta2"]');

    // Añadir el evento 'change' a cada radio button
    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', verificarRespuesta);
    });

    radioButtons2.forEach(function(radioButtons2){
        radioButtons2.addEventListener('change', verificarRespuesta);
    });
});