"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HelloAsync = new Promise((res) => {
    setTimeout(() => {
        res("Heloo Async");
    }, 2000);
});
HelloAsync.then((res) => console.log(res));
//# sourceMappingURL=Bai1.js.map