let StackOfPlates = require('../../3.stacks_and_queues/3_stack_of_plates');




test('Stack of plates respects max size', function () {
    const maxSize = 3;
    let stack = new StackOfPlates(maxSize);
    const platesToSet = Math.random() * 100 + 3;
    let areAllTheStacksSizeInsideTheMaxValue = true;
    for (let i = 0; i < platesToSet; i++) {
        stack.push(`Plate #${i+1%3} in stack #${Math.ceil(i+1/maxSize)}`);
    }
    for (let i = 0; i < stack._allStacks.length; i++) {
        areAllTheStacksSizeInsideTheMaxValue =
            stack._allStacks[i].size <= maxSize;
    }
    expect(areAllTheStacksSizeInsideTheMaxValue)
        .toBeTruthy();
})

test('Pop works same as a single stack', function () {
    const maxSize = 3;
    let stack = new StackOfPlates(maxSize);
    const platesToSet = Math.random() * 100 + 3;
    const plates = [];
    const popWorksTheSameAsSingleStack = true;
    for (let i = 0; i < platesToSet; i++) {
        plates.push(Math.random() * 100);
    }

    plates.forEach(plate => {
        stack.push(plate)
    });

    while (platesToSet.length > 0 && popWorksTheSameAsSingleStack) {
        popWorksTheSameAsSingleStack = platesToSet.pop() === stack.pop();
    }

    expect(popWorksTheSameAsSingleStack)
        .toBeTruthy();
})


test('Pop directly on a substack', function () {
    const maxSize = 3;
    let stack = new StackOfPlates(maxSize);
    const platesToSet = [2, 2, 2, 3, 3, 100, 4, 5];
    const substackToPop = 1;// Pop second substack, starting from 0th. Should pop 100
    platesToSet.forEach(plate => {
        stack.push(plate)
    });
    

    expect(stack.popAt(substackToPop)=== 100)
        .toBeTruthy();
})