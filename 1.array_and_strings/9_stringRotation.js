function stringRotation(s1,s2){
    if (s1.length === s2.length){
        return (s2+s2).search(s1) !== -1 ;
    }
    return false;
}
  


console.log(stringRotation('wat', 'twa'))