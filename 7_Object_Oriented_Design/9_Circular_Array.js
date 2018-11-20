class CirscularArray{
    constructor(){
        this.items = [];
        this.head = 0;
    }

    convert(index){
        if(index < 0){
            index += this.items.length;
        }
        return (this.head + this.index) % this.items.length;
    }

    rotate(shiftRight){
        this.head = convert(shiftRight);
    }

    get(i){
        const isInvalidIndex = i < 0 || i>= this.items.length;
        if(isInvalidIndex){
            throw new Error('Index out of bounds');
        }
        return this.items[this.convert(i)];
    }

    [Symbol.iterator](){
        let currentElement = 0 ;
        let listLenght = this.items.length;
        return {
            next() {
                let value = currentElement;
                currentElement++;
                return {
                    done: currentElement < listLenght,
                    value:  value,
                }
            }
        }
    }
}