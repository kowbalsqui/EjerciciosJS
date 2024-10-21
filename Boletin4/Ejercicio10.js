/*a:
function tripleAndFilter(arr){
    		return arr.map(function(value){
        			return value * 3;
     			}).filter(function(value){
       			return value % 5 === 0;
      		})
    }*/

let tripleAndFilter = (arr) => arr.map(value => value * 3).filter(value => value % 5 === 0);

/*b: 
function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }*/

let doubleOddNumbers = (arr) => arr.filter(value => value % 2 !== 0).map(value => value * 2);

/*c: 
function bar(){ 
let txt = ''; 
for(let i in arguments){ 
txt += arguments[i];
} 
return txt;
}*/

let bar = (...args) => args.reduce((txt, arg) => txt + arg, '');

/*El reduce se utiliza como concatenar, aqui lo que estamos diciendo es que se le va a pasar arguments como parametros, entonces con los arguments, 
hacemos el reduce con el texto para concatenarlos con los arguments y le decimos que lo sume o se añadan al arguments al valor de la variable*/

