"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `Student: ${this.name}, Age: ${this.age}`;
    }
}
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    getInfo() {
        return `Teacher: ${this.name}, Subject: ${this.subject}`;
    }
}
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    displayInfo() {
        console.log("\nTeachers:");
        this.teachers.forEach((teacher) => {
            console.log(teacher.getInfo());
        });
        console.log("\nStudents:");
        this.students.forEach((student) => {
            console.log(student.getInfo());
        });
    }
}
const school = new School();
school.addTeacher(new Teacher("Mr. Smith", "Math"));
school.addTeacher(new Teacher("Ms. Johnson", "English"));
school.addStudent(new Student("Alice", 15));
school.addStudent(new Student("Bob", 16));
school.displayInfo();
//# sourceMappingURL=Bai30.js.map