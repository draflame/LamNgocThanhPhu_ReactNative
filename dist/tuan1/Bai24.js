"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appliance {
}
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is now ON");
    }
}
class AirConditioner extends Appliance {
    turnOn() {
        console.log("AirConditioner. is now ON");
    }
}
const fan = new Fan();
fan.turnOn();
const airConditioner = new AirConditioner();
airConditioner.turnOn();
//# sourceMappingURL=Bai24.js.map