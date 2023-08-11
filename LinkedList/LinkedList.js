// 15 ==> 20 ==> 30 ==> 25;

// let myLinkedList = {
//   head: {
//     value: 15,
//     next: {
//       value: 20,
//       next: {
//         value: 30,
//         next: {
//           value: 25,
//           next: null
//         }
//       }
//     }
//   }
// };

// 15 ==> 20 ==> 30 ==> 25

// By Thinh (Howard) Phung 2022

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;

    this.length = 1;
  }

  // Append Item to the END of the list
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // PREPEND item to the very FIRST of the list
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }

  printList() {
    const list = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return list;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // INSERT
  insert(index, value) {
    // check index params.
    if (index === 0) {
      return this.prepend(value);
    }

    if (index > this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this.printList();
  }

  // REMOVE
  remove(index) {
    // check params;
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;

    this.lengh--;
    return this.printList();
  }

  reverse() {
    // If the list only have 1 items
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;

    let second = first.next;

    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    // after reverse the head => become the tail
    // so "head" => "tail" => null
    this.head.next = null;
    this.head = first;

    return this.printList();
  }
}

//  *   *
//   \ /
//    *

// * - * - *

const myLinkedList = new LinkedList(15);
myLinkedList.append(20);
// myLinkedList.prepend(8)
myLinkedList.append(30);
myLinkedList.append(25);
// myLinkedList.insert(0, 2)
// myLinkedList.insert(2, 2025)
// myLinkedList.remove(2)
// console.log(myLinkedList.printList());
// console.log(myLinkedList)
console.log(myLinkedList.reverse());
console.log(myLinkedList);

//////////// MERGE Linkedlist
const zipperLinkedList = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 && current2) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current2 = current1.next;
    }

    tail = tail.next;
    count++;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return head1;
};
