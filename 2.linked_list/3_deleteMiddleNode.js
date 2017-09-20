let linkedList = require('./LinkedList');
let list =  new linkedList(1);

function deleteMiddleNode(list, nodeToDelete){
    let runner = list.head;
    while(runner.data !== nodeToDelete){
        runner=runner.next;
    }
    if (runner.next){
        runner.data = runner.next.data;
        runner.next = runner.next.next;
    }
}


list.appendFromArray([1, 2, 2, 3, 4, 9,100, 10, 3, 3, 3, 3, 1]);
deleteMiddleNode(list,100)
console.log(list.printList())