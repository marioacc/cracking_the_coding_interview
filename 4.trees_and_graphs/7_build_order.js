class Project {
    constructor(name) {
        this.children = [];
        this.map = new Map();
        this.name = name;
        this.dependencies = 0;
    }

    /**
     * Adds the node as a children and increments the dependencies of that node. 
     * @param {Project} node Adds this project as a dependency. 
     */
    addNeighbor(node) {
        if (!this.map.has(node.name)) {
            this.children.push(node);
            this.map.set(node.name, node);
            node.incrementDependencies();
        }
    }

    /**
     * Increment the number of dependencies of this node.
     */
    incrementDependencies() {
        this.dependencies++;
    }

    /**
     * Decrement the number of dependencies of this node.
     */
    decrementDependencies() {
        this.dependencies--;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.map = new Map();
    }

    /**
     * Creates a new node if this does not exist or return the existing one.
     * @param {String | number} name 
     * @return {Project} The node created or already existing.
     */
    getOrCreateNode(name) {
        if (!this.map.has(name)) {
            this.createNode(name);
        }

        return this.map.get(name);
    }

    /**
     * Creates a Project node in the graph
     * @param {Project} name name of the project
     * @returns {Project} reference to the project created.
     */
    createNode(name) {
        let project = new Project(name);
        this.nodes.push(project);
        this.map.set(name, project);
    }

    /**
     * Creates an edge between two nodes.
     * @param {Project} from Start of the edge.
     * @param {Project} to End of the edge.
     */
    addEdge(from, to) {
        let start = this.getOrCreateNode(from);
        let end = this.getOrCreateNode(to);
        start.addNeighbor(end);
    }
}

/**
 *
 *
 * @param {String[]} projects 
 * @param {String[][]} dependencies 
 * @returns {Graph} Builds the graph, adding the edge (a,b) if b is dependent on a. Assumes as pair is listed in "build order".
 * The pair (a,b) in dependencies indicates that b depends on a and a must be build before b.
 */
function buildGraph(projects, dependencies) {
    let graph = new Graph();
    projects.forEach(graph.createNode.bind(graph));

    dependencies.forEach(([dependencyProject, project]) => graph.addEdge(dependencyProject, project));
    return graph;
}

/**
 * Insert projects with zero dependencies into the order project
 * @param {Project[]} order List of projects in order to be build.
 * @param {Project[]} projects list of projects to be ordered.
 * @param {number} offset offset from where to start in the adding projects in the project array.
 * @return {number} number of projects already ordered.
 */
function addNonDependent(order, projects, offset) {
    projects.forEach((project) => {
        if (project.dependencies === 0) {
            order[offset] = project;
            offset++;
        }
    })
    return offset;
}

/**
 * Returns a list of the projects build order.
 * @param {Project[]} projects 
 * @return {Project[]} projects built in correct order.
 */
function orderProjects(projects) {
    let order = [];
    let endOfList = addNonDependent(order, projects, 0);
    let toBeProcessed = 0;

    while (toBeProcessed < projects.length) {
        let current = order[toBeProcessed];

        /**
         * We have a circular dependency since there 
         * are no remaining projects with zero dependencies.
         */
        if (current === undefined) {
            return null;
        }

        /**
         * Remove current from the dependencies in its children.
         */
        current.children.forEach((child) => child.decrementDependencies());

        endOfList = addNonDependent(order,current.children,endOfList);
        toBeProcessed++;
    }
    return order;
}

/**
 * Finds the correct build order between the projects and its dependencies.
 * @param {String[]} projects 
 * @param {String [][]} dependencies 
 */
function findBuildOrder(projects, dependencies){
    const graph = buildGraph(projects,dependencies);
    return orderProjects(graph.nodes);
}

module.exports = findBuildOrder;