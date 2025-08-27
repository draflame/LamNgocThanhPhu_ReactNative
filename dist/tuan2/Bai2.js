"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function HelloAsync() {
    return new Promise((res) => {
        setTimeout(() => {
            res("Hello Async");
        }, 2000);
    });
}
HelloAsync().then((res) => console.log(res));
//# sourceMappingURL=Bai2.js.map