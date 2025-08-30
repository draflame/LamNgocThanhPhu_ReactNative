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
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id,
                    name: `User ${id}`,
                    email: `user${id}@example.com`,
                });
            }, 1000);
        });
    });
}
function fetchUsers(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = ids.map((id) => fetchUser(id));
        return Promise.all(promises);
    });
}
// Test
function testFetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield fetchUsers([1, 2, 3, 4]);
        console.log("Fetched users:", users);
    });
}
testFetchUsers();
//# sourceMappingURL=Bai19.js.map