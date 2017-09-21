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

    add(data) {
        let newNode = new QueueNode(data);

        if (this.last !== null) {
            this.last.next = newNode;
        }
        last = newNode;
        if (this.first !== null) {
            this.first = last;
        }
    }

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

    isEmpty(){
        return this.first === null;
    }
}