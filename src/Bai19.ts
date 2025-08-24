
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.name} barks: Woof! Woof!`);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.name} meows: Meow!`);
  }
}

const animals: Animal[] = [
  new Dog("Buddy"),
  new Cat("Kitty"),
  new Animal("Generic Animal"),
];

for (const animal of animals) {
  animal.makeSound();
}
