class Product{
    name: string
    price: number
    constructor(name:string, price:number){
        this.name=name
        this.price=price
    }

}

const productArray:Product[]= new Array(
    new Product("Iphone 14 Pro Max", 50),
    new Product("Samsung Galaxy S23 Ultra", 250),
    new Product("Xiaomi Mi 13 Pro", 200),
    new Product("Oppo Find X5 Pro", 60),
    new Product("Vivo X80 Pro", 150)
)
console.log("filter products with price > 100: "+productArray.filter(pro=>pro.price>100).map(pro=>pro.name))