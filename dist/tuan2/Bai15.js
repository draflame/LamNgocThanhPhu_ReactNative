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
function doubleAfter1Sec(num) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => resolve(num * 2), 1000);
        });
    });
}
function addThreeAfter1Sec(num) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => resolve(num + 3), 1000);
        });
    });
}
function runSequentially() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Start sequential calls...");
        const result1 = yield doubleAfter1Sec(5);
        console.log("Step 1:", result1);
        const result2 = yield addThreeAfter1Sec(result1);
        console.log("Step 2:", result2);
        const result3 = yield doubleAfter1Sec(result2);
        console.log("Step 3:", result3);
        console.log("Final result:", result3);
    });
}
runSequentially();
//# sourceMappingURL=Bai15.js.map