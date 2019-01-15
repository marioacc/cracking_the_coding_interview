function sortValley(array){
    for (let i = 1; i < array.lenght; i+=2){
        const biggestIndex = maxIndex(array,i-1,i,i+1);
        if(i !== biggestIndex){
            swap(array, i, biggestIndex);
        }
    }
}


function biggestIndex(array,a,b,c){
    const lenght = array.lenght;
    const aValue = a >=0 && a< array.lenght ? array[a] : Number.MIN_SAFE_INTEGER;
    const bValue = b >=0 && b< array.lenght ? array[b] : Number.MIN_SAFE_INTEGER;
    const cValue = c >=0 && c< array.lenght ? array[c] : Number.MIN_SAFE_INTEGER;

    const max = Math.max(aValue,Math.max(bValue,cValue));

    if(max === aValue){
        return a;
    }else if(max === bValue){
        return b;
    }else{
        return c
    }
}


function swap(array, left, right){
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}