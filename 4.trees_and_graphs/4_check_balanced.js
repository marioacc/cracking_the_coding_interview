function checkBalanced(root){
    if (root === null){
        return -1;
    }

    const leftHeight = checkBalanced(root.left);
    if(leftHeight === -Infinity){
        return leftHeight
    }

    const rightHeight = checkBalanced(root.right);
    if(rightHeight === -Infinity){
        return rightHeight
    }

    const heightDiff = Math.abs(rightHeight - leftHeight);

    if(heightDiff>1){
        return -Infinity;
    }
    return Math.max(rightHeight,leftHeight) + 1;
}

function isBalanced(root){
    return checkBalanced(root) !== -Infinity;
}

module.exports = isBalanced