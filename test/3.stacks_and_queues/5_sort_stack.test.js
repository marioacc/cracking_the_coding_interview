let SortedStack =  require('../../3.stacks_and_queues/5_sort_stack');

test('Stack sorts elements',()=>{
    const totalElementsToSet = Math.random() * 100 + 50;
    let sortedStack = new SortedStack();
    let isSorted = true;
    for(let i = 0; i<totalElementsToSet;i++){
        sortedStack.push(Math.random()*100);
    }
    let topElement = sortedStack.pop();
    while(!sortedStack.isEmpty() && isSorted){
        isSorted = topElement <= sortedStack.peek();
        topElement = sortedStack.pop();
    }

    expect(isSorted).toBeTruthy();

})