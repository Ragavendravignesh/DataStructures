class myArray {
    constructor() {
        this.length = 0;
        this.data = {} ;
    }

    get() {
        return this.data[this.length-1]
    }

    push(item) {
        this.data[this.length] = item
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        if(index < 0 || index > this.length-1) {
            console.log('Sorry index not found.')
        }
        this.shiftItems(index)
    }

    shiftItems(index) {
        for( let i = index; i< this.length; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

    showData() {
        console.log(this.data);
    }
}

const arr1 = new myArray();
arr1.push('hi');
arr1.push('bye');
arr1.push('how');
arr1.push('are');
arr1.push('you?');

arr1.delete(1);
console.log(arr1.get());
arr1.showData()