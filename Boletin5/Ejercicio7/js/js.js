window.addEventListener("load", function(){
    const radio = document.querySelectorAll('input[name="colores"]');
        radio.forEach(function(radio){
            radio.addEventListener("change", inicializar);
        });
});

function inicializar() {
  const color = document.querySelector('input[name="colores"]:checked');
  if (color){
    if (color.value === "rojo"){
        document.getElementById("coloresFormu").style.backgroundColor = "red" ;
    }else if (color.value === "verde"){
        document.getElementById("coloresFormu").style.backgroundColor = "green"; 
    }else {
        document.getElementById("coloresFormu").style.backgroundColor = "blue";  // Se establece el color azul por defecto en caso de no seleccionar ninguno.
    }
  }
}