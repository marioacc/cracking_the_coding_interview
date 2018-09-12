class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {

    constructor() {
        this.first = null;
        this.last = null;
    }

    /**
     * Add an element to the queue;
     * @param {data} any 
     */
    add(data) {
        let newNode = new QueueNode(data);

        if (this.last !== null) {
            this.last.next = newNode;
            this.last = newNode;
        }
        else {
            this.first = newNode;
            this.last = newNode;
        }
    }

    /**
     * Remove the first element from the queue;
     * @return {QueueNode} Last QueueNode of the list; 
     */
    remove() {
        if (this.first === null)  throw 'Empty Queue';
        let data = this.first.data;
        this.first =  this.first.next;
        if (this.first === null){
            this.last = null;
        }
        return data;
    }

    peek(){
        if (first === null) throw 'Empty Queue';
        return this.first.data;
    }

    /**
     * Verifies is the Queue is empty
     * @returns {boolean} false if the queue is empty, true otherwise.
     */
    isEmpty(){
        return this.first === null;
    }
}

module.exports = Queue;