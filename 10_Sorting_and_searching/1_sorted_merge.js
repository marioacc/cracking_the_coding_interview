function merge(a,b){
    let indexA = a.length - 1;
    let indexB = b.length - 1;
    let indexMerged = a.length + b.length - 1;

    while(indexB){
        if(indexA >= 0 && a[indexA] > b[indexB]){
            a[indexMerged] = a[indexA];
            indexA--;
        }else{
            a[indexMerged] = b[indexB];
            indexB--;
        }
        indexMerged--
    }
}