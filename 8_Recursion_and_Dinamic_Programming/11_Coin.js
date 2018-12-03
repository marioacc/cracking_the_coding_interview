function makeChange(amount) {
    let denominations = [25, 10, 5, 1];
    let map = [[]];
}

function _makeChange(amount, denominations, index, map) {
    if(map[amount][index] > 0){
        return map[amount][index];
    }

    if(index >= denominations.length - 1){
        return 1;
    }

    const denominationAmount = denoms[index];
    let ways = 0;
    for (let i = 0; i *  denominationAmount <= amount ; i++) {
        const amountRemaining = amount - i * denominationAmount;
        ways += _makeChange(amountRemaining,denominations,index + 1, map);
    }
    map[amount][index] = ways;
    return ways;
}