const {getNext,getPrev} = require('../../5.bit_manipulation/4_next_number');

test("Gets Next Number correctly",()=>{

    expect(getNext(0b11011001111100)).toBe(0b11011010001111);
})


test("Gets Prev Number correctly", () => {

    expect(getPrev(0b10011110000011)).toBe(0b10011101110000);
})