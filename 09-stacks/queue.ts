class Node9 {
    value: string;
    next: Node9 | null;

    constructor(value: string) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    first: Node9 | null;
    last: Node9 | null;
    length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(): Node9 | null {
        return this.first;
    }

    enqueue(value: string): Queue {
        const newNode9 = new Node9(value);
        if (this.length === 0) {
            this.first = newNode9;
            this.last = newNode9;
        }
        else {
            this.last!.next = newNode9;
            this.last = newNode9;
        }
        this.length++;
        return this;
    }

    dequeue(): Node9 | null {
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