"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
function calculatePerimeter(rec) {
    return (rec.height + rec.width) * 2;
}
function calculateArea(rec) {
    return rec.height * rec.width;
}
const rec = new Rectangle(5, 10);
console.log(`perimeter: ${calculatePerimeter(rec)}; area: ${calculateArea(rec)}`);
//# sourceMappingURL=Bai4.js.map