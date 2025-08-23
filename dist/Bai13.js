"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
}
class Square {
    constructor(length) {
        this.length = length;
    }
    area() {
        return this.length * this.length;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const square = new Square(5);
const circle = new Circle(3);
console.log("Area of square:", square.area());
console.log("Area of circle:", circle.area());
//# sourceMappingURL=Bai13.js.map