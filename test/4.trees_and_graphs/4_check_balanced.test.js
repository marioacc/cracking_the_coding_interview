let checkBalanced = require('../../4.trees_and_graphs/4_check_balanced');
let Tree = require('../../4.trees_and_graphs/Tree');
let Node = require('../../4.trees_and_graphs/Node');

test('Find unbalanced tree',()=>{
    let testTree = new Tree();
    testTree.root.data = 1;
    testTree.root.left = new Node(3);
    testTree.root.left.left = new Node(4);
    testTree.root.left.right = new Node(5);


    expect(checkBalanced(testTree.root)).toBeFalsy();
})


test('Find balanced tree', () => {
    let testTree = new Tree();
    testTree.root.data = 1;
    testTree.root.left = new Node(2);
    testTree.root.right = new Node(3);
    testTree.root.left.left = new Node(4);
    testTree.root.left.right = new Node(5);


    expect(checkBalanced(testTree.root)).toBeTruthy();
})