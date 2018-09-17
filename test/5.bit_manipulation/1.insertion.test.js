const updateBits =  require('../../5.bit_manipulation/1.insertion');

test('111011001 updated to 111110001',()=>{
    expect(updateBits(0b111011001, 0b1100, 2, 6)).toBe(0b111110001);
});