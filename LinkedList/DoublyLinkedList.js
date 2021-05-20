class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        this.head.prev =newNode;
        newNode.next = this.head;
        this.head= newNode;
        this.length++;
    }

    insert(index, value) {
        const prevNode = this.head;

        while(index -1 !== 0) {
            prevNode = prevNode.next;
            index--;
        }

        const newNode = new Node(value);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
    }

    remove(index) {
        let prevNode = this.head;
        while(index - 1 !== 0) {
            prevNode = prevNode.next;
            index--;
        }

        const deleteNode = prevNode.next;
        const nextNode = deleteNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
    }

    printList() {
        let node = this.head;
        const list = [];
        while(node !== null) {
            list.push(node);
            node = node.next;
        }
        return list
    }
}

const dl = new DoublyLinkedList(10);
dl.append(20);
dl.prepend(5);
dl.insert(1, 15)
dl.remove(2)
console.log(dl.printList());
