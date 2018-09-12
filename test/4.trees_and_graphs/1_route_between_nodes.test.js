let {
    Graph,
    Node
} = require('../../4.trees_and_graphs/Graph');
let existPathBetweenNodes = require('../../4.trees_and_graphs/1_route_between_nodes');
test('Does find path beetween nodes', () => {

    let nodeA = new Node('start');
    let nodeB = new Node('end');
    let graph = new Graph();
    graph.addNode(nodeA);
    graph.addNode(nodeB);
    for (let i = 0, node = null; i < 5; i++) {
        node = new Node(i);

        for (let j = 0; j < 5; j++) {
            node.addChild(j);

        }
        nodeA.addChild(node);
        graph.addNode(node);
        graph.addNodes(node.children);

        if (i === 4) {
            node.children[3].addChild(nodeB);
        }
    }



    expect(existPathBetweenNodes(graph, nodeA, nodeB)).toBeTruthy();

})

test('Does find path beetween nodes', () => {
    let nodeA = new Node('start');
    let nodeB = new Node('end');
    let graph = new Graph();
    graph.addNode(nodeA);
    graph.addNode(nodeB);
    for (let i = 0, node = null; i < 5; i++) {
        node = new Node(i);

        for (let j = 0; j < 5; j++) {
            node.addChild(j);

        }
        nodeA.addChild(node);
        graph.addNode(node);
        graph.addNodes(node.children);
    }





    expect(existPathBetweenNodes(graph, nodeA, nodeB)).toBeFalsy();
})