// Implement a QUEUE using 2 stack (stack build with array)

class QueuewStack {
    constructor() {
      this.pushStack = [];
      this.popStack = [];
    };
  
    // enqueue
    push (value) {
      this.pushStack.push(value);
      return this;
    };
  
    // dequeue
    pop() {
      if (!this.popStack.length) {
        while (this.pushStack.length) {
          this.popStack.push(this.pushStack.pop())
        }
      }
  
      return this.popStack.pop();
    };
  
    peek() {
      if (!this.popStack.length) {
        while(this.pushStack.length) {
          this.popStack.push(this.pushStack.pop());
        }
      };
  
      return this.popStack[this.popStack.length - 1];
    };
  
    // check if the queue is empty
    empty () {
      return !this.pushStack.length && !this.popStack.length;
    };
  };
  
  const myQueue = new QueuewStack();
  myQueue.empty();
  myQueue.push(1)
  myQueue.push(2)
  myQueue.push(3)
  myQueue.pop()
  console.log(myQueue.peek())
  
  console.log(myQueue)