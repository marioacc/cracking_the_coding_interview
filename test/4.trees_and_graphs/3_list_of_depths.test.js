let ListOfDepths = require('../../4.trees_and_graphs/3_list_of_depths');
let Node = require('../../4.trees_and_graphs/Node');
let LinkedList = require('../../2.linked_list/LinkedList');

test('Nodes are stored properly', () => {
    let treeNode = initializeTree();
    let testlistOfDepths = [];
    let listOfDepths = new ListOfDepths(treeNode);
    let listOfDepthsHasElementsHasExpected = true

    testlistOfDepths.push(new LinkedList(1));
    testlistOfDepths.push(new LinkedList().appendFromArray([2, 3]));
    testlistOfDepths.push(new LinkedList().appendFromArray([4, 5, 6, 7]));

    for(let i =0;i<testlistOfDepths.length;i++){
        let testRunner = testlistOfDepths[i].head;
        let depthsRunner = listOfDepths.list[i].head;
        while (testRunner !== null && listOfDepthsHasElementsHasExpected){
            listOfDepthsHasElementsHasExpected = testRunner.data === depthsRunner.data;
            testRunner = testRunner.next;
            depthsRunner = depthsRunner.next;
        }
    }

    expect(listOfDepthsHasElementsHasExpected).toBeTruthy();


})


function initializeTree() {
    let node = new Node(1);
    node.left = new Node(2);
    node.right = new Node(3);
    node.left.left = new Node(4);
    node.left.right = new Node(5);
    node.right.left = new Node(6);
    node.right.right = new Node(7);
    return node;
}