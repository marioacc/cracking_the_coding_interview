
/**
 * Gets the next number that has the same count of 1's in a binary representations
 * as n in a binary representation.
 * @param {number} n 
 * @returns {number} number with same count of 1's as the binary representation of n
 */
function getNext(n) {
    let tmpN = n;
    let ones_count = 0;
    let zeros_count = 0;

    while (((tmpN & 1) === 0) && (tmpN !== 0)) {
        zeros_count++;
        tmpN = tmpN >>> 1;
    }
    while (((tmpN & 1) === 1)) {
        ones_count++;
        tmpN = tmpN >>> 1;
    }

    if (zeros_count + ones_count === 31 || zeros_count + ones_count === 0) {
        return -1;
    }
    const p = ones_count + zeros_count;
    const clearBitRightToPMask = ~((1 << p) - 1);
    const bitToChangeMask = 1 << p;
    const onesMask = (1 << (ones_count - 1)) - 1;
    n |= bitToChangeMask;
    n &= clearBitRightToPMask;
    n |= onesMask;

    return n;
}

/**
 * Gets the previous number that has the same count of 1's in a binary representations
 * as n in a binary representation.
 * @param {number} n 
 * @returns {number} number with same count of 1's as the binary representation of n
 */
function getPrev(n) {
    let tmpN = n;
    let ones_count = 0;
    let zeros_count = 0;

    while (((tmpN & 1) === 1)) {
        ones_count++;
        tmpN = tmpN >>> 1;
    }
    while (((tmpN & 1) === 0)) {
        zeros_count++;
        tmpN = tmpN >>> 1;
    }

    const p = ones_count + zeros_count;
    const clearBitsRightToPMask = ~0 << (p + 1); //Bit 1 -> 0 is changed here. 

    const onesMask = (1 << (ones_count + 1)) - 1;
    const rightSideOfPMask = onesMask << (zeros_count - 1);
    n &= clearBitsRightToPMask;
    n |= rightSideOfPMask;

    return n;
}


module.exports = {
    getNext,
    getPrev
}