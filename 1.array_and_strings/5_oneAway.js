function oneAway(stringOne, stringTwo) {
    // Verify the strings length
    if (Math.abs(stringOne.length - stringTwo.length) > 1) {
        return false;
    }
    // Get shorter and longer string
    var shortStr = stringOne.length > stringTwo.length ? stringTwo : stringOne;
    var longStr = stringOne.length > stringTwo.length ? stringOne : stringTwo;
    var shortIndex = 0;
    var longIndex = 0;
    var foundDifference = false;

    while (shortIndex < shortStr.length && longIndex < longStr.length) {
        if (shortStr.charAt(shortIndex) !== longStr.charAt(longIndex)) {
            if (foundDifference) {
                return false;
            }
            foundDifference = true;
            if (shortStr.length === longStr.length) {
                shortIndex++;
            }
        } else {
            shortIndex++; // If matching, move shorter pointer
        }
        longIndex++; // Always move pointer for longer string
    }
    return true;
}

console.log(oneAway('hola', 'holoo'));
console.log(oneAway('hola', 'hol'));
console.log(oneAway('hola', 'holaa'));