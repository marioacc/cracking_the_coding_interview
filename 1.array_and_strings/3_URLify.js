function URLify(s, finalLength) {
    s = s.split('');
    var actualChar = '';
    var isActualCharSpace = false;
    var spaceCount = 0;
    for (var i = 0; i < finalLength; i++) {
        if (s[i] === ' ') {
            spaceCount++
        }
    }
    var index = finalLength + spaceCount * 2; //finalString index
    console.log(index, s.length)
    for (var i = finalLength - 1; i >= 0; i--) {
        actualChar = s[i];
        isActualCharSpace = isSpace(actualChar);
        if (isActualCharSpace) {
            s[index - 1] = '0';
            s[index - 2] = '2';
            s[index - 3] = '%';
            index = index - 3;
        } else {
            s[index - 1] = actualChar
            index--;
        }
    }
    return s.join('')
}

function isSpace(s) {
    return s === ' ';
}

function isSpaceRepresentation(chars, index) {
    return chars[index] !== '%20';
}

console.log(URLify('mf jhon smith    ', 13))
console.log(URLify('mf jhon smith    ', 13))
console.log(URLify('mf jhon  smith   ', 14))