function countWays(stepsNumber){
    let memo = new Array(stepsNumber+1);
    memo.fill(-1);
    return _countWays(stepsNumber,memo);
}

function _countWays(stepsNumber,memo){
    if(stepsNumber < 0){
        return 0;
    }else if( stepsNumber === 0){
        return 1;
    }else if( memo[stepsNumber] > -1){
        return memo[stepsNumber];
    }else{
        memo[stepsNumber] = _countWays(stepsNumber - 1, memo) + 
            _countWays(stepsNumber - 2, memo) + 
            _countWays(stepsNumber - 3, memo);
        return memo[stepsNumber];
    }
}