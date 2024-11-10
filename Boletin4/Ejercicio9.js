/*Escribe una función llamada elMenor que acepte un número variable de 
parámetros y devuelva el parámetro de menor valor pasado a la función.*/

/*function elMenor(...numero){
    alert( Math.min(...numero));
}

/*Escribe una función llamada colocaEnMedio que acepte como parámetros dos arrays y devuelva 
el primer array con todos los valores del segundo array colocados en el centro del primer array. */

/*function colocaEnMedio(arr1, arr2){
    for(var i=0; i<arr2.length; i++){
        arr1.splice(arr1.length / 2, 0, arr2[i]);
    }
    alert(arr1);
}

var arr1 = [1,2,6,7];
var arr2 = [3,4,5];

colocaEnMedio(arr1, arr2);

/* Escribe una función llamada uneArrays que acepte un número variable de parámetros 
(cada uno de ellos será un array) y devuelva un nuevo array con todos los parámetros concatenados.*/

function uneArrays (...arr){
    var nuevoArray = new Array();
    for (var elemento of arr){
        nuevoArray = nuevoArray.concat(elemento);
    }
    alert(nuevoArray);
}

unir = (...array) =>{
    let arrayNuevo = array.reduce((array, actual) => array.concat(actual));
    console.log(`el array total que tiene todo es ${arrayNuevo}`)
    return arrayNuevo;
}

unir([1,2], [3],[4,5]);