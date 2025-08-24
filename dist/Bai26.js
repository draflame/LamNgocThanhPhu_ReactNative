"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.quantity = 1;
    }
}
class Order {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    calculateTotal() {
        return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
    }
}
const order = new Order();
order.addProduct({ name: "Laptop", price: 1200, quantity: 1 });
order.addProduct({ name: "Mouse", price: 25, quantity: 2 });
console.log("Total Price:", order.calculateTotal());
//# sourceMappingURL=Bai26.js.map