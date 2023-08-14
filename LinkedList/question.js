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

// Time: O(n) Space: O(n) -- need to store function call in the callstack
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
/* Linked List SUM */
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

// console.log(linkedListSum(e));

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

// console.log(linkedListSumR(e));

/////////////////////////////////////////////
/* Linked List FIND */
/////////////////////////////////////////////

// Time: O(n), space: O(1)
const linkedListFind = (head, target) => {
  let current = head;

  while (current !== null) {
    if (current.value === target) return true;
    current = current.next;
  }

  return false;
};

// console.log(linkedListFind(a, "D"));

// Time: O(n), Space: O(n)
const linkedListFindR = (head, target) => {
  if (head === null) return false;
  if (head.value === target) return true;
  return linkedListFindR(head.next, target);
};

// console.log(linkedListFindR(a, "C"));

/////////////////////////////////////////////
/* Get Node VALUE with Given INDEX */
/////////////////////////////////////////////

// RECURSIVE
const getNodeValueR = (head, index) => {
  // base case
  if (index === 0) return head.value;
  if (head === null) return null;

  // recursive case
  return getNodeValue(head.next, index - 1);
};

// Time: O(n)
// Space: O(n) -- store function calls on callstack

const getNodeValue = (head, index) => {
  let current = head;

  while (current) {
    if (index === 0) return current.value;
    index--;
    current = current.next;
  }

  return null;
};
// console.log(getNodeValue(e, 1));
// Time: O(N), Space: O(1);

/////////////////////////////////////////////
/* REVERSE LinkedList */
/////////////////////////////////////////////

const reverseList = (head) => {
  let current = head;
  let prev = null;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // after reverse the prev is the new head of the linkedlist
  return prev;
};

const reverseListR = (prev = null, head) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseListR(head, next);
};

reverseListR(null, a);

/////////////////////////////////////////////
/* ZIPPER LinkedList */
/////////////////////////////////////////////

// Time: O(min(n, m));
// Space: O(1);

const zipperLists = (head1, head2) => {
  let tail = head1;
  let current1 = head1;
  let current2 = head2;
  let count = 0;

  while (current1 && current2) {
    if (count % 2 === 0) {
      // even
      tail.next = current2;
      current2 = current2.next;
    } else {
      // odd
      tail.next = current1;
      curren1 = current1.next;
    }

    tail = tail.next;
    count++;
  }

  if (current1) tail.next = current1;
  if (current2) tail.next = current2;

  return head1;
};

const zipperListsR = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperListsR(next1, next2);

  return head1;
};
