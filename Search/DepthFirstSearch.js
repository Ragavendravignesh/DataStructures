class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(!this.root) 
            this.root = newNode;
        else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
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
        const newNode  = new Node(value);

        if(!this.root) {
            return false;
        }
        else {
            let currentNode = this.root;

            while(currentNode) {
                if(value < currentNode.value)
                    currentNode = currentNode.left;
                else if(value > currentNode.value) 
                    currentNode = currentNode.right;
                else if(value === currentNode.value)
                    return currentNode.value;
            }
        }
    }

    DFSInOrder() {
        return traverseInOrder(this.root, []);
    }

    DFSPostOrder() {
        return traversePostOrder(this.root, []);
    }

    DFSPreOrder() {
        return traversePreOrder(this.root, []);
    }
}

function traverseInOrder(node, list) { 
    if(node.left) {
        traverseInOrder(node.left, list)
    }
    list.push(node.value)
    if(node.right) {
        traverseInOrder(node.right, list)
    }
    return list
} 

function traversePostOrder(node, list) {
    if(node.left)
        traversePostOrder(node.left, list)
    if(node.right)
        traversePostOrder(node.right, list)
    list.push(node.value)

    return list
}

function traversePreOrder(node, list) {
    list.push(node.value)
    if(node.left)
        traversePreOrder(node.left, list)
    if(node.right)
        traversePreOrder(node.right, list)
    return list
}

const tree = new BinaryTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

//console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.DFSInOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSPreOrder())

function traverse(node) {
    const  tree= { value : node.value }
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}