let MinimalTree = require('../../4.trees_and_graphs/2_minimal_tree');
let Tree = require('../../4.trees_and_graphs/Tree');

test('Tree places elements as in a Binary Search Tree', () => {
    elements = [1, 2, 3];
    minimalTree = MinimalTree.createMinimalTree(elements);
    let isInOrderEqualsToSortedArray = true;
    let inOrderRunnedTree = [];
    Tree.inOrderTraversal(minimalTree, ({
                data
            }) => {
        inOrderRunnedTree.push(data);
    })
    let i = elements.length;
    while(i-- >= 0 && isInOrderEqualsToSortedArray){
        isInOrderEqualsToSortedArray = elements[i] === inOrderRunnedTree[i];
    } 

    expect(isInOrderEqualsToSortedArray).toBeTruthy();

})