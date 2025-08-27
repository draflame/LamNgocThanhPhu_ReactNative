"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(money) {
        this.balance += money;
    }
    withdraw(money) {
        this.balance -= money;
    }
}
const acc1 = new BankAccount(100);
console.log(`Balance : ${acc1.balance}`);
acc1.deposit(50);
console.log(`Balance after deposit 50$: ${acc1.balance}`);
acc1.withdraw(80);
console.log(`Balance after withdraw 80$: ${acc1.balance}`);
//# sourceMappingURL=Bai5.js.map