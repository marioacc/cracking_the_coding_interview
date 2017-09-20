function stringCompression(str) {
    var compressedString = '';
    var actualChar = '';
    var actualCharCount = 0;
    for (var i = 0; i < str.length; i++) {
        actualChar =  str.charAt(i);
        actualCharCount++;
        if (i+1 > str.length || actualChar !== str.charAt(i+1)) {// Check to add the actualChar to the compressedString
            compressedString += actualChar + actualCharCount; // Append values.
            actualCharCount = 0; // Reset values
            actualChar = str.charAt(i); // Reset values
        }
    }
    return compressedString.length < str.length ? compressedString : str;
}

console.log(stringCompression('aabbccdthfd'));
console.log(stringCompression('aaaaaaaabbccaa'));
console.log(stringCompression('a'));