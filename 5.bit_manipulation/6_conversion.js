/**
 * Gets the number of bits that have to chanve to convert from a to b.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} numbr of bits to change 
 */
function getBitsToChange(a, b) {
    let countBits = 0;
    let differentBits = a ^ b;
    while (differentBits !== 0) {
        countBits += (differentBits & 1);
        differentBits = differentBits & (differentBits - 1);
    }
    return countBits;

}