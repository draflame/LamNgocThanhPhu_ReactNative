abstract class Appliance{
    abstract turnOn(): void;
}
class Fan extends Appliance {
    turnOn(): void {
        console.log("Fan is now ON");
    }
}
class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("AirConditioner. is now ON");
    }
}
const fan = new Fan();
fan.turnOn();
const airConditioner = new AirConditioner();
airConditioner.turnOn();