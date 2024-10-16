//Ejercicio 1. Tarot:
/*let dateNow = new Date();  // Fecha y hora actuales
let datePrompt = prompt("Ingresa la fecha: ");  // Pedir fecha al usuario
let datePromptParsed = new Date(datePrompt);  // Convertir la fecha ingresada a objeto Date

if(dateNow.getTime() > datePromptParsed.getTime()){
    document.write(dateNow.toDateString());
}else if(dateNow.getTime() < datePromptParsed.getTime()){
    document.write(datePromptParsed.toDateString());
}*/

//Ejercicio 2:

/*let dia = parseInt(prompt("Ingresa el dia: "));
let mes = parseInt(prompt("Ingresa el mes : ")); 
let anio = parseInt(prompt("ingreasa el anio:"));
let date1 = new Date(anio,mes,dia);
dia = parseInt(prompt("Ingresa el dia: "));
mes = parseInt(prompt("Ingresa el mes : "));
anio = parseInt(prompt("Ingreasa el anio:"));
let date2 = new Date(anio,mes,dia);
if(date1.getTime() > date2.getTime()){
    document.write("La fecha 1 es mayor que la fecha 2.");
}else if(date1.getTime() < date2.getTime()){
    document.write("La fecha 2 es mayor que la fecha 1.");
}else{
    document.write("Las fechas son iguales.");
}*/

//Ejercicio 3.

/*let segundosTotales = parseInt(prompt("Ingresa el tiempo en segundos: "));
let horas = Math.floor(segundosTotales / 3600);
let minutos = Math.floor((segundosTotales % 3600) / 60);
let segundos = segundosTotales % 60; 

document.write("El tiempo es : "+ horas + ":" + segundos+ ":" + minutos);*/

//Ejercicio 4.

let fecha1 = new Date (2003, 5, 24);
let fecha2 = new Date (1999, 10, 9);

if(fecha1.getTime() > fecha2.getTime()){
    
    document.write("La fecha 1 es mayor que la fecha 2.");
}