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
function fetchTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    });
}
function fetchCompletedTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield fetchTodos();
        return todos.filter((todo) => todo.completed);
    });
}
function testFetchCompletedTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Fetching completed todos...");
            const completed = yield fetchCompletedTodos();
            console.log("Completed todos:", completed.slice(0, 5));
        }
        catch (err) {
            console.error("Error:", err.message);
        }
    });
}
testFetchCompletedTodos();
//# sourceMappingURL=bai23.js.map