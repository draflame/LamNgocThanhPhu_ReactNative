interface Movable {
  move(): void;
}
class Car implements Movable {
  move(): void {
    console.log("The car is driving on the road.");
  }
}
class Robot implements Movable {
  move(): void {
    console.log("The robot is walking forward.");
  }
}
const myCar: Movable = new Car();
myCar.move(); 

const myRobot: Movable = new Robot();
myRobot.move();