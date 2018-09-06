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
    }

    appendToTail(newNodeData) {
        let newNode = new Node(newNodeData);
        if(this.head === null){
            this.head = newNode;
            this.tail = this.head;
            return;
        }
           
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        
    }

    appendFromArray(array){
        array.forEach(function(e){
            this.appendToTail(e);
            
        }.bind(this))
        return this;
    }

    _getTail(){
        return this.tail;
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
}

module.exports = LinkedList;