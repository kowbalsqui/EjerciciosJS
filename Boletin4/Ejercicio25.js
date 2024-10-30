/*Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está.*/

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /*cuadrante() {
        if (this.x > 0 && this.y > 0) {
            alert("Cuadrante 1") ;
        } else if (this.x < 0 && this.y > 0) {
            alert("Cuadrante 2"); 
        } else if (this.x < 0 && this.y < 0) {
            alert("Cuadrante 3");
        } else if (this.x > 0 && this.y < 0) {
            alert(" Cuadrante 4")
        } else {
            alert( "Coordenadas en el origen");
        }
    }*/
}

/*var punto1 = new Punto(5,-4);
console.log(punto1.cuadrante());*/