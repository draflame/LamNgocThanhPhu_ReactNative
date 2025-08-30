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
function fakeApiCall(url) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 2000) + 500;
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(`Success: ${url} (took ${time}ms)`);
            }
            else {
                reject(` Failed: ${url} (after ${time}ms)`);
            }
        }, time);
    });
}
function handleApiCalls() {
    return __awaiter(this, void 0, void 0, function* () {
        const urls = [
            "https://api.service.com/data1",
            "https://api.service.com/data2",
            "https://api.service.com/data3",
            "https://api.service.com/data4",
        ];
        const promises = urls.map((url) => fakeApiCall(url));
        const results = yield Promise.allSettled(promises);
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`API ${index + 1}: `, result.value);
            }
            else {
                console.log(`API ${index + 1}: `, result.reason);
            }
        });
    });
}
handleApiCalls();
//# sourceMappingURL=Bai30.js.map