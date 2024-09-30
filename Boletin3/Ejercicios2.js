//Ejercicio 1:

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

//Ejercicio 2:

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

//Ejercicio 3:

let texto = "En ocasiones anterior hemos compartido ejercicios de fuga de letras de palabras o de frases para trabajar, entre otros aspectos, la conciencia fonológica y la lectoescritura."
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
}