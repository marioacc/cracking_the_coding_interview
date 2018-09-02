let Stack = require('./Stack');


class SortedStack {

    constructor() {
        this.tmpStack = new Stack();
        this.sortedStack = new Stack();
    }

    pop() {
        return this.sortedStack.pop();
    }

    push(data) {
        let isStackSorted = this.isEmpty() || this.peek() >= data;
        while (!isStackSorted) {
            this.tmpStack.push(this.pop());
            isStackSorted = this.isEmpty() || this.peek() >= data;
        }
        this.sortedStack.push(data);
        while (!this.tmpStack.isEmpty()) {
            this.sortedStack.push(this.tmpStack.pop())
        }
    }

    peek() {
        return this.sortedStack.peek();
    }

    isEmpty() {
        return this.sortedStack.isEmpty();
    }

    isFull() {
        return this.sortedStack.isFull();
    }

    print() {
        return this.sortedStack.print();
    }

}

module.exports = SortedStack;