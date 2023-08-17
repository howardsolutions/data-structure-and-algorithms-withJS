class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     a
//   b    c
// d  e     f
////////////////////////////////////////////
/*
DEPTH FIRST SEARCH: Time O(N), Space O(N)
 */
////////////////////////////////////////////

const depthFirstValues = (root) => {
  if (root === null) return [];

  const results = [];
  const stack = [root];

  while (stack.length > 0) {
    let current = stack.pop();
    results.push(current.value);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return results;
};

// console.log(depthFirstValues(a));

const depthFirstValuesR = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValuesR(root.left);
  const rightValues = depthFirstValuesR(root.right);

  return [root.value, ...leftValues, ...rightValues];
};

// console.log(depthFirstValuesR(a));

////////////////////////////////////////////
/*
BREADTH FIRST SEARCH : Time O(N), Space O(N)
 */
////////////////////////////////////////////

const breadthFirstValue = (root) => {
  if (root === null) return [];
  const queue = [root];
  const results = [];

  while (queue.length > 0) {
    let current = queue.shift();
    results.push(current.value);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return results;
};

// console.log(breadthFirstValue(a));

////////////////////////////////////////////
/*
Tree Includes : Time O(N), Space O(N)
 */
////////////////////////////////////////////

// BFS
const treeIncludes = (root, target) => {
  if (root === null) return false;
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
};

const treeIncludesDFS = (root, target) => {
  if (root === null) return false;
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    if (current.value === target) return true;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return false;
};

// console.log(treeIncludesDFS(a, "e"));

// console.log(treeIncludes(a, "j"));

// Recursive Depth First
const treeIncludesR = (root, target) => {
  if (root === null) return false;
  if (root.value === target) return true;
  return treeIncludesR(root.left, target) || treeIncludesR(root.right, target);
};

// console.log(treeIncludesR(a, "a"));

////////////////////////////////////////////
/*
Tree SUM : Time O(N), Space O(N)
 */
////////////////////////////////////////////
// Recursive using Depth first traversal
const treeSumR = (root) => {
  if (root === null) return 0;
  return root.value + treeSumR(root.left) + treeSumR(root.right);
};

// Iterative using BF traversal
const treeSum = (root) => {
  let sum = 0;
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();
    sum += current.value;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return sum;
};

////////////////////////////////////////////
/*
Tree MIN VALUE : Time O(N), Space O(N)
 */
////////////////////////////////////////////

const treeMin = (root) => {
  const stack = [root];
  let smallest = Infinity;

  while (stack.length) {
    const current = stack.pop();
    if (current.value < smallest) smallest = current.value;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return smallest;
};

const treeMinR = (root) => {
  if (root === null) return Infinity;
  const leftMin = treeMinR(root.left);
  const rightMin = treeMinR(root.right);

  return Math.min(root.value, leftMin, rightMin);
};
