// adjacency list is typically prefer way to present graph information
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
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
    if (hasPath(graph, neighbor, dst) === true) {
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
*/
////////////////////////////////////////////

// Edges:  the connection between 2 nodes (vertext)
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPathUndirected(graph, nodeA, nodeB, new Set());
};

function hasPathUndirected(graph, src, dst, visited) {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPathUndirected(graph, neighbor, dst, visited)) return true;
  }

  return false;
}

// build graph out of an edges list
function buildGraph(edges) {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

// console.log(undirectedPath(edges, "i", "l"));
