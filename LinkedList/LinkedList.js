class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }

    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
      const newNode = new Node(value)

      newNode.next = this.head
      this.head = newNode;
      this.length++;
  }

  printList() {
    let newNode = this.head;
    const array = [];
    while(newNode != null) {
      array.push(newNode)
      newNode = newNode.next;
    }
    return array;
  }

  insert(index, value) {
    if( index === 0) {
      this.prepend(value);
      this.printList();
    }
    let prevNode = this.head;
    while( index-1 !== 0) {
      prevNode = prevNode.next;
      index--;
    }

    const newNode = new Node(value);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }

  remove(index) {
    let prevNode = this.head;

    while(index-1 !== 0) {
      prevNode = prevNode.next;
      index--;
    }

    let Node = prevNode.next;
    prevNode.next = Node.next;
    this.length--;
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.prepend(5);
myLinkedList.insert(2, 23);
myLinkedList.remove(3);

//console.log(myLinkedList)
console.log(myLinkedList.printList())

