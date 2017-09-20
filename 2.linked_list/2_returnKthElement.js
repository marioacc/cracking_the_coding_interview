let linkedList = new require('./LinkedList');
let list = new linkedList(1);
function returnKthElement(list, index){
    let result=[];
    let fastRunner= list.head;
    let slowRunner =list.head;
    counter=0;
    while(counter < index){
        fastRunner=fastRunner.next;
        counter++;
    }

    while(fastRunner){
        fastRunner= fastRunner.next;
        slowRunner = slowRunner.next;
    }
    return slowRunner.data; 
}





list.appendFromArray([1, 2, 2, 3, 4, 4, 4, 3, 3, 3, 3, 1]);
console.log(returnKthElement(list,5))