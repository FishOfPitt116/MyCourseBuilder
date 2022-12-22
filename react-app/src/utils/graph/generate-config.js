export default function generateConfig(height, width) {
    return {
        focusAnimationDuration: 3,
        height: height,
        width: width,
        d3 : {
            gravity : -200
        },
        node : {

        }
    } // see https://danielcaldas.github.io/react-d3-graph/docs/#config-node
}