class BankAccount{
    balance: number
    constructor(balance:number){
        this.balance=balance
    }
    deposit(money:number) {
        this.balance+=money
    }
    withdraw(money:number){
        this.balance-=money
    }
}
const acc1= new BankAccount(100)
console.log(`Balance : ${acc1.balance}`)
acc1.deposit(50)
console.log(`Balance after deposit 50$: ${acc1.balance}`)
acc1.withdraw(80)
console.log(`Balance after withdraw 80$: ${acc1.balance}`)

