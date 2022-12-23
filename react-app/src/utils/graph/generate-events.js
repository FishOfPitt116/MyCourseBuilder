export function onClickNode (nodeId) {
    window.alert(`Clicked node ${nodeId}`);
}; // function which defines what happens to a node when clicked

export function onClickLink (source, target) {
    window.alert(`Clicked link between ${source} and ${target}`)
};