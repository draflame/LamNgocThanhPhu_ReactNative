"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rejectPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}
rejectPromise().then((msg) => console.log("msg: ", msg)).catch((err) => console.error(" Reject: ", err));
//# sourceMappingURL=Bai3.js.map