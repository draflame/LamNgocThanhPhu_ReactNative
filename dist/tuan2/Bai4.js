"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randNumber() {
    return new Promise((res) => {
        const randNumber = Math.round(Math.random() * 100);
        res(randNumber);
    });
}
randNumber().then((res) => console.log("Random number: " + res)).catch((err) => console.error(err));
//# sourceMappingURL=Bai4.js.map