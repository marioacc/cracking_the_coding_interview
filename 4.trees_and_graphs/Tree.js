let Node = require('./Node');

class Tree{
    constructor(){
        this.root = new Node();
    }

    static inOrderTraversal(node,cb){
        if(node){
            Tree.inOrderTraversal(node.left,cb);
            cb(node)
            Tree.inOrderTraversal(node.right,cb);
        }
    }
}

module.exports = Tree;