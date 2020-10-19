function breadthFirstSearch(startingNode, targetVal) {
    if (!startingNode) return null;

    let node = startingNode;
    let queue = []
    if (node.val === targetVal) {
        return node;
    } else {
        queue.push(node.neighbor)
    }
}

module.exports = {
    breadthFirstSearch
};