function checkDuplicates(numbers){
    let bs =  new BitSet(32000);
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        const bitNumber = number - 1;
        if(bs.get(bitNumber)){
            console.log(bitNumber)
        }else{
            bs.set(bitNumber);
        }
    }
}

class BitSet {
    constructor(size) {
        this.bitset = new Int32Array((size >> 5) + 1);
    }

    set(pos) {
        const wordNumber = post >> 5; //divide by 32
        const bitNumber = post & 0x1f; //mod 32
        this.bitset[wordNumber] |= 1 << bitNumber;
    }

    get(post) {
        const wordNumber = post >> 5; //divide by 32
        const bitNumber = post & 0x1f; //mod 32
        return (this.bitset[wordNumber] & 1 << bitNumber) !== 0;
    }


}