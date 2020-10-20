function numRegions(graph) {

}

function isNewRegion(node, graph, visited) {
    if (visited.has(node)) return false;
    visited.add(node);
    graph[node].forEach((neighbor) => {
        isNewRegion(neighbor, graph, visited);
    });

    return true;
}

module.exports = {
    numRegions
};