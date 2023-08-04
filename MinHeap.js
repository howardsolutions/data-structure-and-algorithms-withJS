/* 
  Min heap: Every parent's node value must be smaller than its children nodes value
  with both Min Heap or Max Heap -- insert value from left to right

  parent index: (index - 1) / 2 (calculate using math.floor)
  left child index: 2 * index + 1;
  right child index: 2 * index + 2;

  PROS of HEAP
  1) Instant access min or max value at constant time
  2) Useful for priority queues, schedulers (where the earliest item is desired)
*/

class MinHeap {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  // COMMON HELPER method
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // index: index of the node we wanna check is it has a parent?
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  // HELPER method to get Data from Node
  parent(index) {
    return this.storage[this.getParentIndex(index)];
  }

  leftChild(index) {
    return this.storage[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.storage[this.getRightChildIndex(index)];
  }

  swap(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  // Insert data to Heap
  insert(data) {
    this.storage[this.size] = data;
    this.size++;
    // heapify up to check whether the node is inserted at correct position?
    this.heapifyUp();
  }

  heapifyUp() {
    // start at the last element inside our heap (the element we just inserted)
    let index = this.size - 1;

    while (this.hasParent(index) && this.parent(index) > this.storage[index]) {
      this.swap(index, this.getParentIndex(index));
      // get parent of the current Node
      index = this.getParentIndex(index);
    }
  }

  insertR(data) {
    this.storage[this.size] = data;
    this.size++;
    this.heapifyUpRecursive(this.size - 1);
  }

  heapifyUpRecursive(index) {
    if (this.hasParent(index) && this.parent(index) > this.storage[index]) {
      swap(this.getParentIndex(index), index);
      this.heapifyUpRecursive(this.getParentIndex(index));
    }
  }
}
