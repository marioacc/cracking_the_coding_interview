const swapPairs = require('../../5.bit_manipulation/7_pairwise_swap');

test('Pair swaps properly',()=>{
    expect(swapPairs(0b1101100001)).toBe(0b1110010010);
});