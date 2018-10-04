function runFamilies(n){
    let boys,girls=0;
    for(let i = 0,; i < n; i++){
        const {boys:newFamilyBoys,girls:newFamilyGirls} = runOneFamily();
        girls+=newFamilyGirls;
        boys+=newFamilyBoys;
    }
    return girls/(girls+boys);
}

function runOneFamily(){
    let boys,girls = 0;
    while(girls===0){
        if(Math.random()>.5){
            girls++;
        }else{
            boys++;
        }
    }

    return {boys,girls};
}