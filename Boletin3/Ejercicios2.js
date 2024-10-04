//Ejercicio 1: Revisar con el exec. y array.lenght

/*let nombres = prompt("Ingrese los nombres de los estudiantes, separados por comas:");
const empiezaCExpr = /^[C]/; //Expresión regular para verificar si el nombre empieza con C
const contieneEnieExpr = /[ñ]/; //Expresión regular para verificar si el nombre contiene la letra ñ
let sumaEmpeizaC = 0; 
let sumaEnie = 0;
try{
    //Hacemos un for con un split de los nombres separados por comas y con .trim() para eliminar espacios en blancos.
    //dentro del for, coparamos con un if si el nombre es igual a "ULTIMO".
    //Si es distinto vemos si cumple los requisitos de las expresiones regulares.
    for(let nombre of nombres.split(", ")){
        if(nombre.trim() === "ULTIMO"){
            break;
        }
        if(empiezaCExpr.test(nombre)){
            sumaEmpeizaC++;
        }
        if(contieneEnieExpr.test(nombre)){
            sumaEnie++;
        }
    }
    document.write("La suma de los nombres que empiezan con C es: " +sumaEmpeizaC + "<br>");
    document.write("La suma de los nombres que contienen la letra ñ es: " + sumaEnie);
}catch(error){
    console.error("Error al procesar los nombres:", error.mesage); 
}*/

//Ejercicio 2: Revisar con el exec.

/*let nombres = prompt("Ingrese los nombres de los estudiantes, separados por comas:");
const empiezaCExpr = /^[C]/; //Expresión regular para verificar si el nombre empieza con C
let suma = 0;
let empiezanConC = 0;
try{
    for(let nombre of nombres.split(", ")){
        suma = suma + 1;
        if(empiezaCExpr.test(nombre)){
            empiezanConC++;
        }
    }
    document.write("La cantidad de nombres es: " + suma + "<br>");
    document.write("La cantidad de nombres que empiezan con C es: " + empiezanConC);
}catch(error){
    console.error("Error al procesar los nombres:", error.mesage);
}*/

//Ejercicio 3: Revisar con el exec.

/*let texto = "En ocasiones anterior hemos compartido ejercicios de fuga de letras de palabras o de frases para trabajar, entre otros aspectos, la conciencia fonológica y la lectoescritura."
let empiezaConA = /^[Aa]/; //Expresión regular para verificar si la palabra empieza con A o a
sumaPalabra = 0;
sumaConVocal = 0;
try{
    for(let palabra of texto.replace(", ", " ").replace("  ", " ").replace(".", " ").split(" ")){
        sumaPalabra++;
        if(empiezaConA.test(palabra)){
            sumaConVocal++;            
        }
    }
    document.write("Hay " + sumaPalabra + " palabras" + "<br>");
    document.write("De las cuales " + sumaConVocal + " empiezan con la letra A o a" + "<br>");
}catch(error){
    console.error("Error al procesar el texto:", error.mesage);
}*/

//Ejercicio 4:

/*let texto = "Hola esto es un (texto) de prueba sin (parentesis";
let palabra = [];
for(let palabraSeparada of texto.split(" ")){
    if (palabraSeparada.includes("(") && palabraSeparada.includes(")")){
        palabra.push(palabraSeparada);
    }else if (palabraSeparada.includes("(")){
        palabra.push(palabraSeparada);
    }
}
document.write("Palabras que contienen paréntesis: " + palabra);*/

//Ejercicio 5: 

/*let texto = "hola que tal";
let inversa = ""; 
for (let i = texto.length -1; i >= 0; i--) {
    inversa += texto[i];
}
document.write("Texto invertido: " + inversa);

//Forma más facil y rapida: 

let texto = "hola que tal";
let invertido = texto.reverse();
document.write("Texto invertido: " + invertido);*/

//Ejercicio 6:

/*let descripcion = prompt("Ingrese separado por coma Nombre, Profesion y edad: ");
let edad = parseInt(descripcion.split(", ")[2]);
document.write("Usted tiene " + edad + " años"  );*/

//Ejercicio 7;

/*let correo = prompt("Ingrese su direccion de correo electronico: ");
let expresionCorreo = new RegExp (/[a-z\.0-9]+@w+\.(com|es|org)/);
while (!expresionCorreo.test(correo)){
    document.write("La direccion de correo no es valida");
    correo = prompt("Ingrese de nuevo la direccion de correo");
}
document.write("La direccion de correo es valida");*/

//Ejercicio 9:

/*let texto = prompt("Ingresa texto: ");
let textoSinEspacio = texto.replace(/\s+/g, "");
document.write(textoSinEspacio);*/

//Ejercicio 10:

/*let texto = prompt("Ingresa texto: ");
let expresionEspacios = /\s\s+/g;
texto = texto.replace(expresionEspacios, " ");
document.write(texto);*/

//Ejercicio 11:

/*let contraseña = prompt("ingresa la contraseña: ");
let expresionContraseña = /\w?\.?[0-9]?{8}/ ;
while (!expresionContraseña.exec(contraseña)){
    document.write("La contraseña no es valida, intente nuevamente");
    contraseña = prompt("ingresa la contraseña: ");
}*/

//EJercicio 11 coregido:

//let expresionContrsaeña = new RegExp (/([a-z]+[A-Z]+[0-9]+[&!?@]+){8,20}/)

//Ejercicio 12 a: 

/*let texto = "Todo lo malo en esta vida pasara si eres el malo de la pelicula y malo en todo el mundo";
let remplazante = " bueno";
let expresionMalo = /\s?malo/g;
while (expresionMalo.exec(texto)){
    texto = texto.replace(expresionMalo, remplazante);
}
document.write(texto);*/

//Ejercicio 12 b:

/*let texto = "Todo lo malo en esta vida pasara si eres el malo de la pelicula y malo en todo el mundo";
let remplazante = prompt("Ingresa la palabra por la que quieres remplazar la palabra malo");
let expresionMalo = /malo/g;
while (expresionMalo.exec(texto)){
    texto = texto.replace(expresionMalo, remplazante);
}
document.write(texto);*/

//Ejercicio 13:

/*let texto = <p>Las mejores ofertas en el gaming estan en www.pccomponentes.com y algunas veces estan dentro de www.amazon.es pero dificilmente encontrareis ofertas en www.mediamarkt.es.</p>
let expresionWeb = /((www)?[a-zA-Z.])(com|es|org)+/g;
while (expresionWeb.exec(texto)){
    let web = expresionWeb.exec(texto)[0];
    document.write("<a href='http://" + web + "'></a><br>");
}*/