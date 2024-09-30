//Ejercicio 1:

/*var radio = prompt ("Ingrese el valor del raido: ");
var area = (4*3.14)*(radio*radio);
var volumen = (4/3)*3.14*(radio*radio*radio);
alert("El área del circulo es: " + area + "\nEl volumen del cilindro es: " + volumen);*/

//Ejercicio 2: 

/*var numero = prompt("Ingrese el número: ");
if (numero > 0){
    alert("El valor absoluto del numero es: " + numero);
}else if (numero < 0) {
    alert("El valor absoluto del numero es: " + numero*(-1));
}*/

//Ejercicio 3:

/*let numero = prompt("Ingrese un número: ");
if (numero != 0) {
    let numeroRevertido = parseInt(numero.split('').reverse().join(''));
    alert("Número revertido: " + numeroRevertido);
}else {
    alert("Error el numero ceor no se puede invertir");

}*/

//Ejercicio 4:

/*let hora = prompt("Ingrese la hora (0-23): ");
if (hora >= "07:30", hora <= "14:00") {
    alert("Buenos días");
}else if (hora >= "14:01", hora <= "20:30") {
    alert("Buenas tardes");
}else if (hora >= "20:31", hora <= "07:29") {
    alert("Buenas noches");
}*/

//Ejercicio 5

/*let anyo = prompt("Ingrese el año: ");
if (anyo % 4 == 0, anyo % 100 != 0){
    alert("El año " + anyo + " si es bisiesto.");
}else {
    alert("El año " + anyo + " no es bisiesto");
}*/

//Ejercicio 6

/*let x = parseFloat(prompt("ingrese el punto de X"));
let y = parseFloat(prompt("ingrese el punto de y"));

if (x == 0, y == 0){
    alert("El punto esta en el sitio de origen");
}else if (x == 0){
    alert("El punto esta en el eje Y");
}else if (y == 0){
    alert("El punto esta en el eje X");
}else if (x > 0 && y > 0){
    alert("El punto esta en el cuandrante I");
}else if (x < 0 && y > 0){
    alert("El punto esta en el cuadrante II");
}else if (x < 0 && y < 0){
    alert("El punto esta en el cuandrante III");
}else if (x > 0 && y < 0){
    alert("El punto esta en el cuandrante IV");
}*/

//Ejercicio 8

/*let numero = prompt("Ingresa un número");
let suma = 0;
for (let i = 1; i <= numero; i++) {
    let cuadrado = i * i;
    let cubo = i * i * i;
    suma += suma + i;
    alert("El cuadrado es :" + cuadrado);
    alert("El cubo es: " + cubo);
    alert("La suma de todos los numeros es: " + suma);
}*/

//Ejercicio 9

/*let numero = parseInt(prompt("Ingrese un número"));
let numMenor = numero; 
let numMayor = numero;
let suma = 0; 
let counter = 0;

while (numero > 0){
    if (numero > numMayor){
        numMayor = numero;
    }else if(numMayor > numMenor){
        numMenor = numero;
    }
    suma = suma + numero; 
    counter = counter + 1;
    numero = parseInt(prompt("Ingrese un número"));
}
let media = suma / counter; 
alert("El numero mayor es "+ numMayor);
alert("El numero menor es "+ numMenor);
alert("La media de los numeros es " + media);*/

//Ejercicio 10

/*let euros = parseInt(prompt("Ingrese la cantidad: "));
let menu = "MENU\n";
menu+="1. Dolares\n";
menu+="2. Libras\n";
menu+="3. Yenes\n";
menu+="4. Franco Suizo\n";
menu+="5. Corona noruega\n";
menu+="6. Salir\n";

let opc = 0;

do{
    opc = parseInt(prompt(menu));

    switch(opc){
        case 1: 
            let dolares = euros * 1.10;
            document.write(euros + " Euros en Dolares son: "+ dolares +"\n");
            break; 
        case 2:
            let libras = euros * 0.85;
            document.write(euros + " Euros en Libras son " + libras+"\n");
            break; 
        case 3:
            let yenes = euros * 160;
            document.write(euros + " Euros en Yenes son: " + yenes+"\n");
            break;
        case 4:
            let francoSuizo = euros * 0.95;
            document.write(euro + " Euros en Franco Suizo son " +francoSuizo+"\n");
            break; 
        case 5:
            let coronaNoruega = euros * 11.50;
            document.write(euro + " Euros en Corona Noruega son " + coronaNoruega+"\n");
            break; 
        default: document.write("La opcion no esta disponible, ingresa una valida"+"\n"); 
    }
}while (opc != 6);*/

