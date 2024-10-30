/*Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. 
Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.*/

class Rectángulo{
    constructor(punto1, punto2){
        this.punto1 = punto1;
        this.punto2 = punto2;
    }

    calcularBase() {
    var base = (Math.abs(this.punto2.x - this.punto1.x)) ;     
    return base;
  }

  calcularAltura() {
    var altura = ( Math.abs(this.punto2.y - this.punto1.y));
    return altura;
  }

  calcularArea() {
    var area = (this.calcularBase() * this.calcularAltura()) ;
    return area;
  }

  calcularPerimetro() {
    var perimetro = (2 * (this.calcularBase() + this.calcularAltura())) ;
    return perimetro;
  }
}

// Crear dos puntos y un rectángulo a partir de ellos
var punto1 = new Punto(1,2);
var punto2 = new Punto(5,7);
var rectangulo = new Rectángulo(punto1, punto2);

document.write("base del rectangulo: "+rectangulo.calcularBase() + "<br>")
document.write("altura del rectangulo: "+rectangulo.calcularAltura()+ "<br>")
document.write("area del retangulo: "+rectangulo.calcularArea()+ "<br>")
document.write("perimetro del rectangulo: "+rectangulo.calcularPerimetro()+ "<br>")