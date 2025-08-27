class Stack{
    items: any[] = [];
    push(item: any) {
        this.items.push(item);
    }
    pop(): any {
        return this.items.pop();
    }
    peek(): any {
        return this.items[this.items.length - 1];
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
const stack= new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
