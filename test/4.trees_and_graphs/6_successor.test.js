let findSuccesor  = require('../../4.trees_and_graphs/6_successor');
let Tree = require('../../4.trees_and_graphs/Tree');
let Node = require('../../4.trees_and_graphs/Node');

test('Validate Binary Search Tree', () => {
    let tree = new Tree();
    tree.root.data = 4;
    tree.root.left = new Node(2);
    tree.root.right = new Node(6);
    tree.root.left.parent = tree.root.right.parent = tree.root;

    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);
    tree.root.left.left.parent = tree.root.left.right.parent = tree.root.left;
    

    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(7);
    tree.root.right.left.parent = tree.root.right.right.parent = tree.root.right;

    expect(findSuccesor(tree.root.right.right)).toBeFalsy();
})

test('Validate Non Binary Search Tree', () => {
    let tree = new Tree();
    tree.root.data = 4;
    tree.root.left = new Node(2);
    tree.root.right = new Node(6);
    tree.root.left.parent = tree.root.right.parent = tree.root;

    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(3);
    tree.root.left.left.parent = tree.root.left.right.parent = tree.root.left;


    tree.root.right.left = new Node(5);
    tree.root.right.right = new Node(7);
    tree.root.right.left.parent = tree.root.right.right.parent = tree.root.right;

    expect(findSuccesor(tree.root.left.right) === tree.root).toBeTruthy();
})