class Animal{
    name:string
    constructor(name:string){
        this.name=name
    }
    protected makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
    speak(): void {
        this.makeSound();
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    protected makeSound(): void {
    console.log("Woof! Woof!");
  }
}
class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    protected makeSound(): void {
        console.log("Meow! Meow!");
    }
}
const dog = new Dog("Buddy");
dog.speak();

const cat = new Cat("Whiskers");
cat.speak();
