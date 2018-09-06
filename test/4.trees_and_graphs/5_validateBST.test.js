let validateBST = require('../../4.trees_and_graphs/5_validateBST');
let Tree = require('../../4.trees_and_graphs/Tree');
let Node = require('../../4.trees_and_graphs/Node');

test('Validate Binary Search Tree', () => {
    let tree = new Tree();
    tree.root.data = 4;
    tree.root.left = new Node(2);
    tree.root.right = new Node(6);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);
    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(7);

    expect(validateBST(tree.root)).toBeTruthy();
})

test('Validate Non Binary Search Tree', () => {
    let tree = new Tree();
    tree.root.data = 4;
    tree.root.left = new Node(2);
    tree.root.right = new Node(7);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);
    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(6);

    expect(validateBST(tree.root)).toBeFalsy();
})