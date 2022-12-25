// onClickNode(this.props.id) -> what happens to a node when clicked (show course name and description)
export function onClickNode(id, node) {
    window.alert(`Clicked on ${node.dept_code} ${id}`);
    // node.c = "green";
};
// onClick={() => this.props.onClick(i)} 
// onRightClickNode(event, this.props.id) -> what happens to a node when right clicked: mark class as fulfilled (turn to green)
const funct = function(){console.log('hi')};
export function onRightClickNode(f, id, node) {
    window.alert(`Right clicked on ${node.dept_code} ${id}`);
    funct();
}

// onClickLink(this.props.source, this.props.target) -> what happens to a link when clicked (show src and dest course)
export function onClickLink(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`)
};

// onRightClickLink(event, this.props.source, this.props.target) -> what happens to a link when right clicked: mark link as fulfilled (turn to green)
export function onRightClickLink(fd, source, target) {
    window.alert(`Right clicked link between ${source} and ${target}`)
}

// const reactRef = this;
// const onDoubleClickNode = function(nodeId) {
//   let modData = { ...reactRef.state.data };
//   let selectNode = modData.nodes.filter(item => {
//     return item.id === nodeId;
//   });
//   selectNode.forEach(item => {
//     if (item.color && item.color === "red") item.color = "blue";
//     else item.color = "red";
//   });
//   reactRef.setState({ data: modData });
// };

// return (
//   <div className="App">
//     <h1>Hello CodeSandbox</h1>
//     <Graph
//       id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
//       data={this.state.data}
//       config={myConfig}
//       onDoubleClickNode={onDoubleClickNode}
//     />
//   </div>
// );