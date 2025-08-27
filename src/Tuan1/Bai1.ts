export class Person{
    constructor(name:string, age:number){
        this.name=name;
        this.age=age
    };
    name: string;
    age:number
}
const person:Person=new Person("Lam Ngoc Thanh Phu",21);
function display(person: Person):void{
    console.log(person)
}
