/**
 * Search for the treeRoot2 inside of the treeRoot1.
 * @param {Node} treeRoot1 Root of the tree to look in.
 * @param {Node} treeRoot2 Root of the tree to search for.
 * @returns {boolean} true if treeRoot2 is found, false otherwise.
 */
function containsTree(treeRoot1, treeRoot2) {
    if (treeRoot2 === null) {
        return true;
    }
    return subTree(treeRoot1, treeRoot2);
}

/**
 * Search for the root of the subtree 2 inside of the tree 1.
 * @param {Node} r1 root of the tree 1.
 * @param {Node} r2 root of the tree 2.
 * @returns {boolean} True if founds the same structure in the subtree 2, false otherwise.
 */
function subTree(r1, r2) {
    if (r1 === null) {
        return false;
    } else if (r1.data === r2.data && matchTree(r1, r2)) {
        return true;
    }
    return subTree(r1.left, r2) || subTree(r1.right, r2);

}

/**
 * Compares the subtree of the tree 1 with subtree 2 to see if they are equals
 * @param {Node} r1 node of the tree 1 where the root of the subtree 2 was found.
 * @param {Node} r2 r2 root of the tree 2.
 * @returns {boolean} true if the subtree is equals, false otherwise
 */
function matchTree(r1, r2) {
    if (r1 === null && r2 === null) {
        return true;
    } else if (r1 === null || r2 === null) {
        return false;
    } else if (r1.data !== r2.data) {
        return false;
    } else {
        return matchTree(r1.left, r2.left) && matchTree(r1.right, r2.right);
    }
}


module.exports = containsTree;