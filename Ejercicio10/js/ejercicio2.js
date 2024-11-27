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
    });

    apellido.addEventListener("input", ()=>{
        if (apellido.value.trim() === ""){
            document.getElementById('textApellido').textContent = "El apellido no puede estar vacio";
        }else if (apellido.value.length < 4){
            document.getElementById('textApellido').textContent = "El apellido no puede ser menor de 4 caracteres";
        }
    });

    correoUsuario.addEventListener("input", ()=>{
        let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (correoUsuario.value.trim() === ""){
            document.getElementById('textUser').textContent = "El correo de usuario no puede estar vacio";       
        }else if (!correoUsuario.value.test(pattern)){
            document.getElementById('textUser').textContent = "El correo de usuario no cumple los criterios minimos";
        }else{
            document.getElementById('textUser').textContent = ""
        }
    });

    contraseña.addEventListener("input", ()=>{
        let pattern = /[a-zA-Z0-9_-]/
        if (contraseña.value.trim() === ""){
            document.getElementById('textPasswd').textContent = "La contraseña no puede quedarse vacia";
        }else if (contraseña.value.length < 5){
            document.getElementById('textPasswd').textContent = "La contraseña no puede ser meno a 5 caracteres";
        }else if (!contraseña.value.test(pattern)){
            document.getElementById('textPasswd').textContent = "Las contraseña no cumple los criterios minimo"; 
        }else{
            document.getElementById('textPasswd').textContent = "";
        }
    });

    contraseñaConfirm.addEventListener("input", ()=>{
        if (contraseñaConfirm.value.trim() === ""){
            document.getElementById('textPasswd2').textContent = "La confirmacion no puede ser vacia o nula"; 
        }else if (contraseñaConfirm.value != contraseña.value){
            document.getElementById('textPasswd2').textContent = "NO coincide con la contraseña";
        }else {
            document.getElementById('textPasswd2').textContent = ""; 
        }
    });

    dia.addEventListener("input", ()=>{
        if (dia.value === 0){
            document.getElementById('textDia').textContent = "EL dia no puede ser 0 o vacio";
        }else if (dia.value > 30){
            document.getElementById('textDia').textContent = "EL dia no puede ser mayor de 30";
        }else {
            document.getElementById('textDia').textContent = "";
        }
    })
}