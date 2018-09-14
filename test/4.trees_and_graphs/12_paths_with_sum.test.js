let countPaths = require('../../4.trees_and_graphs/12_paths_with_sum');
let {Graph,Node} = require('../../4.trees_and_graphs/Graph');

test('Found 2 paths',()=>{
    let root = new Node(1);
    root.left = new Node(3);
    root.right = new Node(7);
    
    root.left.left = new Node(5);
    root.left.right = new Node(7);

    root.right.left = new Node(3);
    root.right.right = new Node(-1);

    expect(countPaths(root,8)).toBe(2);
});