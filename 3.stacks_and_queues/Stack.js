class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {

    constructor(maxCapacity) {
        this.top = null;
        this.maxCapacity = maxCapacity;
        this.size = 0;
    }

    pop() {
        if (this.top === null) throw 'Empty Stack';
        let data = this.top.data;
        this.top = this.top.next;
        return data;
    }

    push(data) {
        if (this.isFull()) {
            throw 'Full Stack size'
        }
        let newTop = new StackNode(data);
        newTop.next = this.top;
        this.top = newTop;
        this.size = this.size + 1;
    }

    peek() {
        if (this.top === null) throw 'Empty Stack'
        return this.top.data;
    }

    isEmpty() {
        return this.top === null;
    }

    isFull() {
        const hasCapacity = this.maxCapacity !== undefined;
        const isFull = hasCapacity && this.maxCapacity === this.size;
        return isFull;
    }

    print() {
        let runner = this.top;
        let stringStack = '';
        while (runner.next !== null) {
            stringStack += runner.data + ' -> ';
            runner = runner.next;
        }
        stringStack += runner.data;
        return stringStack;
    }


    

}

module.exports = Stack;