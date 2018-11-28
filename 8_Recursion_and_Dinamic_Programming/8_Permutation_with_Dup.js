function printPerms(str) {
    let result = [];
    let map = buildFreqTable(str);
    _printPerms(map, "", str.lenght, result);
    return result;
}

function buildFreqTable(s) {
    let map = {};
    for (let char of s) {
        map[char] = map[char] === undefined ? 0 : map[char] + 1;
    }
    return map;
}

function _printPerms(map, prefix, remainig, result) {
    if (remainig === 0) {
        result.push(prefix);
        return;
    }

    for (let c in map) {
        let count = map[c];
        if (count > 0) {
            map[c] = count - 1;
            _printPerms(map, prefix + c, remainig - 1, result);
            map[c] = count
        }
    }
}