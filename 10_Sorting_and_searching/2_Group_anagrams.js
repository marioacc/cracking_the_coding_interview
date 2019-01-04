function sort(array){
    let mapList = {};

    for(const s in array){
        const key = sortChars(s);
        if(mapList[key] === undefined){
            mapList[key] = []
        }
        mapList[key].push(s);
    }

    const mapKeys = Object.keys(mapList);
    let index = 0;
    for(const key in mapKeys){
        const words = mapList[key];
        for(const word in words){
            array[index] = word;
        }
    }    
}

function sortChars(s){
    let content = s.split('');
    content.sort();
    return content.join(''); 
}