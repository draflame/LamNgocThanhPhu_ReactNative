"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time) {
    return new Promise((res) => {
        setTimeout(() => {
            res("Task done");
        }, time);
    });
}
simulateTask(2000).then((res) => console.log(res));
//# sourceMappingURL=Bai5.js.map