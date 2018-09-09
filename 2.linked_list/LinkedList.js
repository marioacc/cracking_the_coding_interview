class Node {
    constructor(data) {
        this.data = data;
        this.next=null;
        this.prev = null;
    }

}

class LinkedList{
    constructor(data){
        this.head = data!== undefined ? new Node(data) : null;
        this.tail = this.head;
        this.size = this.head ? 1 : 0;
    }

    appendToTail(newNodeData) {
        let newNode = new Node(newNodeData);
        if(this.head === null){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
        
    }
    

    appendFromArray(array){
        array.forEach(function(e){
            this.appendToTail(e);
            this.size++
        }.bind(this))
        return this;
    }

    appendList(linkedList){
        if(linkedList.head){
            this.tail.next = linkedList.head;
            linkedList.head.prev = this.tail;
            this.size +=linkedList.size;
            this.tail = linkedList.tail;
        }
    }

    _getTail(){
        return this.tail;
    }

    removeLast(){
        let oldTail = this.tail;
        let newTail = this.tail.prev;
        const oldTailData = oldTail.data;
        this.tail = newTail; 
        this.tail.next = null;
        this.size--;
        oldTail = null;
        return oldTailData;
    }

    removeFirst(){
        if(this.head){
            const newHead = this.head.next;
            if(newHead){
                newHead.prev = null;
                this.tail = null;
            }
            let oldHead = this.head;
            const oldHeadData = oldHead.data;
            this.head = newHead;
            oldHead = null;
            this.size--;
            return oldHeadData
        }
        return null;
    }

    addFirst(data){

        const newHead = new Node(data);
        if(this.head){
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
            size++;
        }else{
            this.appendToTail(data);
        }
        
        
    }
    
    printList(){
        let nodeString='';
        let pointer=this.head;
        while(pointer.next){
            nodeString+=pointer.data+' -> ';
            pointer=pointer.next;
        }
        nodeString+= pointer.data;
        return nodeString;
    }
    // TODO: create method;
    clone(){
        let newList =  new LinkedList();
        let runner =  this.head;
        while(runner){
            newList.appendToTail(runner.data);
            runner = runner.next;
        }

        return newList;
    }

    toArray(){
        const array = [];
        this._runList(node => array.push(node.data));
        return array;
    }

    _runList(cb){
        let runner = this.head;
        while (runner) {
            cb(runner);
            runner = runner.next;
        }
    }
}

module.exports = LinkedList;