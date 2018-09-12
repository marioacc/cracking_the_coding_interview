let {Graph} = require("./Graph");
let Queue = require("../3.stacks_and_queues/Queue");

const status = {
    unvisited: "unvisited",
    visited: "visited",
    visiting: "visiting",
}

function pathBetween(graph, start, end) {
    if (start === end) {
        return true;
    }
    let queue = new Queue();

    graph.nodes.forEach(setNodeStatusAsUnvisited);

    start.state = status.visiting;
    queue.add(start);
    let actualNode = null;
    while (!queue.isEmpty()) {
        actualNode = queue.remove();
        if (actualNode !== null) {
            for (let child of actualNode.children) {
                if (child.state === status.unvisited) {
                    if (child === end) {
                        return true
                    }else{
                        child.state = status.visiting;
                        queue.add(child);
                    }
                }
            }
        }
        actualNode.state = status.visited;
    }
    return false;
}

function setNodeStatusAsUnvisited(node) {
    node.state = status.unvisited;
}

module.exports = pathBetween;