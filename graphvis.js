var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

svg = svg.call(d3.zoom().on("zoom", function () {
  svg.attr("transform", d3.event.transform)
})).append("g");

svg.append('defs').append('marker')
  .attr('id', 'arrowhead')
  .attr('viewBox', '-0 -5 10 10')
  .attr('refX', 13)
  .attr('refY', 0)
  .attr('orient', 'auto')
  .attr('markerWidth', 10)
  .attr('markerHeight', 10)
  .attr('xoverflow', 'visible')
  .append('svg:path')
  .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
  .attr('fill', '#999')
  .style('stroke','none');

var color = d3.scaleOrdinal(d3.schemeCategory20);

var g = svg.append("g")
  .attr("class", "everything");
  
var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(200))
    .force("charge", d3.forceManyBody().strength(-50))
    .force('y', d3.forceY().y(function(d) { return d.id / 4; }))
    // .force('x', d3.forceX().x(function(d) { return d.id / 4; }))
    // .force('x', d3.forceX().x(function(d) { return (d.id*16) % 800; }))
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json("json/cs.json", function(error, graph) {
  if (error) throw error;

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
    .attr("stroke-width", function(d) { return 3; })
    .attr('marker-end', 'url(#arrowhead)');

  var node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(graph.nodes)
    .enter().append("g");
    // .on('dblclick', function(d) { alert(d.id + " is the node you selected") });

  var circles = node.append("circle")
    .attr("r", 20)
    .attr("fill", function(d) { if (d.completed == false) return 'grey'; return 'lightgreen'; })
    .on("dblclick", function(d) {
      currentColor = d3.select(this).attr("fill")
      currentColor = currentColor == "lightgreen" ? "grey" : "lightgreen";
      d3.select(this).attr("fill", currentColor);
    });
    // .attr("text", function(d) { return d.id });

  // Create a drag handler and append it to the node object instead
  var drag_handler = d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);

  drag_handler(node);
  
  var labels = node.append("text")
      .text(function(d) {
        return d.id;
      })
      .attr("text-anchor", "middle")
      // .attr("text-align", "center")
      .attr('x', 6)
      .attr('y', 3);

  node.append("title")
      .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
  d.x = validate(d.x, 0, width);
  d.y = validate(d.y, 0, height);
}

function validate(x, a, b) {
  if (x < a) x = a + 50;
  if (x > b) x = b - 50;
  return x;
}

//Zoom functions 
function zoom_actions(){
    g.attr("transform", d3.event.transform)
}