class Employee{
    name: string
    salary: number
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}
class Manager extends Employee{
    department: string
    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }
}
class Developer extends Employee{
    programmingLanguage: string
    constructor(name: string, salary: number, programmingLanguage: string) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }
}
const employee1 = new Manager("Thanh Phu", 80000, "HR");
const employee2 = new Developer("Anh Thu", 90000, "TypeScript");

console.log("Manager:", employee1.name, "Salary:", employee1.salary, "Department:", employee1.department);
console.log("Developer:", employee2.name, "Salary:", employee2.salary, "Programming Language:", employee2.programmingLanguage);