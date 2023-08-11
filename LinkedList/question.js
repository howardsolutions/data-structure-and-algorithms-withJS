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

a.next = b;
b.next = c;
c.next = d;

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