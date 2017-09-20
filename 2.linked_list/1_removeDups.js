let linkedList = new require('./LinkedList');
let list = new linkedList(1);

function removeDups(list) {
    let isInList = {};
    let fastPointer = list.head;
    let slowPointer = null
    while (fastPointer) {
        if (isInList[fastPointer.data]) {
            nodeToDelete = fastPointer;
            nodeToDelete = null;
            fastPointer = fastPointer.next;
            slowPointer.next = fastPointer
        } else {
            isInList[fastPointer.data] = true;
            slowPointer = fastPointer;
            fastPointer = fastPointer.next;
        }
    }
}

function removeDupsWithoutBuffer(list) {
    let pointer = list.head;
    let searchingFastPointer = null;
    let searchingSlowPointer =null;
    while(pointer){
        searchingFastPointer = pointer.next;
        searchingSlowPointer = pointer;
        while (searchingFastPointer) {
            if (pointer.data !== searchingFastPointer.data) {
                searchingSlowPointer = searchingFastPointer;
                searchingFastPointer = searchingFastPointer.next;
            }else{
                searchingFastPointer= searchingFastPointer.next;
                searchingSlowPointer.next= searchingFastPointer;
            }
        }
        pointer=pointer.next;
    }
}


list.appendToTail(1);
list.appendToTail(2);
list.appendToTail(2);
list.appendToTail(3);
list.appendToTail(4);
list.appendToTail(4);
list.appendToTail(4);
list.appendToTail(3);
list.appendToTail(3);
list.appendToTail(3);
list.appendToTail(3);
list.appendToTail(1);
console.log(list.printList())
removeDupsWithoutBuffer(list);
console.log(list.printList())