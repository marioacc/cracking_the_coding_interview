class Node {
    constructor(data) {
        this.data = data;
        this.next=null;
    }

}

class LinkedList{
    constructor(data){
        this.head = new Node(data)
    }

    appendToTail(newNodeData) {
        let newNode = new Node(newNodeData);
        let tail = this._getTail();    
        tail.next = newNode;
    }

    appendFromArray(array){
        let tail = this._getTail();
        array.forEach(function(e){
            tail.next = new Node(e);
            tail = tail.next
        }.bind(this))
    }

    _getTail(){
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
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