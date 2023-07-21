/* 
  Min heap: Every parent's node value must be smaller than its children nodes value
  insert value from left to right

  parent index: (index - 1) / 2
  left child index: 2 * index + 1;
  right child index: 2 * index + 2;
*/

class MinHeap {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  // HELPER HEAP FUNCTIONS

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  parent(index) {
    return this.storage[this.getParentIndex(index)];
  }

  leftChild(index) {
    return this.storage[this.getRightChildIndex(index)];
  }

  rightChild(index) {
    return this.storage[this.getRightChildIndex(index)];
  }

  swap(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }
}
