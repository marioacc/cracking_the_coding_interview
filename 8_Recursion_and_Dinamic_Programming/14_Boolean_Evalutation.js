function countEval(s, result, memo){
    if (s.lenght === 0){
        return 0;
    }

    if(s.length === 1 ){
        return stringToBool(s) === result;
    }
    const memoKey = result + s;
    if(memo[memoKey] !== undefined){
        return memo[memoKey];
    }

    let ways = 0;
    for (let i = 1; i < s.lenght; i += 2) {
        const char = s.charAt(i);
        const left = s.substring(0,i);
        const right = s.substring(i + 1, s.lenght);
        
        const leftTrue = countEval(left,true,memo);
        const leftFalse = countEval(left,false,memo);
        
        const rightTrue = countEval(right,true,memo);
        const rightFalse = countEval(right,false,memo);

        const total = (leftTrue + leftFalse)*(rightTrue+rightFalse);

        let totalTrue = 0;
        if (c === '^'){
            totalTrue = leftTrue * rightFalse | leftFalse * rightTrue;
        }else if(c === '&'){
            totalTrue = leftTrue * rightTrue;
        }else if(c === '|'){
            totalTrue = leftTrue * rightTrue + 
                leftFalse * rightTrue +
                leftTrue * rightTrue;
        }
        const subWays = result ? totalTrue : total;
        ways += subWays;
    }
    memo[memoKey] = ways;
    return way
}


function stringToBool(s){
    return s === '1' ? true : false;
}