export default function generateData(height, width) {
    return {
        nodes: generateNodes(height, width),
        links: generateLinks()
    }
}

function generateNodes(height, width) {
    return [
        {
            id: "A",
            x: width/2,
            y: height/2
        },
        {
            id: "B",
            x: width/2,
            y: height/2
        },
        {
            id: "C",
            x: width/2,
            y: height/2
        }
    ]
}

function generateLinks() {
    return [
        {
            source: "A",
            target: "B"
        }
    ]
}