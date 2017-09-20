class FixedMultiStack {
    constructor(typeOfArray, size) {
        const numberOfStacks = 3;
        this.stackCapacity = size;
        this.values = new typeOfArray(size * numberOfStacks);
        this.sizes = new typeOfArray(numberOfStacks);
    }

    push(stackNum,value) {
        if (this.isFull(stackNum)) {
            throw "stack is full"
        }
        // Increment stack pointer and then update value
        this.sizes[stackNum]++
            this.values[this.indexOfTop(stackNum)] = value
    }

    pop(stackNum){
        if(this.isEmpty(stackNum)){
            throw 'stack is empty'
        }
        let topIndex =  this.indexOfTop(stackNum);
        let value = this.values[topIndex];
        this.values[topIndex] = 0;
        this.sizes--;
        return value;
    }

    peek(stackNum){
        if (this.isEmpty(stackNum)) {
            throw 'stack is empty'
        }
        return this.values[this.indexOfTop(stackNum)];
    }
    /**
     * Verify if the stack is full or not.
     * @param {number} stackNum
     * @return True if is full, false otherwise. 
     */
    isFull(stackNum) {
        return this.sizes[stackNum] === this.stackCapacity;
    }

    /**
     * Verify if the stack is empty or not.
     * @param {number} stackNum
     * @return True if is empty, false otherwise. 
     */
    isEmpty(stackNum) {
        return this.sizes[stackNum] === 0;
    }

    /**
     * Returns the index of the top of the stack.
     * @param {number} stackNum The stack.
     * @return index
     */
    indexOfTop(stackNum) {
        const offset = stackNum * this.stackCapacity;
        const size = this.sizes[stackNum];
        return offset + size - 1;
    }
}

var a =  new FixedMultiStack(Int32Array,3);
a.push(0,1);