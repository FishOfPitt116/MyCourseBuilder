import { Graph } from 'react-d3-graph'

const data = {
    nodes: [], // courses
    links: [], // prereq/coreq links
};

const myConfig = {

}; // see https://danielcaldas.github.io/react-d3-graph/docs/#config-node

const onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
}; // function which defines what happens to a node when clicked

const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
}; // function which defines what happens to a link when clicked

function CustomGraph() {
    return <Graph
        id="graph-id"
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
    />
};

export default CustomGraph;