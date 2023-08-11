// By Thinh (Howard) Phung 2022

/*
*************************************
Implement Queue using ARRAY
*************************************
*/ 

class Node {
    constructor (value) {
      this.value = value;
      this.next = null;
    };
  };
  
  class Queue {
    constructor () {
      this.first = null;
      this.last = null;
      this.length = 0;
    };
  
    // See the very first value of the list 
    peek() {
      return this.first;
    }
  
    // Add value to the queue
    enqueue (value) {
      const newNode = new Node (value);
      
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;  
      }
  
      this.length++;
  
      return this;
    };
  
    // remove value from the front (first) of the list 
    dequeue () {
      if (!this.first) return null;
      
      if (this.first === this.last) {
        this.last = null
      }
      
      this.first = this.first.next;
      
      this.length--;
  
      return this;
    }
  };
  
  const myQueue = new Queue();
  
  myQueue.enqueue('Joy')
  myQueue.enqueue('Howard')
  myQueue.enqueue('Yihua')
  myQueue.enqueue('HAT')
  myQueue.dequeue()
  myQueue.dequeue()
  myQueue.dequeue()
  myQueue.dequeue()
//   console.log(myQueue)

  /*
*************************************
Implement Queue using STACK
*************************************
*/ 