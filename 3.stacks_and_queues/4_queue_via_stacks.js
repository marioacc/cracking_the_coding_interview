const Stack =  require('./Stack');
class QueueByStack {
    constructor(){
        this.arrivingStack = new Stack();
        this.departureStack = new Stack();
    }

    add(data) {
        this.arrivingStack.push(data)
    }

    remove() {
        if(this.isEmpty()){
            throw 'Empty Queue'
        } else if (this.departureStack.isEmpty()){
            this.fillDepartureStack();
        }
        this.departureStack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw 'Empty Queue'
        } else if (this.departureStack.isEmpty()) {
            this.fillDepartureStack();
        }
        this.departureStack.peek();
    }

    isEmpty() {
        return this.departureStack.isEmpty() && this.arrivingStack.isEmpty();
    }

    fillDepartureStack(){
        while(!this.arrivingStack.isEmpty()){
            this.departureStack.push(this.arrivingStack.pop());
        }
    }
}

module.exports = QueueByStack;