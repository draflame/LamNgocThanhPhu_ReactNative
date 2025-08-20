"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
const user = new User("Eva");
console.log(user.name);
user.name = "Nguyet Thi";
console.log(user.name);
//# sourceMappingURL=Bai7.js.map