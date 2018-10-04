const breakPoint = 0;
let countDrops = 0;

function drop(floor) {
    countDrops++;
    return floor >= breakPoint
}

function findBreakingPoint(floors) {
    let interval = 14;
    let previousFloor = 0;
    let egg1 = interval;

    /**Drop egg1 at decreasing intervals */
    while (!drop(egg) && egg1 <= floors) {
        interval--;
        previousFloor = egg1;
        egg += interval;
    }

    /**Drop egg2 at 1 unit increment */
    while (egg2 < egg1 && egg2 <= floors && !drops(egg)) {
        egg2++;
    }

    return egg2 < floors ? egg2 : -1
}