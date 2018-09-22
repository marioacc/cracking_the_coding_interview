const flipBit =  require('../../5.bit_manipulation/3_flip_bit');

test("Is 1775  1's chain length 8", () => {
    expect(flipBit(1775)).toBe(8);
});