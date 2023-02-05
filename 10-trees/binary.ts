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
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left!;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right!;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }

        return false;
    }

    remove(value: number): boolean | undefined {
        if (!this.root) {
            return false;
        }

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
                // We have a match, get to work!

                // Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        // if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                            // if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    // Option 2: Right child which doesn't have a left child
                } else if (currentNode.right!.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right!.left = currentNode.left;

                        // if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                            // if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    // Option 3: Right child that has a left child
                } else {
                    // find the Right child's left most child
                    let leftmost = currentNode.right!.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent!.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }

        }
    }
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
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
console.log(tree.lookup(1));
console.log(traverse(tree.root!));