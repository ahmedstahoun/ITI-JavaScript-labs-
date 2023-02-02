function Shape(name,sides,sideLength){
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;

}

Shape.prototype.calcPerimeter = function(){
    let perimeter = this.sides*this.sideLength;
    console.log(perimeter);
}

function Square(sideLength){
    Shape.call(this,"sqaure",4,sideLength);

}
function Triangle(sideLength){
    Shape.call(this,"triangle",3,sideLength);
}

Square.prototype = new Shape();
Square.prototype.constructor = Square;
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

// function Triangle()
var square= new Square(5);
square.calcPerimeter();

var triangle = new Triangle(3);
triangle.calcPerimeter();