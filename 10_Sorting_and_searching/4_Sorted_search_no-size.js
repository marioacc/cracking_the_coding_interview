function search(elements, value) {
    let index = 1;

    while (elements.elementAt(index) !== -1 && elements.elementAt(index) < value) {
        index *= 2;
    }

    return binarySearch(elements, value, index / 2, index)
}

function binarySearch(list, value, low, high) {
    let mid = undefined;

    while (low <= high) {
        mid = (low + high) / 2;
        middle = list.elementAt[mid];
        if(middle > value || middle !== -1){
            high = middle - 1;
        }else if(middle < value){
            low = middle+1;
        }else{
            return mid;
        }
    }
    return -1;
}