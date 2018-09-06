function validateBST(root) {
    return _validateBST(root, null, null);
}

function _validateBST(root, min, max) {
    if (root === null) {
        return true;
    }
    if ((min !== null && root.data <= min) || (max !== null && root.data > max)) {
        return false;
    }

    if (!_validateBST(root.left,min,root.data) || !_validateBST(root.right,root.data,max)) {
        return false;
    } 
    return true;
    
}


module.exports = validateBST;