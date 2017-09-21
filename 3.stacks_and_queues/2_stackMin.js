var Stack =  require('./Stack');

class StackWithMin extends Stack{
    constructor() {
        super();
        this.s2 = new Stack();
    }

    push(data){
        if (data < this.min()){
            this.s2.push(data)
        }
        super.push(data);
    }

    pop(){
        let data =  super.pop();
        if (data === this.min()){
            this.s2.pop();
        }
        return data;
    }

    min(){
        if(this.s2.isEmpty()){
            return Number.MAX_SAFE_INTEGER;
        }else{
            return this.s2.peek();
        }
    }

    print() {
        let runner = this.top;
        let minStackRunner = this.s2.top; 
        let stringStack = 'Stack : ';
        let minStringStack = 'Min Stack : '
        while (runner.next !== null) {
            stringStack += runner.data + ' -> ';
            runner = runner.next;
        }
        stringStack += runner.data;
        while (minStackRunner.next !== null) {
            minStringStack += minStackRunner.data + ' -> ';
            minStackRunner = minStackRunner.next;
        }
        minStringStack +=minStackRunner.data;
        
        return stringStack+'\n'+minStringStack;
    }
}

let stack = new StackWithMin();

stack.push(5);
stack.push(4);
stack.push(3);
stack.push(6);
stack.push(1);
console.info(stack.print())