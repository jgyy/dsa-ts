class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): BinarySearchTree {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value: number): Node | boolean {
        if (!this.root) return false;

        let currentNode = this.root;

        while (currentNode) {
            if (value < currentNode.value) currentNode = currentNode.left!;
            else if (value > currentNode.value) currentNode = currentNode.right!;
            else if (currentNode.value === value) return currentNode;
        }

        return false;
    }

    remove(value: number): boolean | undefined {
        if (!this.root) return false;

        let currentNode = this.root;
        let parentNode: Node | null = null;

        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left!;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right!;
            } else if (currentNode.value === value) {

                if (currentNode.right === null) {
                    if (parentNode === null) this.root = currentNode.left;
                    else {
                        if (currentNode.value < parentNode.value) parentNode.left = currentNode.left;
                        else if (currentNode.value > parentNode.value) parentNode.right = currentNode.left;
                    }

                } else if (currentNode.right!.left === null) {
                    if (parentNode === null) this.root = currentNode.left;
                    else {
                        currentNode.right!.left = currentNode.left;
                        if (currentNode.value < parentNode.value) parentNode.left = currentNode.right;
                        else if (currentNode.value > parentNode.value) parentNode.right = currentNode.right;
                    }

                } else {
                    let leftmost = currentNode.right!.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    leftmostParent!.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) this.root = leftmost;
                    else {
                        if (currentNode.value < parentNode.value) parentNode.left = leftmost;
                        else if (currentNode.value > parentNode.value) parentNode.right = leftmost;
                    }
                }
                return true;
            }
        }
    }

    breadthFirstSearch(): number[] {
        let currentNode = this.root;
        const list: number[] = [];
        const queue: Node[] = [];

        queue.push(currentNode!);

        while (queue.length > 0) {
            currentNode = queue.shift()!;
            list.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        return list;
    }

    breadthFirstSearchRecursive(queue: Node[], list: number[]): number[] {
        if (!queue.length) return list;
        const currentNode = queue.shift()!;
        list.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        return this.breadthFirstSearchRecursive(queue, list);
    }

    DFSInOrder(): number[] {
        return traverseInOrder(this.root, []);
    }

    DFSPostOrder(): number[] {
        return traversePostOrder(this.root, []);
    }

    DFSPreOrder(): number[] {
        return traversePreOrder(this.root, []);
    }
}

function traverseInOrder(node: Node | null, list: number[]): number[] {
    if (node === null) return list;
    if (node.left) traverseInOrder(node.left, list);
    list.push(node.value);
    if (node.right) traverseInOrder(node.right, list);
    return list;
}

function traversePostOrder(node: Node | null, list: number[]): number[] {
    if (node === null) return list;
    if (node.left) traversePostOrder(node.left, list);
    if (node.right) traversePostOrder(node.right, list);
    list.push(node.value);
    return list;
}

function traversePreOrder(node: Node | null, list: number[]): number[] {
    if (node === null) return list;
    list.push(node.value);
    if (node.left) traversePreOrder(node.left, list);
    if (node.right) traversePreOrder(node.right, list);
    return list;
}

function traverse(node: Node): Node {
    const tree: Node = {
        value: node.value,
        left: null,
        right: null,
    };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const tree = new BinarySearchTree();
for (let i = 0; i < 16; i++) {
    tree.insert(Math.floor(Math.random() * 1000));
}
tree.remove(0);
console.log(tree.lookup(1));
console.log(traverse(tree.root!));
console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchRecursive([tree.root!], []));
console.log(tree.DFSInOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSPreOrder());
