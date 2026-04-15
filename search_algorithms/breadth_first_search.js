/*
Breadth-First Search (BFS) - easy explanation

How BFS works:
- Start at a source node.
- Visit neighbors level by level.
- Use a queue to process nodes in order.
- Good for shortest-path in unweighted graphs.

Time complexity:
- O(V + E), where V is vertices and E is edges.

Space complexity:
- O(V).
*/

function breadthFirstSearch(graph, start) {
    if (typeof graph !== 'object' || graph === null) {
        throw new TypeError('Graph must be an adjacency list object');
    }

    const visited = new Set();
    const queue = [start];
    const order = [];

    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();
        order.push(node);

        const neighbors = graph[node] || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return order;
}

// Example:
const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};
console.log('BFS order:', breadthFirstSearch(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']
