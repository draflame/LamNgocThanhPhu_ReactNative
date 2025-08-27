class Rectangle{
    width: number;
    height: number;

    constructor(width: number,height: number){
        this.width=width
        this.height=height
    }

}
function calculatePerimeter(rec:Rectangle):number{
    return (rec.height+rec.width)*2
}
function calculateArea(rec:Rectangle):number{
    return rec.height*rec.width
}
const rec:Rectangle= new Rectangle(5,10)
console.log(`perimeter: ${calculatePerimeter(rec)}; area: ${calculateArea(rec)}`)
