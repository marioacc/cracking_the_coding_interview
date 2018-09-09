let getAllTheSecuences= require('../../4.trees_and_graphs/9_bst_sequences');
let Tree = require('../../4.trees_and_graphs/Tree');
let Node = require('../../4.trees_and_graphs/Node');
test('Get all the sequences',()=>{
    tree = new Tree();
    tree.root.data = 2;
    tree.root.left = new Node(1);
    tree.root.right = new Node(3);

    let sequences = getAllTheSecuences(tree.root);
    let expectedArrays = [[2,1,3],[2,3,1]];
    expect(sequences.reduce((areEquals, list, idx) => {
        return areEquals && compareArrays(list.toArray(),expectedArrays[idx]);
    },true)).toBeTruthy();
    
})

function compareArrays(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    const areElementsEquals = arr1.reduce((areEquals,element,idx)=>{
        return areEquals && element === arr2[idx];
    },true)
    return areElementsEquals

}