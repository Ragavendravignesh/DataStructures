class Stack {
    constructor() {
        this.array = [];
    }

    push(value) {
        this.array.push(value);
    } 

    pop() {
        return this.array.pop();
    }

    peek() {
        return this.array[this.array.length-1];
    }
}

const myStack = new Stack();
myStack.push('Bhogle');
myStack.push('Harsha');
myStack.push('Jack');
console.log(myStack);
myStack.pop();
console.log(myStack);