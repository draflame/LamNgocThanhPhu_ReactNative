"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} barks: Woof! Woof!`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} meows: Meow!`);
    }
}
const animals = [
    new Dog("Buddy"),
    new Cat("Kitty"),
    new Animal("Generic Animal"),
];
for (const animal of animals) {
    animal.makeSound();
}
//# sourceMappingURL=Bai19.js.map