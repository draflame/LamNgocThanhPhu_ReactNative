interface Payment{
    balance: number
    pay(amount:number): void
}
class CashPayment implements Payment {
    constructor(public balance: number) {}
    pay(amount: number): void {
        this.balance -= amount;
        console.log(`Paid ${amount} using cash. Remaining balance: ${this.balance}`);
    }
}
class CardPayment implements Payment {
    constructor(public balance: number) {}
    pay(amount: number): void {
        this.balance -= amount;
        console.log(`Paid ${amount} using card. Remaining balance: ${this.balance}`);
    }
}
const cashPayment = new CashPayment(100);
cashPayment.pay(30);
const cardPayment = new CardPayment(200);
cardPayment.pay(50);