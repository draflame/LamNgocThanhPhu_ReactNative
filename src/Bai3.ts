class Car{
    brand: string;
    model: string;
    year: number

    constructor(brand:string,model:string,year:number){
        this.brand=brand
        this.model=model
        this.year=year
    }

}
function display(car:Car):void{
    console.log(car)
}
const car:Car= new Car("Vinfast","VF5",2025)

display(car)