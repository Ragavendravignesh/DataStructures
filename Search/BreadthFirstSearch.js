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

        if(this.root===null) {
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
        let currentNode = this.root;
        if(!this.root) {
            return false;
        }
        if(currentNode.value === value ) {
            return currentNode;
        }
        else  {
            while(currentNode) {
                if(value < currentNode.value) {
                    currentNode = currentNode.left;
                }
                else if(value > currentNode.value) {
                    currentNode = currentNode.right;
                }
                else if(currentNode.value === value) {
                    return currentNode.value;
                }
            }
        }
        return null;
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while(queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);

            if(currentNode.left)
                queue.push(currentNode.left)
            if(currentNode.right)
                queue.push(currentNode.right)
        }

        return list;
    }

    breadthFirstSearchR(queue, list) {
        if(!queue.length) {
            return list
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);
        
        if(currentNode.left) {
            queue.push(currentNode.left);
        }
        if(currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, list);
    }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(25);
tree.insert(15);
tree.insert(45);

console.log(tree.breadthFirstSearch())
console.log(tree.breadthFirstSearchR([tree.root], []))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}


/* Inorder preorder postorder
    InOrder - Left root right
    preorder - Root left right
    postorder - left right root
*/