"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bai1_1 = require("./Bai1");
class Student extends Bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}
const student = new Student("Lam Ngoc Thanh Phu", 21, 12);
function display(student) {
    console.log(student);
}
display(student);
//# sourceMappingURL=Bai2.js.map