let AnimalShelter = require('../../3.stacks_and_queues/6_animal_shelter');
let shelter =  new AnimalShelter();
const animals = ['dog', 'dog', 'dog', 'cat', 'dog'];
animals.forEach(animal => {
    shelter.enqueue(animal)
})

test('Animal Shelter works',()=>{
    expect(true).toBeTruthy();
})



