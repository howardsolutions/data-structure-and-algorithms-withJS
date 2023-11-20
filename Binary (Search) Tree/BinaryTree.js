// BINARY TREE
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  };
  
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');
  const g = new Node('g');
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
   //     a 
   //   b    c
   // d  e     f
  
  // BFS ITERATIVE 
  const breathFirstValues = root => {
    if (root === null) return [];
    
    const results = []; 
    const queue = [root]; 
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
      results.push(currentNode.value);
      
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  
    return results;
  }
  
  // console.log(breathFirstValues(a));
  // BFS RECURSIVE
  
  const breathFirstValuesR = (queue, list = []) => {
    if (queue.length === 0) return list;
  
    const currentNode = queue.shift();
    list.push(currentNode.value);
  
    if (currentNode.left) queue.push(currentNode.left);
  
    if (currentNode.right) queue.push(currentNode.right);
  
    return breathFirstValuesR(queue, list)
  };
  
  // console.log(breathFirstValuesR([a], []))
  
  // DFS
  // ITERATIVE
  const deptFirstValues = (root) => {
    if (root === null) return [];
    
    const stack = [root]; 
    const results = [];
    
    while (stack.length > 0) {
      const currentNode = stack.pop();
      results.push(currentNode.value);
      
      if (currentNode.right) stack.push(currentNode.right);
      if (currentNode.left) stack.push(currentNode.left);
    };
  
    return results;
  };
  
  // console.log(deptFirstValues(a))
  
  // RECURSIVE 
  const deptFirstValueR = root => {
    // base case 
    if (root === null) return []; 
  
    // recursive case
    const leftValues = deptFirstValueR(root.left);
    const rightValues = deptFirstValueR(root.right);
  
    return [root.value, ...leftValues, ...rightValues]
  };
  
  // console.log(deptFirstValueR(a))
  
  //////// TREE INCLUDES
  const includes = (root, target) => {
    const queue = [root];
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
    
      if (currentNode.value === target) return true;
      else  {
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    };
  
    return false;
  };
  
  // console.log(includes(a, 'e'))
  
  const includesR = (queue, target) => {
    if (queue.length === 0) return false;
  
    const currentNode = queue.shift();
    if (currentNode.value === target) return true;
  
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  
    return includesR(queue, target);  
  };
  
  // console.log(includesR([a], 'g'));


///////////////////////////////////////////////////////
///// CALCULATE SUM OF THE TREE
///////////////////////////////////////////////////////

// DFS
const treeSumR = root => {
	if (root === null) return 0;
	return root.value + treeSumR(root.left) + treeSumR(root.right);
};

// BFS
const treeSum = root => {
  if (root === null) return 0;

  const queue = [root];
  let totalSum = 0;
  
  while (queue.length > 0) {
    const currentNode = queue.shift();
    totalSum += currentNode.value;

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return totalSum;
};

// Min Value in the tree
// ITERATIVE
const treeMinVal = root => {
  const stack = [root];
  let smallest = root.value;
  
  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode.value < smallest) smallest = currentNode.value;

    if (currentNode.right) stack.push(currentNode.right);
    if (currentNode.left) stack.push(currentNode.left);
  };

  return smallest;
};

// console.log(treeMinVal(a));

// RECURSIVE
const treeMinValR = root => {
  if (root === null) return Infinity;
  const leftMin = treeMinValR(root.left);
  const rightMin = treeMinValR(root.right);

  return Math.min(root.value, leftMin, rightMin);
}

console.log(treeMinValR(a));
