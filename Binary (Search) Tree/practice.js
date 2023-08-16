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
 