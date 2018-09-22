/**
 * Founds the length of the greater 1 bit chain in n if you add an 1.
 * @param {number} n number where to find the chain.
 * @returns {number} length of the greates chain of 1's.
 */
function flipBit(n) {
    if (~n === 0) {
        return Number.MAX_VALUE;
    }

    let currentLength = 0;
    let previousLength = 0;
    let maxLength = 0;

    while (n !== 0) {
        if (n & 1) {
            currentLength++;
        } else {
            /**Update to :
             * 0 (if next bit is 0) 
             * currentLength (if next bit if 1) */
            previousLength = (n & 2) === 0 ? 0 : currentLength + 1; //Adding 1 because the one bit we are able to shift 
            currentLength = 0;
        }
        n = n >>> 1;
        maxLength = Math.max(previousLength + currentLength, maxLength);
    }
    return maxLength;

}

module.exports = flipBit;