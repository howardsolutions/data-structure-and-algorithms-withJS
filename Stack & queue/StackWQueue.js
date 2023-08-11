class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  push(value) {
    // O(1)
    const newNode = new Node(value);

    if (this.length === 0) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    // O(n)
    let popOffNode;

    if (this.start === this.end) {
      popOffNode = this.start;
      this.start = null;
      this.end = null;
      this.length--;
      return popOffNode;
    }

    const follower = this.traverseToIndex(this.length - 1 - 1);
    this.end = follower;
    popOffNode = follower.next;
    follower.next = follower.next.next;

    this.length--;
    return popOffNode;
  }

  traverseToIndex(idx) {
    let currentNode = this.start;
    let counter = 0;

    while (counter < idx) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  top() {
    return this.end;
  }

  empty() {
    return this.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(30);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
