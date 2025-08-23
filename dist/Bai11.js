"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`${this.name} says woof!`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log(`${this.name} says meow!`);
    }
}
const dog = new Dog("Sang");
const cat = new Cat("Mimi");
dog.bark();
cat.meow();
//# sourceMappingURL=Bai11.js.map