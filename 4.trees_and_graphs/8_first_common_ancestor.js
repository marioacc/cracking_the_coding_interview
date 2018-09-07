let Node = require('./Node');

function getFirstCommonAncestor(tree, p, q) {
    result = _getFirstCommonAncestor(tree.root, p, q)
}

function _getFirstCommonAncestor(root, p, q) {
    const isNodeNull = root == null;
    if (isNodeNull) {
        return new Result(null, false);
    }

    const areNodesPQTheSameToTheCurrent = root == p && root == q;
    if (areNodesPQTheSameToTheCurrent) {
        return new Result(root, true);
    }

    resultOnLeft = _getFirstCommonAncestor(root, p, q);
    if (resultOnLeft.isAncestor) {
        return resultOnLeft;
    }

    resultOnRight = _getFirstCommonAncestor(root, p, q);
    if (resultOnRight.isAncestor) {
        return resultOnRight;
    }

    const isCurrentNodeTheAncestor = resultOnLeft !== null && resultOnRight !== null;

    if (isCurrentNodeTheAncestor) {
        return new Result(root, true);
    } else if (root === p || root === q) {
        isCurrentNodeAncestor = resultOnLeft.node !== null && resultOnRight.node !== null;
        return new Result(root, isCurrentNodeTheAncestor);
    } else {
        return new Result(resultOnLeft.node !== null ? resultOnLeft : resultOnRight, false);
    }
}

class Result {
    constructos(node, isAncestor) {
        this.node = node;
        this.isAncestor = isAncestor;
    }
}

module.exports = getFirstCommonAncestor;