class Animal{
    name: string
    constructor(name: string) {
    this.name = name;
    }
}

class Dog extends Animal{
    constructor(name: string) {
        super(name);
    }
    bark():void{
        console.log(`${this.name} says woof!`)  ;
    }
}

class Cat extends Animal{
    constructor(name: string) {
        super(name);
    }
    meow():void{
        console.log(`${this.name} says meow!`);
    }
}
const dog:Dog= new Dog("Sang")
const cat:Cat= new Cat("Mimi")

dog.bark()
cat.meow()
