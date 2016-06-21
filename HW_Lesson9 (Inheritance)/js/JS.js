function Shape(name)
{
   this.name = name; 
}
let shape = new Shape("Shape");
/*
    ELLIPSE
*/
function Ellipse(width, height)
{
    Shape.call(this, "Ellipse");
    this.width = width;
    this.height = height; 
}
Ellipse.prototype = Object.create(Shape.prototype);
Ellipse.prototype.constructor = Ellipse;
Ellipse.prototype.area = function(){
    return Math.PI * this.width * this.height;
}
/*
    CIRCLE
*/
function Circle(radius)
{
    Shape.call(this, "Circle")
    this.radius = radius;
}
Circle.prototype = Object.create(Ellipse.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function(){
    return Math.PI * Math.pow(this.radius, 2);
}
/*
    RECTANGLE
*/
function Rectangle(width, height)
{
    Shape.call(this, "Rectangle");
    this.width = width;
    this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function(){
    return this.width * this.height;
}
Rectangle.prototype.toString = function(){
    document.write("Rectangle: <br/>");
    for (let i = 0; i < this.width; i++)
    {
        for (let j = 0; j < this.height; j++)
        {
            document.write(" * ");
        }
        document.write("<br/>");
    }
}
/*
    SQUARE
*/
function Square(height)
{
    Shape.call(this, "Square");
    this.height = height;
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
Square.prototype.area = function(){
    return Math.pow(this.height, 2);
}
Square.prototype.toString = function(){
    document.write("Square: <br/>");
    for (let i = 0; i < this.height; i++)
    {
        for (let j = 0; j < this.height; j++)
        {
            document.write(" * ");
        }
        document.write("<br/>");
    }
}

let ellipse = new Ellipse(10, 5);
let circle = new Circle(10);
let rectangle = new Rectangle(6, 8);
let square = new Square(20);

document.write("Ellipse area: " + ellipse.area());
document.write("<br/>");
document.write("Circle area: " + circle.area());
document.write("<br/>");
document.write("Rectangle area: " + rectangle.area());
document.write("<br/>");
document.write("Square area: " + square.area());
document.write("<br/><br/><br/>");

rectangle.toString();
square.toString();
