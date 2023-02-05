class Stack {
    array: string[];
    constructor() {
        this.array = [];
    }

    peek(): string {
        return this.array[this.array.length - 1];
    }

    push(value: string): Stack {
        this.array.push(value);
        return this;
    }

    pop(): Stack {
        this.array.pop();
        return this;
    }
}

const stack = new Stack();
stack.push('google');
stack.push('udemy');
stack.push('discord');
stack.pop();
console.log(stack.peek());
