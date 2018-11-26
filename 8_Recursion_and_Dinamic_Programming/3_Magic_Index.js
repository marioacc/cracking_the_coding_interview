function magicFast(array) {
    return _magicFast(array, 0, array.length - 1);
}

function _magicFast(array, start, end) {
    if (end < start) {
        return -1;
    }

    let midIndex = Math.floor((start + end) / 2);
    let midValue = array[midIndex];
    if (midIndex === midValue) {
        return midIndex;
    }

    let leftIndex = Math.min(midIndex - 1, midValue);
    let leftValue = _magicFast(array, start, leftIndex);
    if (leftValue >= 0) {
        return leftValue;
    }

    let rightIndex = Math.max(midIndex + 1, midValue);
    let rightValue = _magicFast(array, rightIndex, end);
    if ( rightValue >= 0) {
        return rightValue;
    }

}