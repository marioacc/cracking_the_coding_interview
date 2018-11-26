function getSubsets(set,index){
    let allSubsets;

    if(set.size() === index){
        allSubsets = [];
        allSubsets.add([]);//Empty set
    }else{
        allSubsets = getSubsets(set,index - 1);
        let item = allSubsets[index];
        let moreSubsets = [];
        for(let i = 0; i < allSubsets.lenght; i++){
            newSubset = [...subset];
            newSubset.push(item);
            moreSubsets.push(newSubset);
        }
        allSubsets.concat(moreSubsets);
    }   
    return allSubsets;
}

