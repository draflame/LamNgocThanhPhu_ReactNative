"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const repo = new Repository();
repo.add(1);
repo.add(2);
repo.add(3);
const allItems = repo.getAll();
console.log(allItems);
//# sourceMappingURL=Bai21.js.map