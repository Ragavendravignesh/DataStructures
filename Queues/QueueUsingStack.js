

class QueueUsingStack {
    constructor() {
        this.first = [];
        this.last = [];
        this.length = 0;
    } 

    enqueue(value) {
        const length = this.first.length;

        for(let i =0; i < length; i++ ) {
            this.last.push(this.first.pop());
        }

        this.last.push(value);
    }

    dequeue() {
        const length = this.last.length;

        for( let i =0 ; i < length ; i++ ) {
            this.first.push(this.last.pop())
        }

        this.first.pop()
    }

    peek() {
        let value = 0;
        if(this.last.length > 0) {
            value =  this.last[0];
        } 
        else {
            value = this.first && this.first[this.first.length - 1] || null;
        }
        return value;
     }
}

const myQueue = new QueueUsingStack();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());