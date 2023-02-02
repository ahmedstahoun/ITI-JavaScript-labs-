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
Square.prototype = new Shape();
Square.prototype.constructor = Square;

Square.prototype.calcArea = function(){

    let area = this.sideLength*this.sideLength;
    console.log(area);
}


var square= new Square(5);
square.calcPerimeter();
square.calcArea();


