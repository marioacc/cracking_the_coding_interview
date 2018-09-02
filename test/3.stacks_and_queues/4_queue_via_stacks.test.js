const QueueByStack = require('../../3.stacks_and_queues/4_queue_via_stacks');
const Queue = require('../../3.stacks_and_queues/Queue');

test('Normal Queue Vs Queue By Stack works the same',()=>{
    let normalQueue = new Queue();
    let queueByStack = new QueueByStack();
    let totalElementsToAdd = Math.random*100;
    let allElementsWherePlacedEqually = true
    for (let i = 0, element=0; i < totalElementsToAdd; i++) {
        element = Math.random()*100;
        normalQueue.add(element);
        queueByStack.add(element);
    }
    
    while (!normalQueue.isEmpty() && allElementsWherePlacedEqually) {
        allElementsWherePlacedEqually = normalQueue.remove() === queueByStack.remove();
    }

    expect(allElementsWherePlacedEqually && queueByStack.isEmpty())
    .toBeTruthy();


});