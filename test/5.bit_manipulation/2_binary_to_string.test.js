const binaryToString = require('../../5.bit_manipulation/2_binary_to_string');



test('Converts .57 to .10010001111',()=>{
    expect(binaryToString(0.75)).toBe('.11');
})

test('Error on binary greater than 32 bits', () => {
    expect(binaryToString(0.573456879809869878)).toBe('ERROR');
})