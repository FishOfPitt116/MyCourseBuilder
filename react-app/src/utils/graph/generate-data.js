export default function generateData(height, width) {
    return {
        nodes: generateNodes(height, width),
        links: generateLinks()
    }
}

function generateNodes(height, width) {
    let data = require("../../data/CS.json").nodes;
    // for (let entry of Object.values(data)) {
    //     entry.x = width/2;
    //     entry.y = height/2;
    // }
    let nodes = Object.values(data);
    for (let i in nodes) {
        let node = nodes[i];
        console.log(node);
        node.x = width/2;
        node.y = Math.random()*(width-200) + 100;
        node.y = 100 + (i * ((height-200)/nodes.length));
        // node.color = "green"; -> only have this if node has no prereqs
    }
    return data;
    // return [
    //     {
    //         id: "A",
    //         x: width/2,
    //         y: height/2
    //     },
    //     {
    //         id: "B",
    //         x: width/2,
    //         y: height/2
    //     },
    //     {
    //         id: "C",
    //         x: width/2,
    //         y: height/2
    //     }
    // ]
}

function generateLinks() {
    return require("../../data/CS.json").links;
    // return [
    //     {
    //         source: "A",
    //         target: "B"
    //     }
    // ]
}