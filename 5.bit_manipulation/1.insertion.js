/**
 * Replaces the value of m into n, from the bit i to the bit j.
 * @param {number} n 
 * @param {number} m 
 * @param {number} i 
 * @param {number} j 
 * @returns {number} New value created from the replacement.
 */
function updateBits(n, m, i, j) {
    const ones = ~0;
    const leftSideMask = ones << (j);
    const rightSideMask = ((1 << i) - 1);
    const mask = leftSideMask | rightSideMask;
    const clearedN = n & mask;
    const mInPlace = m << i;
    return clearedN | mInPlace;
}


module.exports = updateBits;