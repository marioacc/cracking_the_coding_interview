function findPoisonedBottle(bottles, strips) {
    runTest(bottles, strips);
    positive = getPositiveOnDay(strips, 7);
    return setBits(positive);
}


/**
 * 
 * @param {Array[]<Bottle>} bottles 
 * @param {Array[]<TestStrip>} strips 
 */
function runTest(bottles, strips) {
    for (int i = 0; i < bottles.length; i++) {
        const bottleId = bottles[i].getId();
        let bitIndex = 0;
        while(id > 0){
            if((id & 1) === 1){
                testStrips.get(bitIndex).addDropOnDay(0, bottle);
            }
            bitIndex++;
            id >>=1;
        }
    }
}


/**
 * 
 * @param {Array[]<TestStrip>}
 * @param {number} day 
 */
function getPositiveOnDay(testStrips, day){
    let positive = [];
    for (let i = 0; i < testStrips.length; i++) {
        const strip = testStrips[i];
        const id = strip.getId();
        if(strip.isPositiveOnDay(day)){
            positive.add(id);
        }   
    }
    return positive;
}


/**
 * 
 * @param {Array[number]} positive array containing 1's and 0's to be converted
 * to a number
 * 
 */
function setBits(positive) {
    id = 0;
    for (int i = 0; i < positive.length; i++) {
        i |= 1 << bitIndex;
    }
    return id;
}


class Bottle {
    constructor(id) {
        this.id = id;
        this.poisoned = false;
    }

    getId() {
        return this.id;
    }

    setAsPoisoned() {
        this.poisoned = true;
    }

    isPoisoned() {
        return this.poisoned;
    }
}

class TestStrip {
    static DAYS_FOR_RESULT = 7;

    constructor(id) {
        this.id = id;
        this.dropsByDay = [];
    }

    sizeDropsForDay(day) {
        while (this.dropsByDay.length < day) {
            this.dropsByDay.push([]);
        }
    }

    addDropOnDay(day, bottle) {
        sizeDropsForDay(day);
        let drops = this.dropsByDay[day];
        drops.push(bottle);
    }

    hasPoison(bottles) {
        for (let i = 0; i < bottles.length; i++) {
            if (bottles[i].isPoisoned()) {
                return true;
            }
        }
        return false;
    }

    getLastWeekBottles(day) {
        if (day < this.DAYS_FOR_RESULT) {
            return null;
        }
        return this.dropsByDay[day - this.DAYS_FOR_RESULT];
    }

    isPositiveOnDay(day) {
        const testDay = day - this.DAYS_FOR_RESULT;
        if(testDay < 0 || testDay>=dropsByDay[day]){
            return false;
        }
        for(let i = 0; i < testDay; i++){
            bottles = this.dropsByDay[day];
            if(hasPoison(bottles)){
                return true;
            }
        }
        return false; 
    }


}