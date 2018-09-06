function findNextNode(node) {
    const hasRightChild = node.right !== null;
    let nextNode = null;
    if(hasRightChild){
        return traverseLeftSide(node);
    }else{
        let runner = node;
        while (runner  && runner.data <= node.data) {
            runner = runner.parent;
        }
        nextNode = runner;
    }
    return nextNode;

}

function traverseLeftSide(node){
    let runner = node;
    while (runner.left !== null) {
        runner = runner.left;
    }
    return runner;
}
module.exports = findNextNode;