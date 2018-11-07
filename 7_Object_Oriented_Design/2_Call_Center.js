class CallCenter {
    constructor(){
        this.LEVELS = 3;

        this.NUM_RESPONDENTS = 10;
        this.NUM_MANAGERS = 4;
        this.NUM_DIRECTORS = 2;

        /**
         * LIST OF EMPLOYEES BY LEVEL
         * employeeLeves[0] = respondents;
         * employeeLeves[1] = managers;
         * employeeLeves[2] = directors;
         * 
         */

        this.employeeLevels = [[]];

        this.callQueues = [[]];

        

    }

    getHandlerForCall(call) {}

    dispatchCall(caller) {}

    /**
     * Routes the call to an available employee, or saves tin a queue if no employee is available
     */
    dispatchCall(call){
        let employee = this.getHandlerForCall(call);
        if(emp !== call){

        }else{
            /**place the call into corresponding call queue */
            call.reply("Please wait for free employee to repply");
            this.callQueues.get(call.getRank().getValue()).add(call);
        }
    }


    /**An employee got free. Look for a waiting call that employee can serve
     * Return true if we assigned a call, false otherwise.
    */
    assignCall(employee){}
}

class Call{

    constructor(caller){
        //minimal rank of employee who can handle this call
        this.rank = caller.rank;
        this.caller = caller;
    }

    //Set employee who is handling call;
    setHandler(employee){}

    reply(){}
    getRank(){}
    setRank(){}
    incrementRank(){}
    disconnect(){}
}


class Employee{
    constructor(callHandler){
        this.currentCall = null;
        this.rank = null;
    }

    receiveCall(){}
    callCompleted(){}
    escalateAndReassign(){}
    assignNewCall(){}
    isFree(){
        return this.currentCall === null
    }

    getRank(){
        return this.rank;
    }
}


class Director extends Employee {
    constructor(){
        this.rank = Rank.Director
    }
}

class Manager extends Employee {
    constructor() {
        this.rank = Rank.Manager
    }
}

class Responder extends Employee {
    constructor() {
        this.rank = Rank.Responder
    }
}