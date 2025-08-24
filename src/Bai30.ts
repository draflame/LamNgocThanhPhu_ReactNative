class Student {
  constructor(public name: string, public age: number) {}

  getInfo(): string {
    return `Student: ${this.name}, Age: ${this.age}`;
  }
}
class Teacher {
  constructor(public name: string, public subject: string) {}

  getInfo(): string {
    return `Teacher: ${this.name}, Subject: ${this.subject}`;
  }
}

class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
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