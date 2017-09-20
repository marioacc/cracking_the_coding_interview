function checkPermutation(s1,s2){
    var charsFrecuency={};
    var char='';
    for(var c in s1){
        char = s1.charAt(c);
        if (charsFrecuency[char]){
            charsFrecuency[char]++;
        }else{
            charsFrecuency[char] = 1;
        }
    }
    for (var c in s2){
        char = s2.charAt(c);
        if (!charsFrecuency[char]){
            console.log(1)
            return false;
        }
        charsFrecuency[char]--;
    }

    for(var k in Object.keys(charsFrecuency)){
        console.log(charsFrecuency,k)
        if(charsFrecuency[k]!==0){
            return false;
        }
    }
    return true;
}

console.log(checkPermutation('aba','aba'));
console.log(checkPermutation('aba','abc'));
console.log(checkPermutation('abc','aba'));