//Ejercicio 11

/*let mes = parseInt(prompt("Ingresa el numero de mes: "));
switch(mes){
    case 1:
    alert("Este mes es Enero");
    break;
    case 2: 
    alert("Este mes es Febrero");
    break;
    case 3: 
    alert("Este mes es Marzo");
    break;
    case 4:
    alert("Este mes es Abril");
    break; 
    case 5: 
    alert("Este mes es Mayo");
    break; 
    case 6:
    alert("Este mes es Junio");
    break;
    case 7: 
    alert("Este mes es Julio");
    break;
    case 8:
    alert("Este mes es Agosto");
    break; 
    case 9:
    alert("Este mes es Septiembre");
    break;
    case 10:
    alert("Este mes es Octubre");
    break;
    case 11:
    alert("Este mes es Noviembre");
    break;
    case 12:
    alert("Este mes es Diciembre");
    break;
    default: ("No existe el mes ingresado"); 
}*/

//EJercicio 12

/*let nota = parseInt(prompt("Ingrese la nota del alumno: ")); 
if (nota < 5){
    document.write("Suspenso");
}else if(nota >= 5 && nota < 6){
    document.write("Aprobado"); 
}else if(nota >= 6 && nota < 7){
    document.write("Bien");
}else if(nota >= 7 && nota <= 8){
    document.write("Notable");
}else if(nota >= 9 && nota <= 10){
    document.write("Sobresaliente");
}*/

//Ejercicio 14

/*let genero = prompt("Ingrese el genero (H/M): ").toUpperCase();
let salarioH = 1350;
let salarioM = 1500;
let suma = 0;
let contador = 0;   

while(genero != "*"){
    if(genero == "H"){
        suma = suma + salarioH;
        contador = contador + 1;
        genero = prompt("Ingrese el genero (H/M): ").toUpperCase();
    }else if(genero == "M"){
        suma = suma + salarioM;
        contador = contador + 1;
        genero = prompt("Ingrese el genero (H/M): ").toUpperCase();
    }
}
let promedioH = suma / contador;
document.write("Promedio salarios: " + promedioM + "<br>");*/

//Ejercicio 17

/*let fecha1 = prompt("Ingrese la primer fecha (dd/mm/yyyy): ");
let fecha2 = prompt("Ingrese la segunda fecha (dd/mm/yyyy): ");
let dia1 = fecha1.split("/")[0];
let mes1 = fecha1.split("/")[1];
let anio1 = fecha1.split("/")[2];
let dia2 = fecha2.split("/")[0];
let mes2 = fecha2.split("/")[1];
let anio2 = fecha2.split("/")[2];
if (anio1 > anio2){
    document.write(fecha1 + "<br>");
    document.write(fecha2 + "<br>");
}else if (anio1 < anio2){
    document.write(fecha2 + "<br>");
    document.write(fecha1 + "<br>");
}else if (anio1 == anio2){
    if(mes1 > mes2){
        document.write(fecha1 + "<br>");
        document.write(fecha2 + "<br>");
    }else if(mes1 < mes2){
        document.write(fecha2 + "<br>");
        document.write(fecha1 + "<br>");
    }else if(mes1 == mes2){
        if(dia1 > dia2){
            document.write(fecha1 + "<br>");
            document.write(fecha2 + "<br>");
        }else if(dia1 < dia2){
            document.write(fecha2 + "<br>");
            document.write(fecha1 + "<br>");
        } else if(dia1 == dia2){
            document.write("Ambas fechas son iguales");
        }
    }
}*/

//Ejercicio 18

