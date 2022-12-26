import { Graph } from "react-d3-graph"
import useWindowDimensions from "../utils/window-dimensions"
import generateConfig from "../utils/graph/generate-config"
import generateData from "../utils/graph/generate-data"
import {onClickNode, onRightClickNode, onClickLink} from "../utils/graph/generate-events"

function CustomGraph() {
    const { height, width } = useWindowDimensions();
    return <div border-color="#0" border-width="thick">
        <Graph
            id="graph-id"
            data={generateData(height, width)}
            config={generateConfig(height, width)}
            onClickNode={onClickNode}
            onClickLink={onClickLink}
            onRightClickNode={onRightClickNode}
        />
    </div>;
}

export default CustomGraph;