function mostraContenidoMayus () {
    const nombre = document.getElementById('nombre').value.toUpperCase();
    const apellido = document.getElementById('apellido').value.toUpperCase();
    const correoUsuario = document.getElementById('usuario').value.toUpperCase();
    const contraseña = document.getElementById('password').value.toUpperCase();
    const dia = document.getElementById('dia').value.toUpperCase();
    const mes = document.getElementById('mes').value.toUpperCase();
    const anio = document.getElementById('año').value.toUpperCase();
    const genero = document.getElementById('genero').value.toUpperCase();
    const prefijo = document.getElementById('prefijo').value.toUpperCase();
    const telefono = document.getElementById('telefono').value.toUpperCase(); 

    edad = (año) =>{
        let anio = new Date().getFullYear();
        let edad = anio - año;
        return edad; 
    }

    document.getElementById('edad').innerHTML = edad(anio);

    const datos = `
    <p>Nombre = ${nombre}.</p>
    <p>Apellido = ${apellido}.</p>
    <p>Correo del Usuario = ${correoUsuario}.</p>
    <p>Contraseña = ${contraseña}.</p>
    <p>Fecha de nacimiento = ${dia}/${mes}/${anio}</p>
    <p>Genero = ${genero}.</p>
    <p>Telefono = ${prefijo} ${telefono}</p>
    `;

    document.getElementById('datosRegistrados').innerHTML = datos;

     // Crear nueva ventana para mostrar los datos
  const ventanaNueva = window.open('', '_blank');
  ventanaNueva.document.write(`
    <h1>Datos Registrados</h1>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Apellidos:</strong> ${apellido}</p>
    <p><strong>Nombre de usuario:</strong> ${correoUsuario}</p>
    <p><strong>Contraseña:</strong> ${contraseña}</p>
    <p><strong>Fecha de Nacimiento:</strong> ${dia}/${mes}/${anio}</p>
    <p><strong>Sexo:</strong> ${genero}</p>
    <p><strong>Móvil:</strong> ${prefijo} ${telefono}</p>
  `);
}

document.getElementById('miFormulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    mostraContenidoMayus(); // Llama a tu función
  });

