const {Tree,TreeNode} =  require('../../4.trees_and_graphs/11_random_node');

const tree = new Tree();
tree.insertInOrder(1);
tree.insertInOrder(2);
tree.insertInOrder(3);
tree.insertInOrder(4);
tree.insertInOrder(5);

test('finds node',()=>{
    expect(tree.root.find(5)).toBeTruthy();
})

test('finds random value', () => {
    expect(tree.getRandomNode).toBeTruthy();
})