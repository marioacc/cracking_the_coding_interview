let Stack = require('./Stack');


/**
 * Min stack wraps the Stack Class and stores an object in it
 * containing the value of the element added to the stack and 
 * the minimum value added to up to that moment in the stack
 *
 */

class MinStack {
    constructor() {
        this.stack = new Stack();
    }

    pop() {
        return this.stack.pop();
    }

    push(elementToPushIn) {
        var minimum = Number.POSITIVE_INFINITY;
        try {
            minimum = this.peek().min;
        }catch(e){} finally {
            var elementWrapper = {
                value: elementToPushIn,
                min: Math.min(minimum, elementToPushIn),
            }
            this.stack.push(elementWrapper);
        }


    }

    peek() {
        return this.stack.peek()
    }

    getMin() {
        return this.peek().min;
    }
}

    let minStack = new MinStack()
    minStack.push(1)
    minStack.push(2)
    minStack.push(3)
    minStack.push(4)
    minStack.push(5)

    console.log(minStack.getMin())