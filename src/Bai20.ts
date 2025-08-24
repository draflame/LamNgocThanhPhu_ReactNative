interface Vehicle{
    name: string
    move(): void
}
class Car implements Vehicle{
    constructor(public name: string){}
    move(): void {
        console.log(`${this.name} is moving.`);
    }
}
class Bike implements Vehicle{
    constructor(public name: string){}
    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

const vehicles: Vehicle[] = [
    new Car("Toyota"),
    new Bike("Bike"),
];

for (const vehicle of vehicles) {
    vehicle.move();
}
