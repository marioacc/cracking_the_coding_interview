function minProduct(a,b){

}

function minProductHelper(smaller,bigger){
    if(smaller === 0){
        return 0;
    }else if(smaller === 1){
        return bigger;
    }

    let s = smaller >> 1;
    let halfProd = minProductHelper(s,bigger);
    let isOdd = smaller % 2 === 1;

    return isOdd ? 
        halfProd + halfProd + bigger:
        halfProd + halfProd;
}