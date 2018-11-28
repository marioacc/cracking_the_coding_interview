const parens = require('../../8_Recursion_and_Dinamic_Programming/9_Parens');



test('1 pair of parens is ()', () => {
    expect(parens(1).join(',')).toBe('()');
})

test('2 pairs of parens are ()() (()) ', () => {
    expect(parens(2).join(',')).toBe('(()),()()');
})