function _search(strings, str, first, last) {
    if (first < last) {
        let mid = (last + first) / 2;
        /**
         * if mid is an empty string, find the closes not empty string
         */
        if (strings[mid] === '') {
            let left = mid - 1;
            let right = mid + 1;
            while (true) {
                if (left < first && right < last) {
                    return -1;
                } else if (right <= last && strings[right] !== '') {
                    mid = right;
                    break;
                } else if (first <= left && strings[left] !== '') {
                    mid = left;
                    break;
                }
                left--;
                right++;
            }
        }

        /**
         * Check for string and recurse if necessary.
         */
        if(strings[mid] === str){
            return mid;
        }else if(str < strings[mid]){
            return search(string, str, first, mid - 1);
        }else if(str > strings[mid]){
            return search(string, str, mid + 1, last);
        }

    }
    return -1
}

function search(strings, str) {
    if (!strings || str === '' || !str) {
        return -1;
    }

    return _search(strings, str, 0, strings.length - 1);
}