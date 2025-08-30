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
function fetchTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    });
}
function fetchTodosParallel(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = ids.map((id) => fetchTodo(id));
        return Promise.all(promises);
    });
}
// Test
function testFetchTodosParallel() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Fetching multiple todos...");
            const todos = yield fetchTodosParallel([1, 2, 3, 4, 5]);
            console.log("Fetched todos:", todos);
        }
        catch (err) {
            console.error("Error:", err.message);
        }
    });
}
testFetchTodosParallel();
//# sourceMappingURL=Bai22.js.map