window.addEventListener("load", iniciar);

function iniciar(){
    expr();
}

function expr(){
    let pattern = /[A-Z]{3}-[1-5]{2}/
    let input = document.getElementsByTagName('input')[0];
    let boton = document.getElementsByTagName('input')[1];
    boton.addEventListener("click", function(e){
        let codigo = input.value;
        if(!pattern.test(codigo)){
            e.preventDefault();
            alert("El código no es válido. El formato debe ser: tres letras seguidas de un guion y dos números entre 1 y 5.");
        }
        localStorage.setItem("codigoProducto", input.value); 
    });
}