let  Stack  = require ('./Stack');


/**
 * Min stack wraps the Stack class and uses id to store all the elements
 * while storing the minimun number in a variable inside of the class
 * and checking every push to update the that variable with the
 * new minimum value
 *
 */

class MinStack{
    constructor (){
        this.stack = new Stack();
        this.min = Number.POSITIVE_INFINITY;
    }

    pop(){
        return this.stack.pop();
    }

    push(elementToPushIn){
        this.stack.push(elementToPushIn);
        this.min = Math.min(this.min,elementToPushIn);
        
    }
    getMin(){
        return this.min;
    }
}