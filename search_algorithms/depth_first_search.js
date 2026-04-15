/*
Depth-First Search (DFS) - easy explanation

How DFS works:
- Start at a source node.
- Explore each branch fully before backtracking.
- Use recursion or a stack.
- Good for path finding and topological ordering.

Time complexity:
- O(V + E).

Space complexity:
- O(V) for recursion stack or explicit stack.
*/

function depthFirstSearch(graph, start) {
    if (typeof graph !== 'object' || graph === null) {
        throw new TypeError('Graph must be an adjacency list object');
    }

    const visited = new Set();
    const order = [];

    function dfs(node) {
        if (visited.has(node)) {
            return;
        }

        visited.add(node);
        order.push(node);

        const neighbors = graph[node] || [];
        for (const neighbor of neighbors) {
            dfs(neighbor);
        }
    }

    dfs(start);
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
console.log('DFS order:', depthFirstSearch(graph, 'A')); // ['A', 'B', 'D', 'E', 'F', 'C']
