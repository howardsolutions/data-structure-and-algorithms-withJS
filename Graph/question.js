// adjacency list is typically prefer way to present graph information
const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

////////////////////////////////////////////
// BFS + DFS TRAVERSAL
/*
    Pattern: 
    BFS: using Queue to keep track the order (FIFO)
    DFS: using Stack to keep track the order (LIFO)
*/
////////////////////////////////////////////
const depthFirstPrint = (graph, root) => {
  const stack = [root];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    console.log(currentNode);

    for (let neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }
};

// there is no need to EXPLICIT specify the base case here
// in case the node has NO neighbor, the recurive function will not going to executed (base case)
const depthFirstPrintR = (graph, root) => {
  console.log(root);
  for (let neighbor of graph[root]) {
    depthFirstPrintR(graph, neighbor);
  }
};

// depthFirstPrint(graph, "a");
// depthFirstPrintR(graph, "a");

const breadthFirstPrint = (graph, root) => {
  const queue = [root];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode);

    for (let neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }
  }
};

// breadthFirstPrint(graph, "a");

////////////////////////////////////////////
/*
  HAS PATH: graph is Asyclic in this case (no cycle)
*/
////////////////////////////////////////////

// Time: O(e) - e = # edges
// Space: O(n) - n = # nodes

const hasPathDFS = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPathDFS(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
};

const hasPathBFS = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

// console.log(hasPathBFS(graph, "a", "f"));
////////////////////////////////////////////
/*
 Undirected path: Time: O(e), Space: O(n)
 cyclic (graph contains at least one cycle) & undirected
*/
////////////////////////////////////////////

// Edges:  the connection between 2 nodes (vertext)
// const edges = [
//   ["i", "j"],
//   ["k", "i"],
//   ["m", "k"],
//   ["k", "l"],
//   ["o", "n"],
// ];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasUndirectedPath(graph, nodeA, nodeB, new Set());
};

function hasUndirectedPath(graph, src, dst, visited) {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasUndirectedPath(graph, neighbor, dst, visited)) return true;
  }

  return false;
}

// build graph out of an edges list
// function buildGraph(edges) {
//   const graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!(a in graph)) graph[a] = [];
//     if (!(b in graph)) graph[b] = [];
//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   return graph;
// }

// console.log(undirectedPath(edges, "i", "l"));
////////////////////////////////////////////
/*
 (connected components) count
 take in an adjecency list represent an undirected graph

 mechanism: need iterative code does traversal through some component as far as 
 possible, then also need some iterative code just to potentially begin traversal at every starting point (neighbor node)
*/
////////////////////////////////////////////

const graphData = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
};

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }

  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
};

// console.log(connectedComponentsCount(graphData));
////////////////////////////////////////////
/* 
  Largest Components
*/
////////////////////////////////////////////

const largestComponent = (graph) => {
  let longest = 0;
  const visited = new Set();

  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }

  return longest;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);

  let size = 1;

  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
};

////////////////////////////////////////////
/* 
  SHORTEST PATH
  patterns: using BFS traversal using Queue
*/
////////////////////////////////////////////
/**
 * Finding shortest path from nodeA to nodeB inside a graph (undirected, cyclic, unweighted)
 * @param {Array} edges - list represent relationship between node => need to turn it into a graph (adjacency list is my prefer)
 * @param {string} nodeA - starting point
 * @param {string} nodeB - destination you're looking for
 * @return {Number} - the shortest path, if cant find the shortest, this fn will explicit return -1
 */

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

const shortestPath = (edges, srcNode, dstNode) => {
  // turn edges list into a graph
  const graph = buildGraph(edges);
  // using Set to mark the Node as visisted - in order to avoid infinite loop
  const visited = new Set([srcNode]);

  // using Queue make sense, BFS
  const queue = [[srcNode, 0]];

  while (queue.length) {
    const [node, distance] = queue.shift();

    if (node === dstNode) return distance;

    for (let neighbor of graph[node]) {
      if (visited.has(neighbor)) continue;

      visited.add(neighbor);
      queue.push([neighbor, distance + 1]);
    }
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

////////////////////////////////////////////
/* 
  ISLAND Count
*/
////////////////////////////////////////////

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

function isLandCount(grid) {
  const visisted = new Set();

  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid.at(0).length; column++) {
      if (exploreIsLand(grid, row, column, visisted) === true) {
        count++;
      }
    }
  }

  return count;
}

function exploreIsLand(grid, row, column, visisted) {
  const rowInBounds = row >= 0 && row < grid.length;
  const columnInBounds = column >= 0 && column < grid.length;

  if (!rowInBounds || !columnInBounds) return false;

  if (grid[row][column] === 'W') return false;

  const position = row + ',' + column;
  if (visisted.has(position)) return false;

  visisted.add(position);

  explore(grid, row - 1, column, visisted);
  explore(grid, row + 1, column, visisted);
  explore(grid, row, column - 1, visisted);
  explore(grid, row, column + 1, visisted);

  return true;
}
