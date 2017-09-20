let linkedList =  require('./LinkedList');
let list = new linkedList(1);

function partition(list,element){
    let rightSideElements =[];
    let runner  =  list.head;
    while(runner){
        if (runner.data > element && runner.next ){
            rightSideElements.push(runner.data);
            runner.data=runner.next.data;
            runner.next=runner.next.next;
        }else{
            runner = runner.next;
        }

    }
    list.appendFromArray(rightSideElements);

}

list.appendFromArray([10,1,2,3,4,5,6,7,8])
partition(list,5);
console.log(list.printList())