const getBits = require('../../5.bit_manipulation/6_conversion');

test('Bits difference between 11101 and 01111 is 2',()=>{
    expect(getBits(0b11101,0b01111)).toBe(2);
});