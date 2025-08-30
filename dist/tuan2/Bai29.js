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
function asyncTask(id) {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 2000) + 1000; // 1-3s
        setTimeout(() => {
            resolve(`Task ${id} finished in ${time} ms`);
        }, time);
    });
}
function queueProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Starting queue process...");
        const results = [];
        for (let i = 1; i <= 5; i++) {
            const result = yield asyncTask(i);
            console.log(result);
            results.push(result);
        }
        console.log("All tasks done!");
        console.log(results);
    });
}
queueProcess();
//# sourceMappingURL=Bai29.js.map