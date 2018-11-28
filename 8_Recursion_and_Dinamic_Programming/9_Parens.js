function generateParens(count) {
    let str = '';
    let list = [];
    addParen(list, count, count, str, 0);
    return list;
}

function addParen(list, leftRem, rightRem, str, index) {
    if (leftRem < 0 || rightRem < leftRem) {
        return;
    }
    console.log(`letftRem ${leftRem}, rightRem ${rightRem}`);
    if (leftRem === 0 && rightRem === 0) {
        list.push(''+str);
    } else {
        str[index] = '(';
        addParen(list, leftRem - 1, rightRem, str, index + 1);

        str[index] = ')';
        addParen(list, leftRem , rightRem - 1, str, index + 1);
    }
}

module.exports = generateParens;