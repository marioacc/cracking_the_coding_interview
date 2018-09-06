let LinkedList = require('../2.linked_list/LinkedList');

class ListOfDepths {

    constructor(treeRoot) {
        this.list = [];
        this.root = treeRoot;
        this.createListOfNodes(this.root, this.list, 0);

    }

    createListOfNodes(node, list, deep) {
        if (node === null) {
            return;
        }
        if (list.length === deep) {
            list.push(new LinkedList());
        }
        list[deep].appendToTail(node.data);
        this.createListOfNodes(node.left, list, deep + 1);
        this.createListOfNodes(node.right, list, deep + 1);
    }

    getListOfNodesAt(index) {
        return this.list[index];
    }

    setNodeOnListAt(index, node) {
        this.list[index] = node;
    }

    printListOfDepths(){
        this.list.array.forEach((linkedList,index) => {
            console.log(`List at depth ${index} : ${linkedList.printList()}\n`)
        });
    }

}

module.exports = ListOfDepths;