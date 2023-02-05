class Node {
    value: string;
    next: Node | null;

    constructor(value: string) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    first: Node | null;
    last: Node | null;
    length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(): Node | null {
        return this.first;
    }

    enqueue(value: string): Queue {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last!.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(): Node | null {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return holdingPointer;
    }
}

const queue = new Queue();
queue.enqueue('google');
queue.enqueue('udemy');
queue.enqueue('discord');
queue.enqueue('youtube');
queue.enqueue('facebook');
queue.dequeue();
console.log(queue.peek());