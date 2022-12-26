export default function generateConfig(height, width) {
    return {
        directed: true,
        focusAnimationDuration: 3,
        height: height,
        width: width,
        d3 : {
            gravity : -200,
            linkLength: 125,
            // disableLinkForce: true,
        },
        node : {
            labelPosition: "center",
            size: 1000,
            fontSize: 9,
            fontWeight: 'bold',   // 'bold', 'bolder', 100, 900
            symbolType: 'circle',   // 'diamond', 'square', 'star'
        },
        link : {
            color: 'black',
        }
    } // see https://danielcaldas.github.io/react-d3-graph/docs/#config-node
}