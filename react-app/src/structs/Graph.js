export const Graph = {
    adjacencyList: {},
    courseMap: {},
    addListEle(node) {
        /*
            Add parent node as prereq to list of nodes that is initially empty (Ex: Add 445 node to graph)
        */
        this.adjacencyList[node] = [];
    },
    addNodeEle(prereq, node) {
        /*
            Add parent node as prereq with a node that needs parent as prereq (Ex: 445 prereq adds 1501 to list of nodes)
        */
        this.adjacencyList[prereq].push(node);
    },
    toString() {
        /*
            toString() of Graph, prints (key, value) pairs of prereq and list of dependent nodes
        */
        let output = "";
        for (let [key, value] of this.adjacencyList) {
            output = output.concat("{", key, " : [");
            for (let node of value) {
                output = output.concat(node, ", ");
            }
            output = output.concat("]}\n");
        }
        return output;
    },
    fillDict(term, deptCode) {
        // to convert from fill_dict(self, term, dept_code) in python/structs.py
    },
    format() {
        /*
            Convert graph to JSON format
        */
        let nodes = [];
        for (let entry of Object.values(this.courseMap)) {
            nodes.push(entry.format());
        }
        let links = [];
        for (let [key, value] of this.adjacencyList) {
            for (let ele of value) {
                links.push({source:key.toString(), target:ele.toString()});
            }
        }
        return {nodes: nodes, links: links};
    }
}