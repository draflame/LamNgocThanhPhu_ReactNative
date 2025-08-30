"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time) {
    return new Promise((res) => {
        setTimeout(() => {
            res("Task done");
        }, time);
    });
}
function runInParallel() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = [
            simulateTask(1000),
            simulateTask(2000),
            simulateTask(1500)
        ];
        const results = yield Promise.all(tasks);
        console.log("All tasks completed:");
        results.forEach((result, index) => {
            console.log(`Task ${index + 1}: ${result}`);
        });
    });
}
runInParallel();
//# sourceMappingURL=bai16.js.map