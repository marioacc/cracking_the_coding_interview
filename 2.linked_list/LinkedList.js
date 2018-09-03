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
        let newTail = new Node(newNodeData);
        let tail = this._getTail();    
        tail.next = newTail;
        newTail.prev = tail;
        tail = newTail;
        
    }

    appendFromArray(array){
        let tail = this._getTail();
        array.forEach(function(e){
            tail.next = new Node(e);
            tail = tail.next
        }.bind(this))
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