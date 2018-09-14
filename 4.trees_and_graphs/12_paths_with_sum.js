function countsPathsWithSum(root, targetSum) {
    return _countsPathsWithSum(root, targetSum, 0, {});
}

function _countsPathsWithSum(node, targetSum, runningSum, pathCount) {
    if (!node) {
        return 0;
    }
    /**Count paths with sum ending at the current node. */
    runningSum += node.data;
    let sum = runningSum - targetSum;
    let totalPaths = pathCount[sum] ? pathCount[sum] : 0;

    /**If runningSum equals targetSum, then one additional path starts at root*/
    if (runningSum === targetSum) {
        totalPaths++;
    }

    /**Increment pathCount, recurse, then decrement pathCount */
    incrementHash(pathCount, runningSum, 1);
    totalPaths += _countsPathsWithSum(node.left, targetSum, runningSum, pathCount);
    totalPaths += _countsPathsWithSum(node.right, targetSum, runningSum, pathCount);
    incrementHash(pathCount, runningSum, -1);

    return totalPaths;
}


function incrementHash(hash, key, delta) {
    const newValue = (hash[key] ? hash[key] : 0) + delta;
    if (newValue === 0) {
        delete hash[key];
    } else {
        hash[key] = newValue;
    }
}


module.exports = countsPathsWithSum;