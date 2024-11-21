const campoTexto = document.getElementById("mensaje");
const contador = document.getElementById("contador");

campoTexto.addEventListener("input", () => {
    const maxLength = campoTexto.maxLength; // Máximo permitido
    const currentLength = campoTexto.value.length; // Actual
    const remaining = maxLength - currentLength; // Restantes
    contador.textContent = `${remaining} caracteres disponibles`;
});