let Tree = require('../../4.trees_and_graphs/Tree');
let Node = require('../../4.trees_and_graphs/Node');
const checkSubtree = require('../../4.trees_and_graphs/10_check_subtree');


test('Found subtree', () => {
    let tree = new Tree();
    const subtreeRoot = new Node(2);
    tree.root.data = 4;
    tree.root.left = subtreeRoot;
    tree.root.right = new Node(6);
   

    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);

    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(7);
    expect(checkSubtree(tree.root, subtreeRoot)).toBeTruthy();
})
test('Found did not found subtree', () => {
    let tree = new Tree();
    tree.root.data = 4;
    tree.root.left = new Node(2);
    tree.root.right = new Node(6);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);
    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(7);

    let subtree = new Tree();

    subtree.root.data = 2;
    subtree.root.left = new Node(1);
    subtree.root.right = new Node(7);
    expect(checkSubtree(tree.root, subtree.root)).toBeFalsy();
})