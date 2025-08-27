"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
    speak() {
        this.makeSound();
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Meow! Meow!");
    }
}
const dog = new Dog("Buddy");
dog.speak();
const cat = new Cat("Whiskers");
cat.speak();
//# sourceMappingURL=Bai28.js.map