class Node {
    constructor(value){
        this.data = value;
        this.children = [];
        this.status = null;
    }



    addChild(value){
        if(value instanceof Node){
            this.children.push(value);
        }else{
            this.children.push(new Node(value));
        }
    }

    
    
    setChildren(children){
        this.children = children
    }
}

class Graph{
    constructor(nodes){
        this.nodes = nodes ? nodes :[];
    }
    /**
     * Add N numbers to the graph.
     * @param {Array} children An array of Nodes to be added to the graph 
     */
    addNodes(children) {
        this.nodes = this.nodes.concat(children)
    }

    /**
     * Adds a node to the graph
     * @param {Node} node Node to be added.
     */
    addNode(node){
        this.nodes.push(node);
    }


}

module.exports = {Graph,Node};