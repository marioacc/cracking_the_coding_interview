class Tree {
    constructor() {
        this.root = null;
    }

    /**
     * Gets a random node from the tree.
     * @returns {TreeNode} Random node selected.
     */
    getRandomNode() {
        if (!this.root) {
            return null
        };
        const random = Math.random() * 10 + this.size();
        return this.root.getIthNode(random);
    }

    /**
     * Inserts a value in the tree
     * @param {number} value Value to be inserted in the tree.
     */
    insertInOrder(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            this.root.insertInOrder(value);
        }
    }

    /**
     * Returns the size of the tree
     * @returns {number} Size of the tree.
     */
    size() {
        return !this.root ? 0 : this.root.size;
    }
}


class TreeNode {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
        this.size = 1;
    }

    /**
     * finds the node that contains that value 
     * @param {number} value value to search in this subtree.
     * @returns {TreeNode} If found returns the TreeNode Object, null otherwise.
     */
    find(value) {
        if (this.data === value) {
            return this;
        } else if (value < this.data) {
            return this.left ? this.left.find(value) : null;
        } else if (value > this.data) {
            return this.right ? this.right.find(value) : null;
        }
        return null;
    }

    /**
     * Inserts a value in the tree.
     * @param {number} value value to be inserted in the tree.
     */
    insertInOrder(value) {
        if (value < this.data) {
            if (this.left) {
                this.left.insertInOrder(value);
            } else {
                this.left = new TreeNode(value);
            }
        } else if (value > this.data) {
            if (this.right) {
                this.right.insertInOrder(value);
            } else {
                this.right = new TreeNode(value);
            }
        }
        this.size++;
    }


    /**
     * Search for a random node inside of the tree.
     * @param {numer} i random value which will be used to look for the node.
     * @returns {TreeNode} random picker node.
     */
    getIthNode(i) {
        const leftSize = this.left ? this.left.size : 0;
        if (i < leftSize) {
            this.left.getIthNode(i);
        } else if (this.size === i) {
            return this;
        } else {
            this.right.getIthNode(i - (leftSize + 1))
        }
    }


}


module.exports = {TreeNode,Tree};