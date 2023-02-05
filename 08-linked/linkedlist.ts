class Node {
    value: number;
    prev: Node | null;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head: Node;
    tail: Node;
    length: number;

    constructor(value: number) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number): DoublyLinkedList {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value: number): DoublyLinkedList {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(): void {
        const array: number[] = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next!;
        }
        console.log(array);
    }

    insert(index: number, value: number): DoublyLinkedList {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower!.prev = newNode;
        this.length++;
        return this;
    }

    traverseToIndex(index: number): Node {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next!;
            counter++;
        }
        return currentNode;
    }

    remove(index: number): DoublyLinkedList {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode!.next;
        unwantedNode!.next!.prev = leader;
        this.length--;
        return this;
    }

    reverse(): DoublyLinkedList | Node {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }
}

const linkedList = new DoublyLinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.insert(2, 99);
linkedList.insert(20, 88);
linkedList.remove(2);
linkedList.reverse();
linkedList.printList();