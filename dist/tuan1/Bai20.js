"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving.`);
    }
}
class Bike {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving.`);
    }
}
const vehicles = [
    new Car("Toyota"),
    new Bike("Bike"),
];
for (const vehicle of vehicles) {
    vehicle.move();
}
//# sourceMappingURL=Bai20.js.map