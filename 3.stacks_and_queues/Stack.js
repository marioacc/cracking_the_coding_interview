class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {

    constructor(){
        this.top=null;
    }

    pop(){
        if (this.top === null) throw 'Empty Stack';
        let data =  this.top.data;
        this.top = this.top.next;
        return data;
    }

    push(data){
        let newTop = new StackNode(data);
        newTop.next = this.top;
        this.top = newTop;
    }

    peek(){
        if(this.top === null) throw 'Empty Stack'
        return this.top.data;
    }

    isEmpty(){
        return this.top === null;
    }

    print(){
        let runner = this.top;
        let stringStack = '';
        while(runner.next !== null){
            stringStack += runner.data +' -> ';
            runner= runner.next;
        }
        stringStack+=runner.data;
        return stringStack;
    }
}

module.exports =  Stack;