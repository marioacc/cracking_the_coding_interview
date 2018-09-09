let LinkedList = require('../2.linked_list/LinkedList');

function allSequences(node) {
    let result = [];

    if (node === null) {
        result.push(new LinkedList());
        return result;
    }

    let prefix = new LinkedList();
    prefix.appendToTail(node.data);

    //Recurse on left and right subtrees.
    let leftSeq = allSequences(node.left);
    let rightSeq = allSequences(node.right);

    // Weave together each list from the left and right sides.
    for (let left of leftSeq) {
        for (let right of rightSeq) {
            weaved = [];
            weaveList(left, right, weaved, prefix);
            for (let weaveList of weaved) {
                result.push(weaveList);
            }
        }
    }
    return result;



}

function weaveList(first, second, results, prefix) {
    if(first.size === 0 || second.size === 0 ){
        let result = prefix.clone();
        result.appendList(first);
        result.appendList(second);
        results.push(result);
        return;
    }

    /*Recurse with head of first added to the prefix. Removing the head will damage first,
    * so we'll need to put it back where we found it afterwards.
    */

    const headFirst = first.removeFirst();
    prefix.appendToTail(headFirst);
    weaveList(first,second,results,prefix);
    prefix.removeLast();
    first.addFirst(headFirst);

    /***
     * Do the same thing with the second, damaging and then restoring the list.
    */
    const headSecond = second.removeFirst();
    prefix.appendToTail(headSecond);
    weaveList(first,second,results,prefix);
    second.addFirst(headSecond);

}
module.exports = allSequences;