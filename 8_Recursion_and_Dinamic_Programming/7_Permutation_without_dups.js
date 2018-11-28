function getPerms(str){
    if(str === null){
        return null;
    }

    let permutations = [];
    if( str.length === 0){
        return "";
    }

    let first = str[0];
    let remainder = str.substring(1);
    let words = getPerms(remainder);
    for (let j = 0; j < words.length; j++) {
        const s = insertChart(words[j],first,j);
        permutations.push(s);
    }
}

function insertChartAt(word, c, i){
    const start = word.substring(0,i);
    const end = word.substring(i);
    return start+c+end;
}