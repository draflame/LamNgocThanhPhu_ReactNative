"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
const box1 = new Box(123);
const box2 = new Box("Hello");
console.log(`box 1: ${box1.getValue()}`);
console.log(`box 2: ${box2.getValue()}`);
//# sourceMappingURL=Bai16.js.map