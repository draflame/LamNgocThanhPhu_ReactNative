"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I teach ${this.subject}.`;
    }
}
const teacher = new Teacher("Phu", 21, "Mathematics");
console.log(teacher.introduce());
//# sourceMappingURL=Bai27.js.map