"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
    }
}
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Application started");
logger2.log("Another log message");
console.log("Same instance?", logger1 === logger2); // true
//# sourceMappingURL=Bai17.js.map