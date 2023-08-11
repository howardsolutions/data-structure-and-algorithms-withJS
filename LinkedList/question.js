class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

const e = new Node(1);
const f = new Node(2);
const g = new Node(3);
const k = new Node(4);

a.next = b;
b.next = c;
c.next = d;

e.next = f;
f.next = g;
g.next = k;

/////////////////////////////////////////////
/* Linked List Traversal */
/////////////////////////////////////////////
const printLinkedList = (head) => {
  let currentNode = head;

  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};

const printLinkedListRecursive = (head) => {
  if (head === null) return; // base case

  console.log(head.value);
  printLinkedListRecursive(head.next);
};

// printLinkedList(a);
// printLinkedListRecursive(a);

/////////////////////////////////////////////
/* Linked List VALUES */
/////////////////////////////////////////////

const linkedListValues = (head) => {
  const values = [];
  let current = head;
  while (current) {
    values.push(current.value);
    current = current.next;
  }

  return values;
};

// console.log(linkedListValues(a));

const linkedListValuesR = (head) => {
  const values = [];
  fillValues(head, values);
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.value);
  fillValues(head.next, values);
};

// console.log(linkedListValuesR(a))

/////////////////////////////////////////////
/* Linked List VALUES */
/////////////////////////////////////////////

const linkedListSum = (head) => {
  let sum = 0;
  let current = head;
  while (current) {
    sum += current.value;
    current = current.next;
  }

  return sum;
};

console.log(linkedListSum(e));

// const linkedListSumR = (head) => {
//   return calcSum(head, 0);
// };

// const calcSum = (head, sum) => {
//   if (head === null) return sum;
//   sum = sum + head.value;
//   return calcSum(head.next, sum);
// };

const linkedListSumR = (head) => {
  if (head === null) return 0;
  return head.value + linkedListSumR(head.next);
};

console.log(linkedListSumR(e));
