// adjacency list is typically prefer way to present graph information
const graph = {
  a: ["c", "b"],
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

// depthFirstPrint(graph, "a");

const breadthFirstPrint = (graph, root) => {};
