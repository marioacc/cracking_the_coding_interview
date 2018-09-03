const LinkedList = require('../2.linked_list/LinkedList');
class AnimalShelter {
    constructor(){
        this.animalsQueue = new LinkedList();
    }

    enqueue(animalType){
        this.animalsQueue.appendToTail(animalType);
    }

    dequeueAny(){
        const animal =  this.animalsQueue.head.data;
        let tmpHead = this.animalsQueue.head;
        this.animalsQueue.head = this.animalsQueue.head.next;
        this.animalsQueue.head.prev = null;
        tmpHead.next = null;
        tmpHead = null;
    }

    dequeueAnimal(animalType) {
        const dogFound = false;
        let runner = this.animalsQueue.head;
        let animal = null;
        while (this.animalsQueue.head.next && !dogFound) {
            dogFound = runner.data === animalType;
            animal = runner.data;
        }
        if (!dogFound) throw 'No dogs in shelter';
        let prevRunner = runner.prev;
        prevRunner.next = runner.next;
        prevRunner.next.prev = prevRunner;
        runner.next = null;
        runner.prev = null;
        runner = null;
        return animal
    }

     dequeueDog(){
         return this.dequeueAnimal('dog')
     }

     dequeueCat(){
         return this.dequeueAnimal('cat')
     }
}


class Animal {

    constructor(){
        this.name;
    }
}

module.exports = AnimalShelter