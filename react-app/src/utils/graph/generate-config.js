export default function generateConfig(height, width) {
    return {
        directed: true,
        focusAnimationDuration: 3,
        height: height,
        width: width,
        d3 : {
            gravity : -200
        },
        node : {
            labelPosition: "center",
            size: 600
        }
    } // see https://danielcaldas.github.io/react-d3-graph/docs/#config-node
}