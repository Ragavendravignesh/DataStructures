class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    } 
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(true) {
                if(value < currentNode.value) {

                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if(!this.root) {
            return false;
        }
        let currentNode = this.root;
        if(this.root === value){
            return this.root;
        } else {
            while(currentNode) {
                if(value < currentNode.value) {
                    currentNode = currentNode.left;
                } else if(value > currentNode.value){
                    currentNode = currentNode.right;
                } else if( currentNode.value === value) {
                    return currentNode.value
                }
            }
            return false;
        } 
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(25);
tree.insert(15);
tree.insert(45);
console.log(tree.lookup(2));
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }