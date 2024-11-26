window.addEventListener("load", inicializar);

function inicializar(){
        let formulario = document.getElementById("miFormulario");
        let resett = document.getElementById("reset");
               
        resett.addEventListener("click", () =>{
            if(confirm("Estas seguro que quieres reiniciar el formulario")){
                formulario.reset();
            }
        });
        formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let correoUsuario = document.getElementById('usuario').value;
        let contraseña = document.getElementById('password').value;
        let contraseñaConfirm = document.getElementById('password2').value;
        let dia = document.getElementById('dia').value;
        let anio = document.getElementById('año').value;
        let telefono = document.getElementById('telefono').value;

   
            if (nombre === "") {
                document.getElementById('textNombre').textContent = "El nombre no puede ser vacío.";
            } else if (apellido === "") {
                document.getElementById('textNombre').textContent = ""; // Limpia el mensaje de error
                document.getElementById('textApellido').textContent = "El apellido no puede ser vacío.";
            } else  if (correoUsuario === "") {
                document.getElementById('textApellido').textContent = ""; // Limpia el mensaje de error
                document.getElementById('textUser').textContent = "El nombre de usuario no puede ser vacío.";
            } else if (contraseña === ""){
                document.getElementById('textUser').textContent = ""; // Limpia el mensaje de error
                document.getElementById('textPasswd').textContent = "La contraseña no puede ser vacía.";
            }else if(contraseñaConfirm === ""){
                document.getElementById('textPasswd').textContent = ""; // Limpia el mensaje de error
                document.getElementById('textPasswd2').textContent = "La confirmación de contraseña no puede ser vacía.";
            }else if (dia === 0){
                document.getElementById('textPasswd2').textContent = "";
                document.getElementById('textDia').textContent = "El dia no puede ser 0 o vacio"
            }else if (anio === 0){
                document.getElementById('textDia').textContent = "";
                document.getElementById('textAnio').textContent = "Escriba un año";
            }else if (telefono === 0){
                document.getElementById('textAnio').textContent = "";
                document.getElementById('textTel').textContent = "Escriba su numero de telefono"
            }else if (correoUsuario === ""){
                document.getElementById('textTel').textContent = "";
                document.getElementById('textCorreo').textContent = "Ingrese su usuario para continuar";
            } 
}); 
}