class Node8 {
    value: number;
    prev: Node8 | null;
    next: Node8 | null;

    constructor(value: number) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head: Node8;
    tail: Node8;
    length: number;

    constructor(value: number) {
        this.head = new Node8(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value: number): DoublyLinkedList {
        const newNode8 = new Node8(value);
        newNode8.prev = this.tail;
        this.tail.next = newNode8;
        this.tail = newNode8;
        this.length++;
        return this;
    }

    prepend(value: number): DoublyLinkedList {
        const newNode8 = new Node8(value);
        newNode8.next = this.head;
        this.head.prev = newNode8;
        this.head = newNode8;
        this.length++;
        return this;
    }

    printList(): void {
        const array: number[] = [];
        let currentNode8 = this.head;
        while (currentNode8 !== null) {
            array.push(currentNode8.value);
            currentNode8 = currentNode8.next!;
        }
        console.log(array);
    }

    insert(index: number, value: number): DoublyLinkedList {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode8 = new Node8(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode8;
        newNode8.prev = leader;
        newNode8.next = follower;
        follower!.prev = newNode8;
        this.length++;
        return this;
    }

    traverseToIndex(index: number): Node8 {
        let counter = 0;
        let currentNode8 = this.head;
        while (counter !== index) {
            currentNode8 = currentNode8.next!;
            counter++;
        }
        return currentNode8;
    }

    remove(index: number): DoublyLinkedList {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode8 = leader.next;
        leader.next = unwantedNode8!.next;
        unwantedNode8!.next!.prev = leader;
        this.length--;
        return this;
    }

    reverse(): DoublyLinkedList | Node8 {
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