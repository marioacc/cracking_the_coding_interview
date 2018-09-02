let Stack = require('./Stack');

class StackOfPlates {

    constructor(stackSize) {
        this.stacks = [];
        this.freeStacks = [0];
        this.capacityPerStack = stackSize;

    }

    pop() {
        let lastStack = this._lastStack;
        if (lastStack.isEmpty()) {
            this.stacks.pop();
            lastStack = this._lastStack;
        }
        lastStack.pop();
    }

    push(element) {
        if (this._lastStack.isFull()) {
            this.addStack()
        }
        this._lastStack.push(element);
    }

    get _lastStack() {
        const isEmpty = this.stacks.length === 0;
        return isEmpty ?
            this.addStack() : this.stacks[this.stacks.length - 1];
    }

    get _allStacks() {
        return this.stacks;
    }

    addStack() {
        let newStack = new Stack(this.capacityPerStack);
        this.stacks.push(newStack);
        return newStack;
    }

    printStackOfPlates(){
        const stacksString = this.stacks.reduce((printer,stack)=>
            printer += stack.print() + '\n'

        ,'Printing Stack of Plates:\n');
        console.log(stacksString);

    }

    popAt(stackToPop){
        return this._allStacks[stackToPop].pop();
    }

}


module.exports = StackOfPlates;