/*Escribe una función que reciba como argumento de entrada un array de números y 
averigue utilizando métodos del objeto Math cuál es el menor y el mayor de ellos.*/

findMinMax = (...arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    alert(min + ", " + max);
    return { min, max };
}

findMinMax(1, 2, 3, 4, 5);