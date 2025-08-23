abstract class Shape{
    abstract area(): number;
}
class Square implements Shape{
    length: number
    constructor(length: number) {
        this.length = length;
    }
    area(): number {
        return this.length * this.length;
    }
}
class Circle implements Shape{
    radius: number
    constructor(radius: number) {
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}
const square= new Square(5);
const circle= new Circle(3);

console.log("Area of square:", square.area());
console.log("Area of circle:", circle.area());