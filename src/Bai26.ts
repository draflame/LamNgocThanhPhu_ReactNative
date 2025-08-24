class Product{
    name: string
    price: number
    quantity: number
    constructor(name: string, price:number){
        this.name = name;
        this.price=price
        this.quantity=1
    }
}
class Order{
    products:Product[]
    constructor(){
        this.products=[]
    }
    addProduct(product: Product): void {
    this.products.push(product);
  }
  calculateTotal(): number {
    return this.products.reduce((total, p) => total + p.price * p.quantity, 0);
  }
}
const order = new Order();

order.addProduct({ name: "Laptop", price: 1200, quantity: 1 });
order.addProduct({ name: "Mouse", price: 25, quantity: 2 });

console.log("Total Price:", order.calculateTotal());