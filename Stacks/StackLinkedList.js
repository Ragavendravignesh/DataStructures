class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.bottom = null
    this.top = null
    this.length = 0
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.bottom = newNode
      this.top = newNode
      this.length++
    } else {
      const holdingPointer = this.top; 
      this.top = newNode;
      this.top.next = holdingPointer;
      this.length++
    }
  }

  pop() {
      if(!this.top) {
          return null;
      }

      if(this.top === this.bottom) {
          this.bottom = null;
      }

      this.top = this.top.next;
      this.length--;
  }

  peek() {
    const node = this.top;
    return node;
  }
}

const myStack = new Stack();
myStack.push('Madhan');
myStack.push('Govind');
myStack.push('Palani');
myStack.peek();
myStack.pop();
console.log(myStack);
