function findPathBiBFS(people,source,destination){
    let sourceData =new BFSData(people.get(source));
    let destData =new BFSData(people.get(destination));

    while(!sourceData.isFinished() && !destData.isFinished()){
        let collision = searchLevel(people, sourceData, destData);
    }

}