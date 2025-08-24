"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MathUtil {
    constructor() { }
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}
console.log("Add:", MathUtil.add(10, 5));
console.log("Subtract:", MathUtil.subtract(10, 5));
console.log("Multiply:", MathUtil.multiply(10, 5));
console.log("Divide:", MathUtil.divide(10, 5));
//# sourceMappingURL=Bai18.js.map