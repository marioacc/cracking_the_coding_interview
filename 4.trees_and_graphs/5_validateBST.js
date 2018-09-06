function validateBST(root){
    if(root === null){
        return true;
    }
    const rightNodeValue = root.right ? root.right.data : Infinity;
    const leftNodeValue = root.left ? root.left.data : -Infinity;

    if(leftNodeValue<=root.data && root.data< rightNodeValue){
        return validateBST(root.left) && validateBST(root.right);
    }else{
        return false;
    }
}



module.exports = validateBST;