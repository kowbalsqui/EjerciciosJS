window.addEventListener("load", inicializar);

function inicializar(){
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let correoUsuario = document.getElementById('usuario');
    let contraseña = document.getElementById('password');
    let contraseñaConfirm = document.getElementById('password2');
    let dia = document.getElementById('dia');
    let anio = document.getElementById('año');
    let telefono = document.getElementById('telefono');

    nombre.addEventListener("input", ()=>{
        if(nombre.value.trim() === ""){
            document.getElementById('textNombre').textContent = "El nombre no puede estar vacio";
        }else if (nombre.value.length < 3) {
            document.getElementById('textNombre').textContent = "El nombre debe de ser mayor que tres caracteres";
        }else{
            document.getElementById('textNombre').textContent = "";
        }
    })

    apellido.addEventListener("input", ()=>{
        if (apellido.value.trim() === ""){
            document.getElementById('textApellido').textContent = "El apellido no puede estar vacio";
        }else if (apellido.value.length < 4){
            document.getElementById('textApellido').textContent = "El apellido no puede ser menor de 4 caracteres";
        }
    })

    correoUsuario.addEventListener("input", ()=>{
        let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (correoUsuario.value.trim() === ""){
            document.getElementById('textUser').textContent = "El correo de usuario no puede estar vacio";
            if (correoUsuario.value.test(pattern)){
                document.getElementById('textUser').textContent = "";
            }else{
                document.getElementById('textUser').textContent = ""
            }
        }else{
            document.getElementById('textUser').textContent = "";
        } 
    })

}