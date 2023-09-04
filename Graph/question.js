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
