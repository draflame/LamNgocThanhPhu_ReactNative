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
function fetchWithRetry(url, retries) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                console.log(`Attempt ${attempt} to fetch ${url}...`);
                const response = yield fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return yield response.json();
            }
            catch (err) {
                console.error(`Attempt ${attempt} failed: ${err.message}`);
                if (attempt === retries) {
                    throw new Error(`Failed after ${retries} attempts`);
                }
                yield new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }
    });
}
function testFetchWithRetry() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
            console.log("Data fetched successfully:", data);
        }
        catch (err) {
            console.error("Final error:", err.message);
        }
    });
}
testFetchWithRetry();
//# sourceMappingURL=Bai27.js.map