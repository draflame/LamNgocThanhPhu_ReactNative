class Box<T>{
    value: T
    constructor(value: T){
        this.value=value
    }
    getValue(): T {
        return this.value
    }
    setValue(newValue: T): void {
        this.value = newValue
    }
}
const box1 = new Box<number>(123)
const box2 = new Box<string>("Hello")

console.log(`box 1: ${box1.getValue()}`)
console.log(`box 2: ${box2.getValue()}`)