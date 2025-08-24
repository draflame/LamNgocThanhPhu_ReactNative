"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CashPayment {
    constructor(balance) {
        this.balance = balance;
    }
    pay(amount) {
        this.balance -= amount;
        console.log(`Paid ${amount} using cash. Remaining balance: ${this.balance}`);
    }
}
class CardPayment {
    constructor(balance) {
        this.balance = balance;
    }
    pay(amount) {
        this.balance -= amount;
        console.log(`Paid ${amount} using card. Remaining balance: ${this.balance}`);
    }
}
const cashPayment = new CashPayment(100);
cashPayment.pay(30);
const cardPayment = new CardPayment(200);
cardPayment.pay(50);
//# sourceMappingURL=Bai23.js.map