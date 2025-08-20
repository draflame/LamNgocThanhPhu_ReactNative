import {Person} from './Bai1'
class Student extends Person{
    constructor(name:string, age:number, grade:number){
        super(name,age)
        this.grade=grade;
    }
    grade:number
}

const student:Student=new Student("Lam Ngoc Thanh Phu",21,12);
function display(student: Student):void{
    console.log(student)
}
display(student)