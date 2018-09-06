let Tree = require('./Tree');
let Node = require('./Node');

class MinimalTree {

    constructor(sortedElements) {
        this.tree = new Tree();
    }

    static createMinimalTree(elements) {
        return this._createMinimalTree(elements, 0, elements.length - 1);


    }

    static _createMinimalTree(elements, start, end) {
        if (end < start) {
            return null;
        }
        const rootIndex = Math.ceil((start + end) / 2);
        let root = new Node(elements[rootIndex]);
        root.left = this._createMinimalTree(elements, start, rootIndex - 1);
        root.right = this._createMinimalTree(elements, rootIndex + 1, end);
        return root;
    }


}

module.exports = MinimalTree;