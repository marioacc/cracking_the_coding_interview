function isUnique(s){
    var stringArray = s.split('');
    var sortedArray = stringArray.sort();
    console.log(sortedArray);
    var lastIndexToSearch = sortedArray.length - 2
    for (var i=0; i<lastIndexToSearch;i++){
        if(sortedArray[i]==sortedArray[i+1]){
            return false;
        }
    }
    return true
}

console.log(isUnique('qwerdaasd'))
console.log(isUnique('abcdef'))
console.log(isUnique('abcdefga'))
console.log(isUnique('qwertyuiopasdfghjkl;zxcvbnm,'))
