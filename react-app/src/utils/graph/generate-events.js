// onClickNode(this.props.id) -> what happens to a node when clicked (show course name and description)
export function onClickNode(id, node) {
    window.alert(`Clicked on ${node.dept_code} ${id}, will turn green`);
    node.color = "green";
    console.log('Clicked on ' + node.dept_code + ' ' + id + ' with color: ' + node.color);
};

// onRightClickNode(event, this.props.id) -> what happens to a node when right clicked: mark class as fulfilled (turn to green)
export function onRightClickNode(event, id, node) {
    window.alert(`Right clicked on ${node.dept_code} ${id}, will turn orange`);
    node.color = 'orange';
    console.log('Right clicked on ' + node.dept_code + ' ' + id + ' with color: ' + node.color);
}

// onClickLink(this.props.source, this.props.target) -> what happens to a link when clicked (show src and dest course)
export function onClickLink(source, target, link) {
    window.alert(`Clicked link between ${source} and ${target}, will turn red`)
    // this.color = 'red';
    console.log('Clicked on link between ' + source + ' and ' + target + ' with color: ');
    // Trying to figure out how to change link color but don't think it's possible
};