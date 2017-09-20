function palindromePermutation(word) {
    var charsFrecuencies = createBitVectorFromWord(word);
    return charsFrecuencies === 0 || hasExactlyOneBitSet(charsFrecuencies);
}

/**
 * Returns a bit vector created based in the word. 
 * If a letter appears even times, it is set to 0.
 * If a letter appears odd times, it is set to 1.
 * @param {string} s word to create the bit vector from
 * @return bitVector
 */
function createBitVectorFromWord(s) {
    var bitVector = 0;
    for (var i = 0; i < s.length; i++) {
        bitVector = toggleBit(bitVector, getCharCode(s[i]))
    }
    return bitVector;
}

/**
 * Toggle a the bit at the position bit in the bitVector vector
 * @param {int} vector bitVector to toggle.
 * @param {int} bit bit position to toggle.
 * @return toggled bitVector
 */
function toggleBit(bitVector, bit) {
    if (bit === 0) {
        return bitVector
    }
    var mask = 1 << bit;
    if ((bitVector & mask) === 0) {
        bitVector |= mask;
    } else {
        bitVector &= ~mask;
    }
    return bitVector;
}

/**
 * Returns the ASCII value form char minus the ASCII value from char 'a'.
 * @param {string} char char string to get the ASCII value.
 * @return integer value
 */
function getCharCode(char) {
    return char.charCodeAt(0) - ('a'.charCodeAt(0)-1)  ;
}

/**
 * Checks if the bit vector has at most one bit set to onke
 * @param {integer} bitVector bit vector to check if only has at more bit set to 1;
 * @return returns true if has at most one bit set to true, false if not.
 */
function hasExactlyOneBitSet(bitVector){
    return (bitVector & (bitVector-1))===0;
}
console.log(palindromePermutation('aaoc'));
console.log(palindromePermutation('ctatc'));
console.log(palindromePermutation('aabbcc'));
console.log(palindromePermutation('abcc'));