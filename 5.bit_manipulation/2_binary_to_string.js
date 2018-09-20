/**
 * Convers num to its binary representation
 * @param {number} num Decimal number to conver to string
 * @returns {String} String representation of the binary number
 */
function binaryToString(num) {
    if (num > 1 || num < 0) {
        return "ERROR";
    }

    let binary = ".";
    while (num > 0) {
        if (binary.length > 32) {
            return "ERROR";
        }
        const r = 2 * num;

        if (r > 1) {
            binary += '1';
            num = r - 1;
        } else {
            binary += '0';
        }

    }
    return binary

}

module.exports = binaryToString